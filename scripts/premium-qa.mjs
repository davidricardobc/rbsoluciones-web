import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import os from 'node:os';
import { spawn } from 'node:child_process';
import { once } from 'node:events';

// Offline QA: serve only the local export and control a separate headless Chrome.
const root = path.resolve('dist');
const output = path.resolve('docs/screenshots/premium');
fs.mkdirSync(output, { recursive: true });
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  let file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) { res.writeHead(404).end(); return; }
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
server.listen(3114, '127.0.0.1');
await once(server, 'listening');
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'rb-premium-chrome-'));
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--disable-background-networking', '--remote-debugging-port=9227', '--user-data-dir=' + profile, 'about:blank'], { windowsHide: true, stdio: 'ignore' });
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
let ws;
try {
  let tabs;
  for (let i = 0; i < 20; i++) {
    try { tabs = await (await fetch('http://127.0.0.1:9227/json', { signal: AbortSignal.timeout(500) })).json(); break; } catch { await pause(100); }
  }
  if (!tabs) throw new Error('Headless Chrome did not start');
  ws = new WebSocket(tabs.find(t => t.type === 'page').webSocketDebuggerUrl);
  await once(ws, 'open');
  let id = 0; const pending = new Map();
  ws.addEventListener('message', e => { const m = JSON.parse(e.data); if (m.id) { const p = pending.get(m.id); pending.delete(m.id); if (m.error) p.reject(m.error); else p.resolve(m.result); } });
  const call = (method, params = {}) => new Promise((resolve, reject) => { const n = ++id; pending.set(n, { resolve, reject }); ws.send(JSON.stringify({ id: n, method, params })); });
  await call('Page.enable');
  await call('Network.enable');
  await call('Network.setBlockedURLs', { urls: ['https://*', 'http://*.com/*'] });
  const reports = [];
  for (const [name, url] of [['inicio', '/'], ['servicio', '/servicios/hogar/cocinas-modulares/']]) {
    for (const [width, height] of [[390, 844], [1440, 900]]) {
      await call('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 500 });
      await call('Page.navigate', { url: 'http://127.0.0.1:3114' + url });
      await pause(1800);
      await call('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
      const check = await call('Runtime.evaluate', { expression: `JSON.stringify({title:document.title, width:innerWidth, scrollWidth:document.documentElement.scrollWidth, brokenImages:[...document.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src), cta:[...document.querySelectorAll('header a')].filter(a=>/Cotizar|WhatsApp/.test(a.textContent)).map(a=>({text:a.textContent.trim(),visible:a.getBoundingClientRect().width>0}))})`, returnByValue: true });
      reports.push({ name, width, height, ...JSON.parse(check.result.value) });
      const shot = await call('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
      fs.writeFileSync(path.join(output, `${name}-${width}x${height}.png`), Buffer.from(shot.data, 'base64'));
    }
  }
  await call('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  const reduced = await call('Runtime.evaluate', { expression: 'getComputedStyle(document.documentElement).scrollBehavior', returnByValue: true });
  fs.writeFileSync(path.join(output, 'qa.json'), JSON.stringify({ reports, reducedMotionScroll: reduced.result.value }, null, 2) + '\n');
  console.log(JSON.stringify({ reports, reducedMotionScroll: reduced.result.value }, null, 2));
  await call('Browser.close');
} finally {
  ws?.close(); chrome.kill(); server.close();
}
