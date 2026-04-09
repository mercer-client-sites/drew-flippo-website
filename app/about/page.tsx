// ─────────────────────────────────────────────────────────────────────────────
// Flippo Land & Wildlife Solutions — Meet Drew
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Meet Drew Flippo | Flippo Land & Wildlife Solutions",
  description:
    "Drew Flippo — wildlife biologist and founder of Flippo Land & Wildlife Solutions. Biology from Williams Baptist University, extensive field experience consulting with landowners across Arkansas and beyond.",
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
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Our Work", href: "/#gallery" },
  { label: "Meet Drew", href: "/about" },
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

const credentials = [
  {
    label: "Education",
    value: "B.S. Biology",
    detail: "Williams Baptist University — Wildlife ecology, habitat management, and land stewardship.",
  },
  {
    label: "Field Experience",
    value: "National Scope",
    detail: "Worked alongside some of the top wildlife biologists in the country, consulting across diverse regions and property types.",
  },
  {
    label: "Founded",
    value: "Flippo L&WS",
    detail: "Built on firsthand field knowledge and a clear commitment to results — not templates.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
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

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium transition-colors ${
                  link.href === "/about"
                    ? "text-amber-400"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-5">
            <a
              href="mailto:drew@flippolandandwildlife.com"
              className="flex items-center gap-2 bg-amber-500 px-4 py-2 text-[13px] font-bold text-forest-950 transition hover:bg-amber-400"
            >
              <IconMail /> drew@flippolandandwildlife.com
            </a>
            <a
              href="tel:8706790131"
              className="flex items-center gap-2 bg-amber-500 px-4 py-2 text-[13px] font-bold text-forest-950 transition hover:bg-amber-400"
            >
              <IconPhone /> 870-679-0131
            </a>
          </div>

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
                link.href === "/about" ? "text-amber-400" : "text-white/45 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <main>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          aria-label="Meet Drew Flippo"
          className="bg-forest-950 text-white"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            {/* Top rule */}
            <div className="flex items-center gap-4 border-b border-white/10 py-5">
              <span className="text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase">
                Meet the Founder
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Hero grid */}
            <div className="grid items-end gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:gap-20 lg:py-28">
              <div className="max-w-2xl">
                <h1 className="font-heading text-6xl leading-[1.04] sm:text-7xl lg:text-[5.5rem]">
                  Drew
                  <br />
                  <span className="text-amber-400">Flippo.</span>
                </h1>
                <p className="mt-6 text-[1.0625rem] leading-[1.75] text-white/55 max-w-xl">
                  Wildlife-focused land manager. Founder of Flippo Land &amp; Wildlife Solutions.
                  Built through hands-on field experience — working directly with landowners
                  to solve real property challenges.
                </p>
                <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-8">
                  {[
                    { value: "B.S.", label: "Biology" },
                    { value: "WBU", label: "Williams Baptist" },
                    { value: "AR", label: "Arkansas-based" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="font-heading text-2xl font-bold text-amber-400">{s.value}</div>
                      <div className="mt-0.5 text-[10px] font-semibold tracking-[0.18em] text-white/35 uppercase">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portrait placeholder */}
              <div className="w-full lg:w-[340px] xl:w-[400px]">
                <ImgBlock label="Drew Flippo" className="aspect-[3/4] w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Bio ───────────────────────────────────────────────────────────── */}
        <section
          aria-label="Drew Flippo's story"
          className="bg-earth-50 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-[1fr_2.2fr] lg:gap-24">

              {/* Sidebar label */}
              <div className="lg:pt-2">
                <p className="text-[10px] font-bold tracking-[0.3em] text-amber-600 uppercase mb-5">His Story</p>
                <h2 className="font-heading text-3xl leading-[1.15] text-forest-900 sm:text-4xl">
                  A career built
                  <br />
                  in the field.
                </h2>
                <div className="mt-8 border-t border-earth-200 pt-8 space-y-3">
                  <div className="text-[11px] font-bold tracking-[0.2em] text-earth-800/35 uppercase">Quick facts</div>
                  <ul className="space-y-2 text-[0.8125rem] text-earth-800/60 leading-relaxed">
                    <li>Biology · Williams Baptist University</li>
                    <li>Wildlife ecology &amp; habitat management</li>
                    <li>National field consulting experience</li>
                    <li>Founded Flippo Land &amp; Wildlife Solutions</li>
                    <li>Fully insured · Arkansas-based</li>
                  </ul>
                </div>
              </div>

              {/* Bio text */}
              <div className="space-y-7 text-[0.9375rem] leading-[1.9] text-earth-800/70">
                <p>
                  My passion for the outdoors and improving land has always been the driving force
                  behind my career. I earned my degree in Biology from Williams Baptist University,
                  where I built a strong foundation in wildlife ecology, habitat management, and
                  long-term land stewardship.
                </p>
                <p>
                  Following graduation, I had the opportunity to work alongside some of the top
                  wildlife biologists in the country. During that time, I gained extensive hands-on
                  experience in the field while consulting with landowners across diverse regions.
                  That exposure gave me a deep understanding of how different properties function,
                  the challenges they present, and what it takes to produce measurable, lasting
                  improvements.
                </p>
                <p>
                  Those experiences ultimately led to the creation of Flippo Land &amp; Wildlife
                  Solutions. Today, I work directly with landowners to develop and implement
                  strategic, results-driven plans tailored to each property. Every project is
                  approached with a clear objective: enhance the land's productivity, improve
                  wildlife habitat, and increase long-term value.
                </p>

                {/* Pull quote */}
                <blockquote className="my-10 border-l-2 border-amber-500 pl-7 py-1">
                  <p className="font-heading text-xl leading-[1.5] text-forest-900 italic sm:text-2xl">
                    "No two properties are the same, and I take pride in delivering solutions
                    that are both practical in the field and effective over time."
                  </p>
                </blockquote>

                <p>
                  I remain personally involved from initial consultation through project
                  completion, ensuring every detail is executed to a high standard. At its core,
                  my work is about helping landowners unlock the full potential of their property —
                  creating land that not only performs better today, but continues to improve for
                  years to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Credentials ───────────────────────────────────────────────────── */}
        <section
          aria-label="Drew Flippo's background and credentials"
          className="bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-12">
              <p className="text-[10px] font-bold tracking-[0.3em] text-amber-600 uppercase mb-4">Background</p>
              <h2 className="font-heading text-4xl leading-[1.12] text-forest-900 sm:text-5xl">
                The foundation behind the work.
              </h2>
            </div>

            <div className="grid gap-px bg-earth-100 sm:grid-cols-3">
              {credentials.map((c) => (
                <div key={c.label} className="bg-white p-8 lg:p-10">
                  <div className="text-[10px] font-bold tracking-[0.25em] text-amber-600 uppercase mb-3">{c.label}</div>
                  <div className="font-heading text-2xl text-forest-900 mb-4">{c.value}</div>
                  <p className="text-[0.8125rem] leading-[1.75] text-earth-800/55">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Approach ──────────────────────────────────────────────────────── */}
        <section
          aria-label="Drew's approach to land management"
          className="bg-forest-900 py-20 text-white lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24 lg:items-center">
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase mb-5">Approach</p>
                <h2 className="font-heading text-4xl leading-[1.12] sm:text-5xl">
                  Personally involved,
                  <br />
                  start to finish.
                </h2>
                <p className="mt-7 text-[0.9375rem] leading-[1.85] text-white/55 max-w-lg">
                  Every project I take on gets the same level of attention — whether it's a
                  small food plot or a multi-phase habitat overhaul. I stay in the picture
                  from the first conversation to the final inspection, because that's the
                  only way to ensure the work actually holds up.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="bg-amber-500 px-7 py-3.5 text-sm font-bold text-forest-950 transition hover:bg-amber-400"
                  >
                    Talk to Drew
                  </a>
                  <a
                    href="/#services"
                    className="border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
                  >
                    View Services
                  </a>
                </div>
              </div>

              <div className="space-y-0 divide-y divide-white/10 border-y border-white/10">
                {[
                  {
                    title: "Initial Consultation",
                    body: "We walk your land together. I want to understand what you have before I recommend anything.",
                  },
                  {
                    title: "Custom Plan",
                    body: "A written management plan built around your specific property, goals, and target species.",
                  },
                  {
                    title: "Hands-On Execution",
                    body: "I do the work myself — same standard I'd hold on my own land.",
                  },
                  {
                    title: "Continued Involvement",
                    body: "Monitoring, adjusting, and building on the plan year over year.",
                  },
                ].map((step) => (
                  <div key={step.title} className="py-5">
                    <div className="text-[0.875rem] font-bold text-white mb-1.5">{step.title}</div>
                    <div className="text-[0.8125rem] leading-[1.75] text-white/40">{step.body}</div>
                  </div>
                ))}
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
