// ─────────────────────────────────────────────────────────────────────────────
// Flippo Land & Wildlife Solutions — Homepage
// ─────────────────────────────────────────────────────────────────────────────

import Image from 'next/image'
import VideoLoop from './components/VideoLoop'

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

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ── Image placeholder ─────────────────────────────────────────────────────────

function ImgBlock({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 select-none bg-earth-200 text-earth-800/25 ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.75} className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
      </svg>
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">{label}</span>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#gallery" },
  { label: "Meet Drew", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    slug: "tsi",
    title: "Timber Stand Improvement",
    abbr: "TSI",
    summary:
      "Remove low-value trees and give your high quality timber room to grow. TSI is one of the highest-return investments a landowner can make — improving deer, turkey, and duck habitat while increasing the long-term value of the property.",
    bullets: ["Hack and squirt", "Tree girdling", "Cut and drop"],
  },
  {
    slug: "prescribed-burning",
    title: "Prescribed Burning",
    abbr: null,
    summary:
      "Fire, used correctly, is one of the most effective tools in land management. We design and conduct prescribed burns to set back encroaching vegetation, promote native plant diversity, and improve habitat for deer, turkey, and quail. We are fully insured.",
    bullets: ["Burn planning and execution", "Native plant promotion", "Deer, turkey, and quail habitat improvement"],
  },
  {
    slug: "firebreaks",
    title: "Firebreak Installation",
    abbr: null,
    summary:
      "A good burn starts with a dependable firebreak. We have access to a range of equipment and build breaks that actually work — protecting your property and giving burns the conditions they need to run safely.",
    bullets: ["Mechanical and hand-cut", "All terrain types", "Designed to support your burn plan"],
  },
  {
    slug: "land-clearing",
    title: "Land Clearing",
    abbr: null,
    summary:
      "Whether you need access trails cut in or ground cleared for food plots, we approach land clearing with your long-term habitat goals in mind — not just getting the work done fast.",
    bullets: ["Access trails", "Food plot clearing and preparation"],
  },
  {
    slug: "consulting",
    title: "Consulting",
    abbr: null,
    summary:
      "For landowners who want to manage their own property but need a professional plan to work from. We develop written land and wildlife management plans, help with mapping, and can identify government cost-share programs your property may qualify for.",
    bullets: ["Land and wildlife management plans", "Mapping and property layout", "Government program guidance"],
  },
  {
    slug: "food-plots",
    title: "Food Plots",
    abbr: null,
    summary:
      "We establish fall and summer food plots with an emphasis on soil health and seed selection for the specific wildlife you're managing. A plot that produces year after year starts with the right foundation.",
    bullets: ["Fall and summer programs", "Soil testing and improvement", "Deer, turkey, and waterfowl blends"],
  },
  {
    slug: "gtr-builds",
    title: "GTR Builds",
    abbr: "GTR",
    summary:
      "We design and build GTR systems for duck hunting in flooded timber. Using GPS and mapping software, we lay out levees and water-control structures that hold water through the season and drain efficiently when it's over — protecting your timber in the process.",
    bullets: ["Levee construction", "Water control structures", "GPS-based layout and design"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Property Walkthrough",
    body: "We start by walking your land together. Before we recommend anything, we want to understand what you have, what's working, and what your goals are.",
  },
  {
    number: "02",
    title: "Management Plan",
    body: "We build a written plan specific to your property — your conditions, your target species, your timeline. Not a template. A plan that actually fits your land.",
  },
  {
    number: "03",
    title: "Hands-On Work",
    body: "We do the work ourselves. TSI, prescribed burns, food plots, GTR builds, clearing — executed with the same standard we'd hold ourselves to on our own property.",
  },
  {
    number: "04",
    title: "Ongoing Management",
    body: "Good habitat takes time. We stay in the picture after the initial project — monitoring progress, adjusting the plan, and helping you keep building year over year.",
  },
];

