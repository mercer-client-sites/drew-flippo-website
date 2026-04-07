const services = [
  "Consults & Management Plans",
  "Timber Stand Improvement",
  "Prescribed Fire",
  "Food Plots & Habitat Enhancements",
  "Land Clearing & More",
];

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-earth-50 text-stone-950">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(46,92,59,0.12),_transparent_34%),linear-gradient(180deg,_rgba(248,245,240,0.82),_rgba(237,232,224,0.94))]" />
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(140deg,_rgba(255,255,255,0.45),_rgba(255,255,255,0.45)_2px,_transparent_2px,_transparent_18px)] opacity-70" />

      <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 py-8 sm:px-8 sm:py-12">
        <div className="w-full rounded-[2rem] border border-stone-900/8 bg-white/70 p-6 shadow-[0_30px_90px_rgba(61,53,42,0.12)] backdrop-blur-sm sm:p-10 lg:p-14">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border-[6px] border-forest-950/90 bg-earth-50 shadow-[inset_0_0_0_10px_rgba(61,53,42,0.03)] sm:h-44 sm:w-44">
                <div className="text-center leading-none">
                  <p className="font-heading text-4xl text-forest-950 sm:text-5xl">
                    D
                  </p>
                  <p className="mt-2 text-[0.6rem] font-bold tracking-[0.45em] text-forest-950 uppercase">
                    Deer
                  </p>
                  <p className="mt-1 text-[0.6rem] font-bold tracking-[0.45em] text-forest-950 uppercase">
                    Turkey
                  </p>
                </div>
              </div>

              <p className="mt-8 font-heading text-6xl leading-none tracking-[0.06em] text-[#2f201b] uppercase sm:text-7xl lg:text-8xl">
                Flippo
              </p>
              <p className="mt-3 text-sm font-semibold tracking-[0.35em] text-forest-950 uppercase sm:text-base">
                Land & Wildlife Solutions
              </p>
            </div>

            <div className="mt-12 border-y border-stone-900/10 py-5 text-center">
              <p className="text-2xl font-extrabold tracking-[0.08em] text-[#2f201b] uppercase sm:text-4xl">
                Serving Arkansas Landowners
              </p>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-start">
              <div>
                <ul id="services" className="space-y-4 sm:space-y-5">
                  {services.map((service) => (
                    <li
                      key={service}
                      className="border-b border-stone-900/10 pb-4 text-2xl font-semibold tracking-tight text-[#2b2622] sm:text-3xl"
                    >
                      <span className="mr-3 inline-block text-[#4b372f]">
                        •
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="rounded-[1.75rem] border border-forest-950/10 bg-forest-950 px-6 py-7 text-earth-50 shadow-[0_20px_60px_rgba(14,31,20,0.18)]">
                <p className="text-sm font-semibold tracking-[0.28em] text-amber-100 uppercase">
                  Get The Most Out Of Your Land
                </p>
                <p className="mt-4 text-base leading-7 text-earth-100/86">
                  Drew provides practical land management support that balances
                  habitat, timber, access, and long-term property goals.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="tel:8706790131"
                    className="flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-lg font-extrabold text-forest-950 transition hover:bg-amber-200"
                  >
                    870-679-0131
                  </a>
                  <a
                    href="mailto:drew@flippolandandwildlife.com"
                    className="block rounded-3xl border border-white/12 px-5 py-4 text-center text-base font-semibold text-earth-50 transition hover:bg-white/8 break-all"
                  >
                    drew@flippolandandwildlife.com
                  </a>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <a
                    href="#services"
                    className="inline-flex items-center text-sm font-semibold tracking-[0.18em] text-amber-100 uppercase transition hover:text-white"
                  >
                    Explore Services
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
