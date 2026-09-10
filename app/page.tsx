import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  CircuitBoard,
  Clock3,
  DraftingCompass,
  Flame,
  MapPin,
  ScanLine,
} from 'lucide-react';
import { ShareButton } from '@/components/share-button';

export const dynamic = 'force-static';

const topics = ['Advanced manufacturing', 'Metallurgy', 'AI', 'Robotics'];

const contactHref =
  'mailto:lilahbenckendorf@berkeley.edu,tim@advancedmetalresearch.com?subject=Forge%20the%20Future%20Berkeley%20%E2%80%94%20question&body=Hi%20Lilah%20and%20Tim%2C%0A%0AI%20have%20a%20question%20about%20Forge%20the%20Future%20on%20Thursday%2C%20September%2010%20at%206%3A00%20PM%20at%20The%20Glade%20in%20Berkeley.%0A%0AThank%20you!';

const program = [
  { title: 'CAD → path', detail: 'Geometry, fixtures and robot motion', icon: DraftingCompass },
  { title: 'Sense', detail: 'Vision, calibration and seam tracking', icon: ScanLine },
  { title: 'Weld', detail: 'Heat, materials and production reality', icon: Flame },
  { title: 'Learn', detail: 'Inspection evidence into the next weld', icon: Bot },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <nav className="relative z-20 mx-auto flex h-16 w-full max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Forge the Future home">
          <span className="grid h-8 w-8 place-items-center bg-copper text-[9px] font-black tracking-[-0.08em] text-ink">AMR</span>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:block">Forge the Future</span>
        </a>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:flex"><MapPin className="h-3 w-3 text-copper" /> The Glade · Berkeley</span>
          <a href="#details" className="group inline-flex h-9 items-center gap-2 bg-copper px-3.5 text-[10px] font-black uppercase tracking-[0.14em] text-ink transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-scan">
            No invitation required <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <ShareButton />
        </div>
      </nav>

      <section id="top" className="relative mx-auto max-w-[1380px] px-5 pb-8 sm:px-8 lg:px-10">
        <div className="absolute inset-x-5 top-0 h-px bg-white/10 sm:inset-x-8 lg:inset-x-10" />
        <div className="grid min-h-[620px] gap-7 py-8 lg:h-[calc(100svh-64px)] lg:min-h-[620px] lg:max-h-[800px] lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative z-10 max-w-3xl lg:pr-5">
            <div className="mb-6 flex flex-wrap gap-1.5">
              {topics.map((topic) => <span key={topic} className="border border-white/15 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.13em] text-white/55">{topic}</span>)}
            </div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-copper">Thursday · Sep. 10 · The Glade, Berkeley</p>
            <h1 className="font-display text-[clamp(3.7rem,8vw,7.7rem)] font-black uppercase leading-[0.8] tracking-[-0.075em]">
              Forge<br /><span className="text-outline">the future.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
              One focused evening connecting mechanical design, mechatronics, metallurgy, AI and robotic welding.
            </p>

            <div id="details" className="mt-7 flex flex-wrap items-center gap-4">
              <a href={contactHref} className="group inline-flex items-center gap-8 bg-copper px-5 py-4 text-xs font-black uppercase tracking-[0.15em] text-ink transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-scan">
                Email the organizers <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="max-w-60 text-[10px] leading-4 text-white/55"><strong className="text-white">No invitation is necessary.</strong><br />Questions email both Lilah and Tim.</p>
            </div>

            <div className="mt-5 grid max-w-2xl grid-cols-2 gap-px bg-white/15 sm:grid-cols-3">
              <div className="flex items-center gap-3 bg-ink px-4 py-3.5"><Clock3 className="h-4 w-4 text-copper" /><div><p className="micro-label">Thursday · Sep. 10</p><p className="mt-0.5 text-sm font-semibold">6:00 PM</p></div></div>
              <div className="flex items-center gap-3 bg-ink px-4 py-3.5"><MapPin className="h-4 w-4 text-copper" /><div><p className="micro-label">Berkeley</p><p className="mt-0.5 text-sm font-semibold">The Glade</p></div></div>
              <div className="col-span-2 flex items-center gap-3 bg-ink px-4 py-3.5 sm:col-span-1"><CircuitBoard className="h-4 w-4 text-copper" /><div><p className="micro-label">Priority</p><p className="mt-0.5 text-sm font-semibold">ME + Mechatronics</p></div></div>
            </div>
          </div>

          <aside className="relative min-h-[310px] overflow-hidden border border-white/10 bg-panel sm:min-h-[390px] lg:h-[min(66vh,590px)]" aria-label="Robotic welding event visual">
            <Image src={`${process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? ''}/hero.png`} alt="Robotic welding cell scanning a precision metal workpiece" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[68%_center]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-white/20 pt-4">
              <div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-scan">Engineer focus</p><p className="mt-1.5 text-lg font-semibold">Mechanisms → motion → evidence</p></div>
              <span className="font-mono text-[9px] text-white/35">CELL / 01</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-paper text-charcoal">
        <div className="mx-auto max-w-[1380px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="section-label text-red">The short version</p>
              <h2 className="mt-4 max-w-lg font-display text-[clamp(2.5rem,4.8vw,5rem)] font-semibold leading-[0.92] tracking-[-0.055em]">One evening.<br /><em className="font-serif font-normal text-red">The full stack.</em></h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-charcoal/60">Built for people who want to see how the physical system and machine intelligence work together—not a sealed-box robot demo.</p>
            </div>

            <div className="grid gap-px bg-charcoal/20 sm:grid-cols-2">
              {program.map(({ title, detail, icon: Icon }, index) => (
                <article key={title} className="group bg-paper p-5 lg:p-6">
                  <div className="flex items-start justify-between"><Icon className="h-5 w-5 text-red" strokeWidth={1.4} /><span className="font-mono text-[9px] text-charcoal/35">0{index + 1}</span></div>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/55">{detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-px bg-charcoal/20 lg:grid-cols-2">
            <article className="bg-charcoal p-6 text-white sm:p-8">
              <CircuitBoard className="h-6 w-6 text-copper" strokeWidth={1.4} />
              <p className="mt-6 section-label text-white/45">Mechanical + mechatronics</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">Front-row technical focus.</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">Fixtures, workholding, robot architecture, servos, encoders, calibration, safety interlocks, feedback loops and 3D inspection.</p>
            </article>

            <article className="relative overflow-hidden bg-red p-6 text-white sm:p-8">
              <div className="pointer-events-none absolute -right-14 -top-20 h-56 w-56 rounded-full border-[56px] border-white/[0.05]" />
              <BriefcaseBusiness className="relative h-6 w-6 text-copper" strokeWidth={1.4} />
              <p className="relative mt-6 section-label text-white/55">Beyond the event</p>
              <h3 className="relative mt-3 text-2xl font-semibold tracking-[-0.035em]">Explore potential internships in Hawthorne.</h3>
              <p className="relative mt-3 max-w-xl text-sm leading-6 text-white/65">Meet the team and learn about possible hands-on opportunities at AMR’s 8,250 sq ft Los Angeles-area shop—directly next to SpaceX headquarters.</p>
              <p className="relative mt-4 text-[10px] uppercase tracking-[0.14em] text-white/40">Opportunities depend on AMR availability and selection.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="reserve" className="bg-red text-white">
        <div className="mx-auto grid max-w-[1380px] items-center gap-7 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] lg:px-10 lg:py-14">
          <div>
            <p className="section-label text-white/55">Thursday · Sep. 10 · 6:00 PM · The Glade, Berkeley</p>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-[0.88] tracking-[-0.06em]">Bring your hard problem.</h2>
          </div>
          <div>
            <a href={contactHref} className="group inline-flex min-w-72 items-center justify-between bg-paper px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-charcoal transition hover:bg-copper">
              Email the organizers <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-2 text-[9px] leading-4 uppercase tracking-[0.12em] text-white/55">No invitation required · lilahbenckendorf@berkeley.edu<br />tim@advancedmetalresearch.com</p>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-white">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-4 px-5 py-6 text-[9px] uppercase tracking-[0.16em] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>Event at The Glade, Berkeley · AMR based in Hawthorne, California</p>
          <div className="flex gap-5"><a className="inline-flex items-center gap-1 transition hover:text-white" href="https://advancedmetalresearch.com/about" target="_blank" rel="noreferrer">About AMR <ArrowUpRight className="h-3 w-3" /></a><ShareButton compact /></div>
        </div>
      </footer>
    </main>
  );
}
