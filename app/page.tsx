// ─────────────────────────────────────────────────────────────────────────────
// Flippo Land & Wildlife Solutions — Homepage
// app/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

// ── Icons ────────────────────────────────────────────────────────────────────

function IconTree() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L7.5 10H10L6 17h5v4h2v-4h5l-4-7h2.5L12 3z" />
    </svg>
  );
}

function IconFire() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c-4.4 0-8-3.1-8-7 0-3 1.5-5 3.5-6.5 0 2 1 3.5 2.5 4C9 10 11 7.5 11 5c0-1.5.5-3 1.5-4 0 3 2 5.5 4 7 .5.5.5 1 .5 1.5 0 1-.5 2-1.5 2.5.5-1 .5-2-.5-3C14.5 10 13 12 13 14c0 1 .5 2 1.5 2.5C12.5 17.5 12 19.5 12 22z" />
    </svg>
  );
}

function IconFirebreak() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6l4 6-4 6M21 6l-4 6 4 6" />
    </svg>
  );
}

function IconTractor() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <circle cx="7" cy="17" r="3" />
      <circle cx="17.5" cy="18" r="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 17V10l4-6h6l2 4v7M10 4v6h7" />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path strokeLinecap="round" d="M9 4a2 2 0 014 0M9 11h6M9 15h4" />
    </svg>
  );
}

function IconSeedling() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12M12 12C12 7 7 4 3 5c0 5 3 7 9 7zM12 12c0-5 5-8 9-7-1 5-4 7-9 7z" />
    </svg>
  );
}

