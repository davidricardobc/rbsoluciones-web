import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/content/blog/posts";
import { formatBlogDate } from "@/lib/blog-date";

const description = "Guías prácticas para construir bien: materiales, estructuras y mantenimiento en el Meta.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">Blog</h1>
            <p className="text-xl text-slate-300 leading-relaxed">{description}</p>
          </div>
        </div>
      </section>
      <section aria-label="Artículos del blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="relative aspect-[4/3]">
                  <Image src={post.image.src} alt={post.image.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500 mb-4">
                    <time dateTime={post.datePublished}>{formatBlogDate(post.datePublished)}</time>
                    <span>{post.readingMinutes} minutos de lectura</span>
                  </p>
                  <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">
                    <Link href={`/blog/${post.slug}/`} className="hover:text-accent">{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{post.description}</p>
                  <Link href={`/blog/${post.slug}/`} className="text-accent font-semibold underline underline-offset-4" aria-label={`Leer artículo: ${post.title}`}>
                    Leer artículo <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