const galleryItems = [
  { src: "/images/gallery/tsi/IMG_0371.JPG", alt: "Timber stand improvement", label: "TSI", tall: true },
  { src: "/images/gallery/burns/IMG_0556.JPG", alt: "Prescribed burn", label: "Prescribed Burn", tall: false },
  { src: "/images/gallery/trapping/IMG_4263.jpeg", alt: "Trapping", label: "Trapping", tall: false },
  { src: "/images/gallery/drilling/IMG_0830.JPG", alt: "Drilling", label: "Drilling", tall: false },
  { src: "/images/gallery/food-plots/IMG_4904.jpg", alt: "Food plot", label: "Food Plots", tall: false },
  { src: "/images/gallery/burns/IMG_7861.jpeg", alt: "Prescribed burn fire line", label: "Prescribed Burn", tall: true },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-forest-950 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <a href="/" className="flex items-center gap-3 leading-none">
            <Image
              src="/images/logo-crest-light.png"
              alt=""
              width={372}
              height={152}
              priority
              className="h-10 w-auto"
            />
            <span className="flex flex-col">
              <span className="font-heading text-xl tracking-[0.15em] text-white uppercase">Flippo</span>
              <span className="text-[9px] font-bold tracking-[0.3em] text-amber-500/70 uppercase mt-0.5">
                Land &amp; Wildlife Solutions
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-white/55 transition-colors hover:text-white"
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

          {/* Mobile: just the number */}
          <a href="tel:8706790131" className="sm:hidden text-[13px] font-bold text-amber-400">
            870-679-0131
          </a>
        </div>

        {/* Mobile nav */}
        <div className="flex gap-6 overflow-x-auto border-t border-white/8 px-6 py-2 md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="whitespace-nowrap text-[13px] text-white/45 hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <main>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          id="hero"
          aria-label="Arkansas land and wildlife management"
          className="relative bg-forest-950 text-white overflow-hidden grain-overlay"
        >
          {/* Arkansas silhouette background — real state outline from GeoJSON */}
          <svg
            viewBox="0 0 450 350"
            className="absolute -right-8 top-1/2 -translate-y-1/2 h-[85%] w-auto opacity-[0.12] pointer-events-none"
            aria-hidden="true"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          >
            <path d="M32.0,20.0 L394.6,20.5 L402.0,37.5 L389.1,48.1 L375.8,64.6 L430.0,64.6 L427.2,81.1 L414.8,86.0 L412.1,99.6 L396.4,114.1 L397.8,135.5 L389.6,151.0 L381.3,153.4 L386.3,161.2 L373.0,168.0 L367.0,183.0 L358.3,186.9 L359.7,204.4 L344.5,209.2 L345.0,215.0 L327.5,229.6 L332.6,239.3 L317.4,253.3 L304.1,280.5 L318.8,292.2 L311.4,299.4 L316.0,317.9 L309.6,330.0 L104.6,328.5 L68.3,328.5 L68.3,281.5 L56.3,277.6 L39.8,282.0 L31.0,273.7 L35.6,118.0 L20.0,20.0 Z" />
          </svg>

          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            {/* Top rule with label */}
            <div className="flex items-center gap-4 border-b border-white/10 py-5">
              <span className="text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase">
                Arkansas Land &amp; Wildlife Management
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Main hero content */}
            <div className="py-16 sm:py-20 lg:py-28">
              <div className="max-w-3xl">
                <h1 className="font-heading text-5xl leading-[1.08] sm:text-6xl lg:text-7xl xl:text-[5rem]">
                  Habitat management
                  <br />
                  <span className="text-amber-400">built around your property.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-[1.8] text-white/55 sm:text-[1.0625rem]">
                  Flippo Land and Wildlife Solutions works with Arkansas landowners
                  to improve habitat, manage timber, establish food plots, and build
                  properties that perform — for deer, turkey, ducks, and more.
                  From the initial plan to the finished project, we handle it under one roof.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="bg-amber-500 px-7 py-3.5 text-sm font-bold tracking-wide text-forest-950 transition hover:bg-amber-400"
                  >
                    Talk to Us
                  </a>
                  <a
                    href="#services"
                    className="border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
                  >
                    View Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Video Showcase ──────────────────────────────────────────────── */}
        <section
          id="in-action"
          aria-label="Our work in the field"
          className="relative bg-earth-900 py-20 text-white lg:py-28 topo-texture"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-16 lg:items-start">
              {/* Section label — left rail on desktop */}
              <div className="lg:sticky lg:top-28 lg:w-48">
                <p className="text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase mb-4">In Action</p>
                <h2 className="font-heading text-3xl leading-[1.12] sm:text-4xl">
                  Our work
                  <br />
                  in the field.
                </h2>
                <p className="mt-4 text-[0.8125rem] leading-relaxed text-white/40">
                  Real footage from real properties. This is what habitat management looks like on the ground.
                </p>
              </div>

              {/* Video area — sequentially plays multiple clips */}
              <VideoLoop />
            </div>
          </div>
        </section>

        {/* ── About ─────────────────────────────────────────────────────────── */}
        <section
          id="about"
          aria-label="About Flippo Land and Wildlife Solutions"
          className="relative bg-earth-50 py-20 lg:py-28 topo-texture"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">

              {/* Image — offset slightly for asymmetry */}
              <div className="lg:-mt-4 lg:mr-4">
                <ImgBlock label="Field Photo" className="aspect-[4/3] w-full" />
              </div>

              {/* Text */}
              <div className="lg:pt-4">
                <p className="text-[10px] font-bold tracking-[0.3em] text-amber-600 uppercase mb-5">About</p>
                <h2 className="font-heading text-4xl leading-[1.12] text-forest-900 sm:text-5xl">
                  We care about what
                  <br />
                  happens to your land.
                </h2>

                <div className="mt-7 space-y-5 text-[0.9375rem] leading-[1.85] text-earth-800/70">
                  <p>
                    Flippo Land and Wildlife Solutions helps Arkansas landowners
                    improve wildlife habitat, manage their property with purpose,
                    and create long-term results they can be proud of. We
                    specialize in habitat improvements for deer, turkey, and
                    waterfowl.
                  </p>
                  <p>
                    Our goal is simple: provide landowners with a clear plan,
                    quality work, and ongoing guidance so they can get the most
                    out of their property without having to juggle multiple
                    contractors.
                  </p>
                </div>

                <div className="mt-10 border-t border-earth-200 pt-8">
                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                    {[
                      { value: "7", label: "Services offered" },
                      { value: "AR", label: "Statewide" },
                      { value: "100%", label: "Hands-on work" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="font-heading text-3xl text-forest-800">{stat.value}</div>
                        <div className="mt-1 text-[11px] font-bold tracking-[0.15em] text-earth-800/40 uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-8 inline-block bg-forest-800 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-700"
                  >
                    Start a Conversation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────────────────── */}
        <section
          id="services"
          aria-label="Arkansas land and wildlife management services"
          className="relative bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            {/* Section header — left-heavy with rough rule */}
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-amber-600 uppercase mb-4">Services</p>
                <h2 className="font-heading text-4xl leading-[1.12] text-forest-900 sm:text-5xl">
                  What we do
                </h2>
              </div>
              <p className="max-w-xs text-[0.875rem] leading-relaxed text-earth-800/55 sm:text-right">
                Full-service habitat management for Arkansas landowners.
              </p>
            </div>

            {/* Services list — editorial rows, not a card grid */}
            <div className="divide-y divide-earth-100 border-t border-earth-100">
              {services.map((service) => (
                <div key={service.slug} className="group grid gap-6 py-8 sm:grid-cols-[1fr_1.4fr] sm:gap-10 lg:gap-16">
                  {/* Title + abbr */}
                  <div>
                    <h3 className="text-base font-bold text-forest-900 leading-snug">
                      {service.title}
                      {service.abbr && (
                        <span className="ml-2 text-[10px] font-bold tracking-[0.2em] text-amber-600 uppercase align-middle">
                          {service.abbr}
                        </span>
                      )}
                    </h3>
                    {service.bullets.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {service.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-[0.8125rem] text-earth-800/55">
                            <span className="mt-0.5 text-amber-500"><IconCheck /></span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="text-[0.875rem] leading-[1.8] text-earth-800/60">
                    {service.summary}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4 border-t border-earth-100 pt-10">
              <a
                href="#contact"
                className="bg-forest-800 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-700"
              >
                Discuss Your Property
              </a>
              <a
                href="tel:8706790131"
                className="flex items-center gap-2 border border-earth-200 px-7 py-3.5 text-sm font-semibold text-earth-800 transition hover:border-earth-300 hover:bg-earth-50"
              >
                <IconPhone /> 870-679-0131
              </a>
            </div>
          </div>
        </section>

        {/* ── Why ───────────────────────────────────────────────────────────── */}
        <section
          id="why"
          aria-label="Why choose Flippo Land and Wildlife Solutions"
          className="relative bg-forest-900 py-20 text-white lg:py-28 angle-top grain-overlay"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-14 max-w-xl">
              <p className="text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase mb-5">Why Flippo</p>
              <h2 className="font-heading text-4xl leading-[1.12] sm:text-5xl">
                What sets us apart
              </h2>
            </div>

            {/* Horizontal rule layout — no icon cards */}
            <div className="grid gap-px bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "One roof, start to finish",
                  body: "Planning, implementation, and ongoing management — handled together. No coordinating between contractors. No gaps in the work.",
                },
                {
                  title: "Built for the long term",
                  body: "We manage for results that hold up years down the road. Every recommendation is made with the long-term health of the property in mind.",
                },
                {
                  title: "Grounded in real expertise",
                  body: "We've worked alongside some of the top wildlife biologists in the country and consulted on properties across multiple regions. That experience comes to your land.",
                },
                {
                  title: "Insured for every service",
                  body: "Fully insured for all work we provide — including prescribed burns. You get professional execution with the accountability your property deserves.",
                },
              ].map((point) => (
                <div key={point.title} className="bg-forest-900 p-8">
                  <h3 className="text-[0.9375rem] font-bold text-white leading-snug mb-3">
                    {point.title}
                  </h3>
                  <p className="text-[0.8125rem] leading-[1.75] text-white/45">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="#contact"
                className="bg-amber-500 px-7 py-3.5 text-sm font-bold text-forest-950 transition hover:bg-amber-400"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────────────────────── */}
        <section
          id="process"
          aria-label="Land management process"
          className="relative bg-earth-50 py-20 lg:py-28 topo-texture"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-14 max-w-xl">
              <p className="text-[10px] font-bold tracking-[0.3em] text-amber-600 uppercase mb-5">How It Works</p>
              <h2 className="font-heading text-4xl leading-[1.12] text-forest-900 sm:text-5xl">
                A clear process,
                <br />
                from start to finish.
              </h2>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-earth-800/60">
                We believe you should know exactly what to expect at every stage.
              </p>
            </div>

            {/* Vertical numbered steps — no circles, no connectors */}
            <div className="grid gap-0 divide-y divide-earth-200 border-y border-earth-200 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.number} className="p-8 sm:px-10">
                  <div className="font-heading text-5xl font-bold text-earth-200 leading-none mb-5">
                    {step.number}
                  </div>
                  <h3 className="text-[0.9375rem] font-bold text-forest-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[0.8125rem] leading-[1.75] text-earth-800/55">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery ───────────────────────────────────────────────────────── */}
        <section
          id="gallery"
          aria-label="Land management and wildlife habitat projects in Arkansas"
          className="relative bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            {/* Rough rule separator */}
            <hr className="rough-rule mb-14" />
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-amber-600 uppercase mb-4">Previous Work</p>
                <h2 className="font-heading text-4xl leading-[1.12] text-forest-900 sm:text-5xl">
                  Results on the ground
                </h2>
              </div>
              <a href="/gallery" className="text-[0.875rem] font-semibold text-amber-600 hover:text-amber-500 transition-colors">
                View Full Gallery →
              </a>
            </div>

            {/* Asymmetric grid */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4 auto-rows-[11rem]">
              {galleryItems.map((item, i) => (
                <a
                  key={i}
                  href="/gallery"
                  className={`group relative overflow-hidden ${item.tall ? "row-span-2" : ""}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                  />
                  <div className="absolute inset-0 bg-forest-950/20 group-hover:bg-forest-950/5 transition-colors" />
                  <span className="absolute bottom-2 left-3 text-[10px] font-bold tracking-[0.2em] text-white uppercase drop-shadow">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="/gallery"
                className="inline-block border border-earth-200 px-8 py-3 text-sm font-semibold text-earth-800 transition hover:border-amber-500 hover:text-amber-600"
              >
                View Full Gallery
              </a>
            </div>
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────────────────────── */}
        <section
          id="contact"
          aria-label="Contact Flippo Land and Wildlife Solutions"
          className="relative bg-forest-950 py-20 text-white lg:py-28 grain-overlay"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20">

              {/* Left */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase mb-5">Contact</p>
                <h2 className="font-heading text-4xl leading-[1.12] sm:text-5xl">
                  Let's talk about
                  <br />
                  your property.
                </h2>
                <p className="mt-6 text-[0.9375rem] leading-[1.8] text-white/50">
                  Every project starts with a conversation. Tell us about your
                  land and what you're trying to build, and we'll put together
                  a plan that fits.
                </p>

                <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.25em] text-white/35 uppercase mb-1">Phone</div>
                    <a href="tel:8706790131" className="text-base font-semibold text-amber-400 transition hover:text-amber-300">
                      870-679-0131
                    </a>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.25em] text-white/35 uppercase mb-1">Email</div>
                    <a href="mailto:drew@flippolandandwildlife.com" className="text-base font-semibold text-amber-400 transition hover:text-amber-300 break-all">
                      drew@flippolandandwildlife.com
                    </a>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.25em] text-white/35 uppercase mb-1">Service Area</div>
                    <p className="text-base font-semibold text-white/70">Arkansas — statewide</p>
                  </div>
                </div>

                <p className="mt-10 border-t border-white/10 pt-8 text-[0.8125rem] text-white/35">
                  Currently accepting new clients. We typically respond within
                  one business day.
                </p>
              </div>

              {/* Form */}
              <div>
                <h3 className="font-heading text-2xl text-white mb-7">Send us a message</h3>
                <form
                  action="https://formsubmit.co/drew@flippolandandwildlife.com"
                  method="POST"
                  className="space-y-5"
                  aria-label="Contact form"
                >
                  <input type="hidden" name="_subject" value="New quote request from Flippo website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase mb-2">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        className="w-full border border-white/12 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/18 focus:border-amber-500/40 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase mb-2">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Smith"
                        className="w-full border border-white/12 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/18 focus:border-amber-500/40 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="870-000-0000"
                      className="w-full border border-white/12 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/18 focus:border-amber-500/40 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border border-white/12 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/18 focus:border-amber-500/40 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="w-full appearance-none border border-white/12 bg-white/6 px-4 py-3 text-sm text-white/70 focus:border-amber-500/40 focus:outline-none"
                    >
                      <option value="" disabled className="bg-forest-950">Select a service…</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug} className="bg-forest-950">{s.title}</option>
                      ))}
                      <option value="other" className="bg-forest-950">Multiple / Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase mb-2">
                      About Your Property
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Acreage, county, goals — deer, turkey, ducks, timber, food plots…"
                      className="w-full resize-none border border-white/12 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/18 focus:border-amber-500/40 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 py-4 text-sm font-bold tracking-[0.1em] text-forest-950 transition hover:bg-amber-400"
                  >
                    Send Message
                  </button>

                  <p className="text-[11px] text-white/20 text-center">
                    Your information is never shared.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-forest-950 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <Image
                src="/images/logo-crest-light.png"
                alt="Flippo Land & Wildlife Solutions"
                width={372}
                height={152}
                className="mb-4 h-14 w-auto"
              />
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
                {services.map((s) => (
                  <li key={s.slug}>
                    <a href="#services" className="text-[0.8125rem] text-white/40 transition hover:text-amber-400">
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