function IconWater() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C12 2 5 9 5 14a7 7 0 0014 0c0-5-7-12-7-12z" />
      <path strokeLinecap="round" d="M8.5 17.5c.5 1.5 2 2.5 3.5 2.5" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L4 7v5c0 5 4 9.5 8 11 4-1.5 8-6 8-11V7l-8-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconMap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3L3 6v15l6-3 6 3 6-3V3l-6 3-6-3z" />
      <path strokeLinecap="round" d="M9 3v15M15 6v15" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <circle cx="9" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <path strokeLinecap="round" d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.87" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 6.5 7 1-5 4.9 1.2 7.1L12 18l-6.2 3.5L7 14.4 2 9.5l7-1L12 2z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.45 4.36a1 1 0 01-.23 1.02L8.5 11a16.06 16.06 0 007.5 7.5l1.94-1.95a1 1 0 011.02-.23l4.36 1.45a1 1 0 01.68.95V19a2 2 0 01-2 2A18 18 0 013 5z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M3 8a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 5 13.5 5 8.5a7 7 0 1114 0C19 13.5 12 21 12 21z" />
      <circle cx="12" cy="8.5" r="2.5" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0 mt-0.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// ── Reusable UI Pieces ────────────────────────────────────────────────────────

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-bold tracking-[0.28em] uppercase mb-4 ${light ? "text-amber-400" : "text-amber-600"}`}>
      {children}
    </p>
  );
}

function ImgBlock({
  label,
  className = "",
  dark = false,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 select-none ${
        dark
          ? "bg-forest-800/40 border border-white/8 text-white/25"
          : "bg-earth-200 text-earth-800/30"
      } ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.75} className="w-10 h-10 opacity-50">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
      </svg>
      <span className="text-[10px] font-semibold uppercase tracking-widest opacity-60">{label}</span>
    </div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: <IconTree />,
    title: "Timber Stand Improvement (TSI)",
    slug: "tsi",
    summary:
      "Remove low-value trees and promote the strongest timber on your property. Improves deer, turkey, and duck habitat while building long-term property value.",
    bullets: ["Hack and squirt", "Tree girdling", "Cut and drop"],
  },
  {
    icon: <IconFire />,
    title: "Prescribed Burning",
    slug: "prescribed-burning",

    summary:
      "One of the most powerful tools for improving native habitat and wildlife diversity. We conduct safe, efficient burns and are fully insured for your peace of mind.",
    bullets: [
      "Improves deer, turkey, and quail habitat",
      "Promotes native plant diversity",
      "Safe, insured burn operations",
    ],
  },
  {
    icon: <IconFirebreak />,
    title: "Firebreak Installation",
    slug: "firebreaks",
    summary:
      "Dependable firebreaks are the foundation of any safe burn program. We build them right so your property is protected and burns run smoothly.",
    bullets: [
      "Mechanical and hand-cut firebreaks",
      "Compatible with all terrain types",
      "Designed to support your burn plan",
    ],
  },
  {
    icon: <IconTractor />,
    title: "Land Clearing",
    slug: "land-clearing",
    summary:
      "Improve access, usability, and wildlife movement across your property. We design and complete the work with your long-term habitat goals in mind.",
    bullets: ["Access trails", "Food plot clearing and preparation"],
  },
  {
    icon: <IconClipboard />,
    title: "Consulting",
    slug: "consulting",
    summary:
      "Get a professional plan and expert guidance without handing over every task. We also help identify government cost-share programs your property may qualify for.",
    bullets: [
      "Land management planning",
      "Wildlife habitat plans",
      "Mapping and property layout",
      "Government programs and funding guidance",
    ],
  },
  {
    icon: <IconSeedling />,
    title: "Food Plots",
    slug: "food-plots",
    summary:
      "Fall and summer food plots designed around soil health and long-term productivity. Healthy soil builds sustainable plots that hold deer, turkey, and waterfowl year after year.",
    bullets: [
      "Fall and summer food plots",
      "Soil-focused planning and improvement",
      "Seed blend selection",
    ],
  },
  {
    icon: <IconWater />,
    title: "GTR Builds",
    slug: "gtr-builds",
    summary:
      "Design and build GTR systems for duck hunting in flooded timber. GPS-based levee and water-control layouts that hold water in season and drain it off-season to protect your timber.",
    bullets: [
      "Water control structures",
      "Levee builds",
      "GPS-based layout and design",
    ],
  },
];

const whyPoints = [
  {
    icon: <IconUsers />,
    title: "One-Stop Shop",
    body: "Plan, build, manage — all under one roof. No juggling multiple contractors.",
  },
  {
    icon: <IconStar />,
    title: "Built to Last",
    body: "We focus on strategies that keep working years after the initial project is done. No quick fixes.",
  },
  {
    icon: <IconMap />,
    title: "Expert Knowledge",
    body: "We've worked alongside top wildlife biologists and consulted on properties across multiple regions.",
  },
  {
    icon: <IconShield />,
    title: "Licensed & Insured",
    body: "Fully insured for every service, including prescribed burns. Professional work with full accountability.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Property Walkthrough",
    body: "We start by walking your property together. We assess what you have, listen to your goals, and get a clear picture of the land before making any recommendations.",
  },
  {
    number: "02",
    title: "Custom Management Plan",
    body: "We build a written land and wildlife management plan tailored to your property conditions, wildlife goals, and long-term vision — whether that's deer, turkey, ducks, or overall habitat health.",
  },
  {
    number: "03",
    title: "Hands-On Implementation",
    body: "We complete the work ourselves. TSI, prescribed burns, food plots, land clearing, GTR builds — all executed with the same care and quality we'd want on our own land.",
  },
  {
    number: "04",
    title: "Ongoing Management",
    body: "Great properties are built over time. We stay engaged after the initial project, helping you monitor progress, adapt the plan, and continue improving year after year.",
  },
];

const galleryItems = [
  { label: "Timber Stand Improvement" },
  { label: "Prescribed Burn" },
  { label: "Food Plot Installation" },
  { label: "GTR / Flooded Timber" },
  { label: "Land Clearing" },
  { label: "Wildlife Survey" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-white/8 bg-forest-950/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <a href="/" className="flex flex-col leading-tight">
            <span className="font-heading text-2xl tracking-[0.18em] text-white uppercase">
              Flippo
            </span>
            <span className="text-[10px] font-bold tracking-[0.32em] text-amber-400/80 uppercase">
              Land &amp; Wildlife Solutions
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/60 transition hover:text-amber-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:8706790131"
            className="rounded-full border border-amber-300/30 bg-white/5 px-5 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-300/60 hover:bg-white/10"
          >
            <span className="hidden sm:inline">Call </span>870-679-0131
          </a>
        </div>

        {/* Mobile nav */}
        <div className="flex gap-6 overflow-x-auto border-t border-white/6 px-6 py-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-white/50 transition hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <main>
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section
          id="hero"
          aria-label="Flippo Land and Wildlife Solutions — Arkansas land management"
          className="relative isolate overflow-hidden bg-forest-950 text-white"
        >
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_60%_0%,_rgba(202,184,130,0.18),_transparent_55%),linear-gradient(175deg,rgba(14,31,20,0.6),rgba(14,31,20,1)_70%)]" />
          <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px,transparent_5px)]" />

          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24 min-h-[88vh]">
            {/* Left */}
            <div>
              <p className="mb-5 text-[11px] font-bold tracking-[0.32em] text-amber-400 uppercase">
                Arkansas Land &amp; Wildlife Management
              </p>
              <h1 className="font-heading text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-[4.25rem]">
                Your land.
                <br />
                <span className="text-amber-300">Managed right.</span>
              </h1>
              <p className="mt-6 max-w-lg text-[1.0625rem] leading-[1.75] text-white/65">
                Flippo Land and Wildlife Solutions works with Arkansas
                landowners to build better habitat, improve their timber, and
                manage properties for deer, turkey, ducks, and more.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-sm font-extrabold tracking-[0.12em] text-forest-950 uppercase shadow-lg shadow-amber-400/20 transition hover:bg-amber-300 hover:shadow-amber-300/30"
                >
                  Get a Free Consultation
                </a>
                <a
                  href="tel:8706790131"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/8"
                >
                  <IconPhone /> Call Now
                </a>
              </div>

              {/* Habitat target badges */}
              <div className="mt-10 flex flex-wrap gap-2">
                {["Deer Habitat", "Turkey Habitat", "Duck Habitat", "Timber Management", "Food Plots", "GTR Builds"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact strip */}
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2.5 border-t border-white/10 pt-8 text-[13px] text-white/40">
                <a href="tel:8706790131" className="flex items-center gap-2 transition hover:text-amber-300">
                  <IconPhone /> 870-679-0131
                </a>
                <a href="mailto:drew@flippolandandwildlife.com" className="flex items-center gap-2 transition hover:text-amber-300">
                  <IconMail /> drew@flippolandandwildlife.com
                </a>
                <span className="flex items-center gap-2">
                  <IconPin /> Serving Arkansas
                </span>
              </div>
            </div>

            {/* Right — service quick-list card */}
            <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_32px_80px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:p-8">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
              <p className="text-[10px] font-bold tracking-[0.32em] text-amber-400 uppercase">
                What We Do
              </p>
              <ul className="mt-4 space-y-2">
                {services.map((s) => (
                  <li
                    key={s.slug}
                    className="flex items-center gap-3 rounded-xl border border-white/6 bg-black/15 px-4 py-3 text-[13px] font-semibold text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    <span className="text-amber-400/70 flex-shrink-0">{s.icon}</span>
                    {s.title}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400/10 border border-amber-400/20 py-3 text-[13px] font-bold text-amber-300 transition hover:bg-amber-400/15"
              >
                Request a Consultation <IconArrowRight />
              </a>
            </aside>
          </div>

          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-earth-50 to-transparent" />
        </section>

        {/* ── About ──────────────────────────────────────────────────────── */}
        <section id="about" aria-label="About Flippo Land and Wildlife Solutions" className="bg-earth-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Image */}
              <div className="relative order-last lg:order-first">
                <ImgBlock
                  label="Team / Field Photo"
                  className="min-h-[26rem] w-full rounded-2xl"
                />
                {/* Accent border */}
                <div className="pointer-events-none absolute -bottom-4 -left-4 h-full w-full rounded-2xl border-2 border-amber-400/20 -z-10" />

                {/* Floating stat badge */}
                <div className="absolute -right-4 -top-4 rounded-2xl border border-earth-200 bg-white px-6 py-4 shadow-lg">
                  <div className="font-heading text-3xl text-forest-800">AR</div>
                  <div className="mt-0.5 text-xs font-bold tracking-widest text-earth-800/50 uppercase">Statewide</div>
                </div>
              </div>

              {/* Text */}
              <div>
                <SectionLabel>About Us</SectionLabel>
                <h2 className="font-heading text-4xl leading-[1.15] text-forest-900 sm:text-5xl">
                  Passionate about land.
                  <br />
                  Committed to results.
                </h2>

                <div className="mt-6 space-y-4 text-[0.9375rem] leading-[1.8] text-earth-800/70">
                  <p>
                    We are passionate about improving land for wildlife and
                    helping landowners get the most out of their property.
                    Every property is different, which is why we build a plan
                    that fits your specific goals, conditions, and long-term
                    vision — not a one-size-fits-all template.
                  </p>
                  <p>
                    From the first walkthrough to ongoing management, we handle
                    everything under one roof. We stay current on the latest
                    research and wildlife management practices so every
                    recommendation is backed by real expertise — and we keep
                    you informed at every step.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6 border-t border-earth-200 pt-8">
                  {[
                    { value: "7", label: "Services" },
                    { value: "AR", label: "Statewide" },
                    { value: "100%", label: "Hands-On" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-heading text-4xl font-bold text-forest-800">{stat.value}</div>
                      <div className="mt-1.5 text-[11px] font-bold tracking-[0.2em] text-earth-800/45 uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-forest-700"
                >
                  Start a Conversation <IconArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ───────────────────────────────────────────────────── */}
        <section
          id="services"
          aria-label="Land and wildlife management services in Arkansas"
          className="bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="font-heading text-4xl leading-[1.15] text-forest-900 sm:text-5xl">
                Arkansas land &amp; wildlife services
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-earth-800/60">
                Full-service land management for deer, turkey, duck habitat,
                timber improvement, food plots, GTR builds, and more.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.slug}
                  className="group flex flex-col rounded-2xl border border-earth-100 bg-earth-50 p-6 transition-all duration-200 hover:border-forest-200/60 hover:bg-white hover:shadow-xl"
                >
                  {/* Icon + title row */}
                  <div className="mb-4 flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 text-forest-700 transition-colors group-hover:text-amber-500">
                      {service.icon}
                    </div>
                    <h3 className="text-[0.9375rem] font-bold leading-snug text-forest-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-[0.8125rem] leading-[1.7] text-earth-800/60 flex-1">
                    {service.summary}
                  </p>

                  {service.bullets.length > 0 && (
                    <ul className="mt-4 space-y-1.5 border-t border-earth-100 pt-4">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-[0.8125rem] text-forest-700/80">
                          <span className="mt-0.5 text-amber-500 flex-shrink-0"><IconCheck /></span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-forest-700"
              >
                Talk to Us About Your Property <IconArrowRight />
              </a>
              <a
                href="tel:8706790131"
                className="inline-flex items-center gap-2 rounded-full border border-earth-200 px-8 py-4 text-sm font-semibold text-earth-800 transition hover:border-forest-300 hover:bg-earth-100"
              >
                <IconPhone /> 870-679-0131
              </a>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ──────────────────────────────────────────────── */}
        <section
          id="why"
          aria-label="Why choose Flippo Land and Wildlife Solutions"
          className="relative isolate overflow-hidden py-20 lg:py-28"
          style={{ background: "linear-gradient(150deg,#1a3321 0%,#0e1f14 100%)" }}
        >
          <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px,transparent_6px)]" />
          <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-amber-400/5 blur-3xl" />

          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <SectionLabel light>Why Flippo</SectionLabel>
              <h2 className="font-heading text-4xl leading-[1.15] text-white sm:text-5xl">
                The difference is in how we work
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/50">
                We stay current on the latest research and management practices
                to bring you the most effective solutions for your land.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-white/8 bg-white/4 p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/12 text-amber-400">
                    {point.icon}
                  </div>
                  <h3 className="mb-2 text-[0.9375rem] font-bold text-white">
                    {point.title}
                  </h3>
                  <p className="text-[0.8125rem] leading-[1.7] text-white/50">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-sm font-extrabold tracking-[0.12em] text-forest-950 uppercase shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
              >
                Get a Free Consultation <IconArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* ── Process ────────────────────────────────────────────────────── */}
        <section
          id="process"
          aria-label="Our land management process"
          className="bg-earth-50 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <SectionLabel>How It Works</SectionLabel>
              <h2 className="font-heading text-4xl leading-[1.15] text-forest-900 sm:text-5xl">
                A clear process, start to finish
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-earth-800/60">
                We believe landowners should understand every step of the plan.
                Here's how we work.
              </p>
            </div>

            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Connector line — desktop only, sits at center of step circles */}
              <div className="absolute top-[1.875rem] hidden h-px bg-earth-200 lg:block" style={{ left: "calc(12.5% + 1.875rem)", right: "calc(12.5% + 1.875rem)" }} />

              {processSteps.map((step) => (
                <div key={step.number} className="relative flex flex-col">
                  <div className="relative z-10 mb-5 flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full border-2 border-amber-400 bg-white font-heading text-xl font-bold text-forest-900 shadow-md">
                    {step.number}
                  </div>
                  <h3 className="mb-2.5 text-[0.9375rem] font-bold text-forest-900">
                    {step.title}
                  </h3>
                  <p className="text-[0.8125rem] leading-[1.7] text-earth-800/60">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery ────────────────────────────────────────────────────── */}
        <section
          id="gallery"
          aria-label="Previous land management and wildlife habitat projects"
          className="bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <SectionLabel>Previous Work</SectionLabel>
              <h2 className="font-heading text-4xl leading-[1.15] text-forest-900 sm:text-5xl">
                Results on the ground
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-earth-800/60">
                A look at some of the Arkansas properties and projects we've
                had the privilege of working on.
              </p>
            </div>

            {/* Masonry-style grid */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {galleryItems.map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <ImgBlock
                    label={item.label}
                    className={`w-full transition-transform duration-300 group-hover:scale-[1.03] ${
                      i === 0 || i === 5 ? "min-h-72" : "min-h-52"
                    }`}
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/0 to-transparent p-4 transition-all duration-300 group-hover:from-black/40">
                    <span className="translate-y-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-earth-800/40">
              Photos coming soon — check back as we build out the portfolio.
            </p>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────────────────── */}
        <section
          id="contact"
          aria-label="Contact Flippo Land and Wildlife Solutions"
          className="relative isolate overflow-hidden bg-forest-950 py-24 text-white lg:py-32"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(202,184,130,0.10),_transparent_55%)]" />

          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
              {/* Info column */}
              <div>
                <SectionLabel light>Get in Touch</SectionLabel>
                <h2 className="font-heading text-4xl leading-snug text-white sm:text-5xl">
                  Let's talk about your property.
                </h2>
                <p className="mt-6 leading-relaxed text-white/60">
                  Every project starts with a conversation. Tell us about your
                  property and your goals, and we'll put together a plan that
                  fits your land and your long-term vision.
                </p>

                <dl className="mt-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-amber-400"><IconPin /></div>
                    <div>
                      <dt className="mb-0.5 font-semibold text-white">Service Area</dt>
                      <dd className="text-sm leading-relaxed text-white/55">
                        Arkansas — statewide. Contact us to confirm
                        availability in your area.
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-amber-400"><IconPhone /></div>
                    <div>
                      <dt className="mb-0.5 font-semibold text-white">Phone</dt>
                      <dd>
                        <a href="tel:8706790131" className="text-amber-300 font-medium transition hover:text-amber-200">
                          870-679-0131
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-amber-400"><IconMail /></div>
                    <div>
                      <dt className="mb-0.5 font-semibold text-white">Email</dt>
                      <dd>
                        <a href="mailto:drew@flippolandandwildlife.com" className="text-amber-300 font-medium break-all transition hover:text-amber-200">
                          drew@flippolandandwildlife.com
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-10 rounded-2xl border border-amber-300/15 bg-amber-300/5 p-6">
                  <p className="text-sm leading-relaxed text-white/70">
                    <span className="font-bold text-amber-300">Currently accepting new clients.</span>{" "}
                    We typically respond within one business day. For
                    time-sensitive matters, call us directly.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h3 className="mb-6 font-heading text-2xl text-white">Send us a message</h3>
                <form
                  className="space-y-5"
                  aria-label="Contact form"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-1.5 block text-xs font-bold tracking-wider text-white/60 uppercase">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="w-full rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-1.5 block text-xs font-bold tracking-wider text-white/60 uppercase">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Smith"
                        className="w-full rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-bold tracking-wider text-white/60 uppercase">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-bold tracking-wider text-white/60 uppercase">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(870) 000-0000"
                      className="w-full rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-xs font-bold tracking-wider text-white/60 uppercase">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/80 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                    >
                      <option value="" disabled className="bg-forest-900">
                        Select a service…
                      </option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug} className="bg-forest-900">
                          {s.title}
                        </option>
                      ))}
                      <option value="other" className="bg-forest-900">
                        Multiple / Not Sure Yet
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-bold tracking-wider text-white/60 uppercase">
                      About Your Property
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Acreage, county, current condition, your goals (deer, turkey, ducks, timber, etc.)…"
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-amber-400 py-4 text-sm font-extrabold tracking-[0.18em] text-forest-950 uppercase transition hover:bg-amber-300"
                  >
                    Send Message
                  </button>

                  <p className="text-center text-xs text-white/25">
                    Your information is never shared. We'll respond within one business day.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/8 bg-forest-950 text-white/50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex flex-col leading-tight">
                <span className="font-heading text-xl tracking-[0.18em] text-white uppercase">
                  Flippo
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-amber-400/60 uppercase">
                  Land &amp; Wildlife Solutions
                </span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed">
                Arkansas land and wildlife management — timber stand
                improvement, prescribed burning, food plots, land clearing,
                GTR builds, and consulting.
              </p>
            </div>

            {/* Services list */}
            <div>
              <h4 className="mb-4 text-xs font-bold tracking-widest text-white uppercase">
                Services
              </h4>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <a href="#services" className="text-sm transition hover:text-amber-400">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="mb-4 text-xs font-bold tracking-widest text-white uppercase">
                Navigation
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm transition hover:text-amber-400">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-xs font-bold tracking-widest text-white uppercase">
                Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <IconPhone />
                  <a href="tel:8706790131" className="transition hover:text-amber-400">
                    870-679-0131
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <IconMail />
                  <a href="mailto:drew@flippolandandwildlife.com" className="break-all transition hover:text-amber-400">
                    drew@flippolandandwildlife.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IconPin />
                  Arkansas
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} Flippo Land &amp; Wildlife Solutions. All rights reserved.
            </p>
            <p className="text-xs text-white/25">
              Licensed &amp; Insured · Arkansas
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
