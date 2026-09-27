import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/content/blog/posts";
import { formatBlogDate } from "@/lib/blog-date";
import { whatsAppUrl } from "@/lib/whatsapp";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return {
    title: { absolute: `${post.seoTitle} | RB Soluciones` },
    description: post.description,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      type: "article",
      title: `${post.seoTitle} | RB Soluciones`,
      description: post.description,
      url: `/blog/${slug}/`,
      images: [{ url: post.image.src, alt: post.image.alt }],
      publishedTime: post.datePublished,
      siteName: "RB Soluciones Constructivas",
      locale: "es_CO",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `https://rbsoluciones.co/blog/${slug}/`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: new URL(post.image.src, "https://rbsoluciones.co").href,
      datePublished: post.datePublished,
      dateModified: post.datePublished,
      author: { "@type": "Organization", name: "RB Soluciones Constructivas" },
      publisher: { "@id": "https://rbsoluciones.co/#business" },
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rbsoluciones.co/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://rbsoluciones.co/blog/" },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <>
      <article className="min-w-0 break-words">
        <header className="bg-slate-900 py-12 sm:py-20">
          <div className="max-w-[70ch] mx-auto px-6">
            <nav aria-label="Miga de pan" className="text-sm text-slate-300 mb-8">
              <ol className="flex flex-wrap gap-x-2 gap-y-1">
                <li><Link href="/" className="hover:text-white underline underline-offset-4">Inicio</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/blog/" className="hover:text-white underline underline-offset-4">Blog</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{post.title}</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">{post.title}</h1>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
              <span>{post.author}</span>
              <time dateTime={post.datePublished}>{formatBlogDate(post.datePublished)}</time>
              <span>{post.readingMinutes} minutos de lectura</span>
            </div>
          </div>
        </header>
        <div className="max-w-[70ch] mx-auto px-6 py-10 sm:py-16">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-2xl mb-10">
            <Image src={post.image.src} alt={post.image.alt} fill sizes="(max-width: 767px) 100vw, 70ch" className="object-cover" priority />
          </div>
          <div className="text-lg leading-relaxed text-slate-600">
            {post.blocks.map((block, index) => {
              switch (block.type) {
                case "p":
                  return <p key={index} className="mb-6">{block.text}</p>;
                case "h2":
                  return <h2 key={index} className="mt-12 mb-6 text-2xl sm:text-3xl font-heading font-bold text-slate-900">{block.text}</h2>;
                case "list":
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-4 mb-8">
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item.label && <><strong className="text-slate-900">{item.label}</strong>{": "}</>}{item.text}</li>
                      ))}
                    </ul>
                  );
                case "tip":
                  return (
                    <aside key={index} className="my-8 rounded-2xl border-l-4 border-accent bg-accent-light p-6">
                      <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{block.title}</h3>
                      <p>{block.text}</p>
                    </aside>
                  );
              }
            })}
          </div>
          <section aria-labelledby="related-services" className="mt-12 border-t border-slate-200 pt-8">
            <h2 id="related-services" className="text-2xl font-heading font-bold text-slate-900 mb-6">Servicios relacionados</h2>
            <ul className="space-y-3">
              {post.relatedServices.map((service) => (
                <li key={service.href}><Link href={service.href} className="text-accent underline underline-offset-4">{service.label}</Link></li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="blog-contact" className="mt-12 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
            <h2 id="blog-contact" className="text-2xl font-heading font-bold text-slate-900 mb-6">Conversemos sobre tu proyecto</h2>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a href={whatsAppUrl(post.whatsAppMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-whatsapp px-6 py-3 text-center text-white font-semibold hover:opacity-90">Consultar por WhatsApp</a>
              <Link href="/cotizar/" className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-center text-white font-semibold hover:bg-accent-hover">Solicitar cotización</Link>
            </div>
          </section>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }} />
    </>
  );
}
