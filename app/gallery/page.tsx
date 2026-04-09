// ─────────────────────────────────────────────────────────────────────────────
// Flippo Land & Wildlife Solutions — Gallery
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Image from "next/image";
import "../globals.css";

export const metadata: Metadata = {
  title: "Gallery | Flippo Land & Wildlife Solutions",
  description:
    "Photos from Flippo Land & Wildlife Solutions — prescribed burns, timber stand improvement, drilling, trapping, and food plots across Arkansas.",
};

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.45 4.36a1 1 0 01-.23 1.02L8.5 11a16.06 16.06 0 007.5 7.5l1.94-1.95a1 1 0 011.02-.23l4.36 1.45a1 1 0 01.68.95V19a2 2 0 01-2 2A18 18 0 013 5z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M3 8a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Our Work", href: "/#gallery" },
  { label: "Meet Drew", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

const serviceNames = [
  { slug: "tsi", title: "Timber Stand Improvement" },
  { slug: "prescribed-burning", title: "Prescribed Burning" },
  { slug: "firebreaks", title: "Firebreak Installation" },
  { slug: "land-clearing", title: "Land Clearing" },
  { slug: "consulting", title: "Consulting" },
  { slug: "food-plots", title: "Food Plots" },
  { slug: "gtr-builds", title: "GTR Builds" },
];

const categories = [
  {
    label: "Prescribed Burns",
    slug: "burns",
    photos: [
      { src: "/images/gallery/burns/IMG_0556.JPG", alt: "Prescribed burn" },
      { src: "/images/gallery/burns/IMG_0584.JPG", alt: "Prescribed burn" },
      { src: "/images/gallery/burns/IMG_0604.JPG", alt: "Prescribed burn" },
      { src: "/images/gallery/burns/IMG_4627.jpeg", alt: "Prescribed burn" },
      { src: "/images/gallery/burns/IMG_4634.jpeg", alt: "Prescribed burn" },
      { src: "/images/gallery/burns/IMG_6471.jpeg", alt: "Prescribed burn" },
      { src: "/images/gallery/burns/IMG_6474.jpeg", alt: "Prescribed burn" },
      { src: "/images/gallery/burns/IMG_6475.jpeg", alt: "Prescribed burn" },
      { src: "/images/gallery/burns/IMG_6490.jpeg", alt: "Prescribed burn" },
      { src: "/images/gallery/burns/IMG_7842.JPEG", alt: "Prescribed burn" },
      { src: "/images/gallery/burns/IMG_7843.JPEG", alt: "Prescribed burn" },
      { src: "/images/gallery/burns/IMG_7861.jpeg", alt: "Prescribed burn fire line" },
      { src: "/images/gallery/burns/IMG_7873.jpeg", alt: "Prescribed burn" },
    ],
  },
  {
    label: "Timber Stand Improvement",
    slug: "tsi",
    photos: [
      { src: "/images/gallery/tsi/IMG_0371.JPG", alt: "Timber stand improvement" },
      { src: "/images/gallery/tsi/IMG_0378.JPG", alt: "Timber stand improvement" },
      { src: "/images/gallery/tsi/IMG_0390.JPG", alt: "Timber stand improvement" },
      { src: "/images/gallery/tsi/IMG_0787.JPG", alt: "Timber stand improvement" },
      { src: "/images/gallery/tsi/IMG_0790.JPG", alt: "Timber stand improvement" },
      { src: "/images/gallery/tsi/IMG_0798.JPG", alt: "Timber stand improvement" },
      { src: "/images/gallery/tsi/IMG_0806.JPG", alt: "Timber stand improvement" },
      { src: "/images/gallery/tsi/Unknown.jpeg", alt: "Timber stand improvement" },
    ],
  },
  {
    label: "Drilling",
    slug: "drilling",
    photos: [
      { src: "/images/gallery/drilling/IMG_0830.JPG", alt: "Drilling" },
      { src: "/images/gallery/drilling/IMG_0837.JPG", alt: "Drilling" },
      { src: "/images/gallery/drilling/IMG_0838.JPG", alt: "Drilling" },
      { src: "/images/gallery/drilling/IMG_0839.JPG", alt: "Drilling" },
      { src: "/images/gallery/drilling/IMG_0841.JPG", alt: "Drilling" },
      { src: "/images/gallery/drilling/IMG_0842.JPG", alt: "Drilling" },
      { src: "/images/gallery/drilling/IMG_0851.JPG", alt: "Drilling" },
      { src: "/images/gallery/drilling/IMG_0852.JPG", alt: "Drilling" },
      { src: "/images/gallery/drilling/IMG_0857.JPG", alt: "Drilling" },
      { src: "/images/gallery/drilling/Unknown.jpeg", alt: "Drilling" },
    ],
  },
  {
    label: "Trapping",
    slug: "trapping",
    photos: [
      { src: "/images/gallery/trapping/IMG_4263.jpeg", alt: "Trapping" },
      { src: "/images/gallery/trapping/IMG_4318.jpeg", alt: "Trapping" },
      { src: "/images/gallery/trapping/IMG_4327.jpeg", alt: "Trapping" },
    ],
  },
  {
    label: "Food Plots",
    slug: "food-plots",
    photos: [
      { src: "/images/gallery/food-plots/IMG_4904.jpg", alt: "Food plot" },
      { src: "/images/gallery/food-plots/IMG_4905.jpg", alt: "Food plot" },
    ],
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  return (
    <>
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-forest-950 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <a href="/" className="flex flex-col leading-none">
            <span className="font-heading text-xl tracking-[0.15em] text-white uppercase">Flippo</span>
            <span className="text-[9px] font-bold tracking-[0.3em] text-amber-500/70 uppercase mt-0.5">
              Land &amp; Wildlife Solutions
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium transition-colors ${
                  link.href === "/gallery"
                    ? "text-amber-400"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:8706790131"
            className="hidden sm:flex items-center gap-2 bg-amber-500 px-4 py-2 text-[13px] font-bold text-forest-950 transition hover:bg-amber-400"
          >
            <IconPhone /> 870-679-0131
          </a>

          <a href="tel:8706790131" className="sm:hidden text-[13px] font-bold text-amber-400">
            870-679-0131
          </a>
        </div>

        {/* Mobile nav */}
        <div className="flex gap-6 overflow-x-auto border-t border-white/8 px-6 py-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-[13px] transition-colors ${
                link.href === "/gallery" ? "text-amber-400" : "text-white/45 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <main>

        {/* ── Page hero ─────────────────────────────────────────────────────── */}
        <section aria-label="Our work gallery" className="bg-forest-950 text-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="flex items-center gap-4 border-b border-white/10 py-5">
              <span className="text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase">
                Previous Work
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="py-16 sm:py-20 lg:py-24">
              <h1 className="font-heading text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
                Results on
                <br />
                <span className="text-amber-400">the ground.</span>
              </h1>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.75] text-white/55">
                From prescribed burns to timber stand improvement — real work on real properties across Arkansas.
              </p>
            </div>
          </div>
        </section>

        {/* ── Gallery categories ────────────────────────────────────────────── */}
        {categories.map((cat, catIndex) => (
          <section
            key={cat.slug}
            id={cat.slug}
            aria-label={cat.label}
            className={catIndex % 2 === 0 ? "bg-white py-16 lg:py-20" : "bg-earth-50 py-16 lg:py-20"}
          >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
              {/* Section header */}
              <div className="mb-8 flex items-center gap-4">
                <span className="text-[10px] font-bold tracking-[0.3em] text-amber-600 uppercase whitespace-nowrap">
                  {cat.label}
                </span>
                <div className="h-px flex-1 bg-earth-100" />
                <span className="text-[11px] text-earth-800/30">{cat.photos.length} photos</span>
              </div>

              {/* Photo grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[14rem]">
                {cat.photos.map((photo, photoIndex) => (
                  <div key={photoIndex} className="relative overflow-hidden group">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section aria-label="Contact Flippo Land and Wildlife Solutions" className="bg-forest-950 py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
            <p className="text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase mb-5">Get Started</p>
            <h2 className="font-heading text-4xl leading-[1.12] sm:text-5xl mb-6">
              Ready to improve your property?
            </h2>
            <p className="text-[0.9375rem] leading-[1.8] text-white/50 max-w-lg mx-auto mb-10">
              Every project starts with a conversation. Tell us about your land and what you're trying to build.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#contact"
                className="bg-amber-500 px-8 py-3.5 text-sm font-bold text-forest-950 transition hover:bg-amber-400"
              >
                Get a Free Consultation
              </a>
              <a
                href="tel:8706790131"
                className="flex items-center gap-2 border border-white/20 px-8 py-3.5 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
              >
                <IconPhone /> 870-679-0131
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-forest-950 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-3 flex flex-col leading-none">
                <span className="font-heading text-lg tracking-[0.15em] text-white uppercase">Flippo</span>
                <span className="text-[9px] font-bold tracking-[0.28em] text-amber-500/50 uppercase mt-0.5">
                  Land &amp; Wildlife Solutions
                </span>
              </div>
              <p className="text-[0.8125rem] leading-relaxed text-white/35 max-w-[18rem]">
                Arkansas land and wildlife management — timber stand improvement,
                prescribed burning, food plots, land clearing, GTR builds, and consulting.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase mb-4">Services</h4>
              <ul className="space-y-2">
                {serviceNames.map((s) => (
                  <li key={s.slug}>
                    <a href="/#services" className="text-[0.8125rem] text-white/40 transition hover:text-amber-400">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase mb-4">Navigate</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-[0.8125rem] text-white/40 transition hover:text-amber-400">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase mb-4">Contact</h4>
              <div className="space-y-3 text-[0.8125rem] text-white/40">
                <a href="tel:8706790131" className="flex items-center gap-2 transition hover:text-amber-400">
                  <IconPhone /> 870-679-0131
                </a>
                <a href="mailto:drew@flippolandandwildlife.com" className="flex items-center gap-2 transition hover:text-amber-400 break-all">
                  <IconMail /> drew@flippolandandwildlife.com
                </a>
                <p className="text-white/25">Serving Arkansas</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-white/25">
              &copy; {new Date().getFullYear()} Flippo Land &amp; Wildlife Solutions. All rights reserved.
            </p>
            <p className="text-[11px] text-white/18">Licensed &amp; Insured · Arkansas</p>
          </div>
        </div>
      </footer>
    </>
  );
}
