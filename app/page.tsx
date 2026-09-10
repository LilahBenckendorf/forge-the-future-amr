import Image from 'next/image';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Box,
  BriefcaseBusiness,
  CircuitBoard,
  Clock3,
  Cpu,
  DraftingCompass,
  Eye,
  Flame,
  Gauge,
  MapPin,
  ScanLine,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { ShareButton } from '@/components/share-button';

export const dynamic = 'force-static';

const disciplines = ['Advanced manufacturing', 'Metallurgy', 'AI', 'Robotics'];

const contactHref =
  'mailto:lilahbenckendorf@berkeley.edu,tim@advancedmetalresearch.com?subject=Forge%20the%20Future%20Berkeley%20%E2%80%94%20question&body=Hi%20Lilah%20and%20Tim%2C%0A%0AI%20have%20a%20question%20about%20Forge%20the%20Future%20on%20Thursday%2C%20September%2010%20at%206%3A00%20PM%20at%20The%20Glade%20in%20Berkeley.%0A%0AThank%20you!';

const agenda = [
  { number: '01', title: 'From CAD to robot path', copy: 'Trace the mechanical stack from part geometry, fixtures and workholding to collision-free motion.', icon: DraftingCompass },
  { number: '02', title: 'See the weld', copy: 'Explore cameras, sensors, calibration and structured-light inspection as the cell builds a 3D understanding.', icon: ScanLine },
  { number: '03', title: 'Close the loop', copy: 'Connect heat, material behavior and metallurgical evidence to the next, better weld.', icon: Flame },
  { number: '04', title: 'Bring the hard problem', copy: 'Swap ideas with builders working across robotics, controls, manufacturing software and applied AI.', icon: Wrench },
];

const loop = [
  { label: 'Build', detail: 'Robots + cells', icon: Bot },
  { label: 'Weld', detail: 'Hard production parts', icon: Flame },
  { label: 'See', detail: 'Geometry + quality', icon: Eye },
  { label: 'Learn', detail: 'Improve the next weld', icon: Cpu },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="relative z-20 mx-auto flex w-full max-w-[1480px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3" aria-label="Advanced Metal Research event home">
          <span className="grid h-9 w-9 place-items-center bg-copper text-[10px] font-black tracking-[-0.08em] text-ink">AMR</span>
          <span className="hidden text-[11px] font-semibold uppercase leading-tight tracking-[0.19em] text-white/80 sm:block">Advanced Metal<br />Research</span>
        </a>
        <div className="flex items-center gap-5">
          <span className="hidden text-[11px] uppercase tracking-[0.2em] text-white/45 md:block">Thursday · Sep. 10 · The Glade, Berkeley</span>
          <ShareButton />
        </div>
      </nav>

      <section id="top" className="relative mx-auto min-h-[calc(100svh-80px)] w-full max-w-[1480px] px-5 pb-10 sm:px-8 lg:px-12">
        <div className="absolute inset-x-5 top-0 h-px bg-white/10 sm:inset-x-8 lg:inset-x-12" />
        <div className="pointer-events-none absolute right-[6%] top-[6%] h-[38rem] w-[38rem] rounded-full bg-scan/10 blur-[150px]" />

        <div className="relative grid min-h-[calc(100svh-112px)] items-end gap-10 pb-6 pt-14 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:pb-0 lg:pt-0">
          <div className="relative z-10 max-w-4xl lg:pr-4">
            <div className="mb-9 flex flex-wrap gap-2">
              {disciplines.map((discipline) => <span key={discipline} className="border border-white/15 bg-white/[0.03] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/60">{discipline}</span>)}
            </div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-copper">An evening inside the manufacturing loop</p>
            <h1 className="max-w-4xl font-display text-[clamp(4rem,9.2vw,8.6rem)] font-black uppercase leading-[0.79] tracking-[-0.075em] text-white">Forge<br /><span className="text-outline">the future.</span></h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/60 sm:text-lg">Meet the builders connecting mechanical design, mechatronics, metallurgy, AI and robotic welding—from CAD and fixtures to sensing, inspection and the next better weld.</p>

            <div className="mt-10 flex flex-wrap items-stretch gap-px bg-white/15">
              <div className="flex min-w-48 flex-1 items-center gap-4 bg-ink px-5 py-4">
                <Clock3 className="h-5 w-5 text-copper" strokeWidth={1.5} />
                <div><p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Thursday · Sep. 10</p><p className="mt-1 text-lg font-semibold text-white">6:00 PM</p></div>
              </div>
              <div className="flex min-w-52 flex-[1.25] items-center gap-4 bg-ink px-5 py-4">
                <MapPin className="h-5 w-5 text-copper" strokeWidth={1.5} />
                <div><p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Berkeley</p><p className="mt-1 text-lg font-semibold text-white">The Glade</p></div>
              </div>
            </div>
            <a href="#join" className="group mt-px flex items-center justify-between bg-copper px-5 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-ink transition hover:bg-white">No invitation required <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          </div>

          <aside className="relative mt-2 min-h-[360px] overflow-hidden border border-white/10 bg-panel sm:min-h-[520px] lg:min-h-[640px]" aria-label="AMR robotic welding event visual">
            <Image src={`${process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? ''}/amr-rosie.jpg`} alt="AMR’s Rosie six-axis welding robot in the Hawthorne workshop" fill priority sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover object-center lg:object-[46%_center]" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-75" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-white/20 pt-4 sm:bottom-7 sm:left-7 sm:right-7 sm:pt-5">
              <div><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-scan">Front-row focus</p><p className="mt-2 max-w-xs text-xl font-semibold leading-tight text-white sm:text-2xl">Mechanical +<br />mechatronics engineers</p></div>
              <span className="font-mono text-[10px] text-white/40">CELL / 01</span>
            </div>
          </aside>
        </div>
        <a href="#engineers" aria-label="Explore event details" className="absolute bottom-10 right-5 hidden h-12 w-12 place-items-center border border-white/15 text-white/60 transition hover:border-copper hover:text-copper sm:grid lg:right-12"><ArrowDown className="h-4 w-4" /></a>
      </section>

      <section id="engineers" className="bg-paper text-charcoal">
        <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="grid gap-12 border-b border-charcoal/20 pb-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <div><p className="section-label text-red">01 / Who it’s for</p><div className="mt-8 flex h-20 w-20 items-center justify-center rounded-full border border-charcoal/20"><Gauge className="h-8 w-8" strokeWidth={1.35} /></div></div>
            <div><h2 className="max-w-4xl font-display text-[clamp(2.8rem,6vw,6.2rem)] font-semibold leading-[0.92] tracking-[-0.055em]">Where mechanics meet <em className="font-serif font-normal text-red">machine intelligence.</em></h2><p className="mt-8 max-w-2xl text-lg leading-8 text-charcoal/65">This is for people who want the whole system—not a sealed-box robot demo. Follow forces, fit-up and tolerances into drives, sensing, control loops and measured evidence.</p></div>
          </div>
          <div className="grid border-b border-charcoal/20 md:grid-cols-2">
            <article className="border-charcoal/20 py-12 md:border-r md:pr-12 lg:py-16 lg:pr-20">
              <Box className="h-8 w-8 text-red" strokeWidth={1.4} /><p className="mt-9 section-label">Mechanical engineers</p><h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">See the physical system think.</h3><p className="mt-5 max-w-xl leading-7 text-charcoal/65">Robot joints and links, fixtures, workholding, CAD-to-path planning, thermal distortion and the geometry that determines weld quality.</p>
              <ul className="mt-8 grid gap-3 text-sm font-medium sm:grid-cols-2">{['Six-axis robot architecture', 'GD&T + 3D reconstruction', 'Positioning + work envelopes', 'Materials + heat input'].map((item) => <li className="flex items-center gap-2" key={item}><span className="h-1.5 w-1.5 bg-red" />{item}</li>)}</ul>
            </article>
            <article className="py-12 md:pl-12 lg:py-16 lg:pl-20">
              <CircuitBoard className="h-8 w-8 text-red" strokeWidth={1.4} /><p className="mt-9 section-label">Mechatronics engineers</p><h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">Follow sensing into motion.</h3><p className="mt-5 max-w-xl leading-7 text-charcoal/65">Servos, encoders, cameras, calibration and safety interlocks working as one real-time system—with evidence an engineer can inspect.</p>
              <ul className="mt-8 grid gap-3 text-sm font-medium sm:grid-cols-2">{['Real-time motion control', 'Vision + seam tracking', 'Sensors + feedback loops', 'Simulation before motion'].map((item) => <li className="flex items-center gap-2" key={item}><span className="h-1.5 w-1.5 bg-red" />{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-steel text-white">
        <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <div><p className="section-label text-copper">02 / The evening</p><p className="mt-8 max-w-xs text-sm leading-6 text-white/45">Four perspectives on one connected manufacturing system. The conversation starts Thursday, Sep. 10 at 6:00 PM.</p></div>
            <div>
              <h2 className="max-w-4xl font-display text-[clamp(2.7rem,5vw,5.6rem)] font-semibold leading-[0.94] tracking-[-0.055em]">From a hard part to a learning production loop.</h2>
              <div className="mt-14 border-t border-white/15">{agenda.map(({ number, title, copy, icon: Icon }) => <article key={number} className="group grid gap-5 border-b border-white/15 py-7 transition-colors hover:border-copper/70 sm:grid-cols-[70px_54px_0.9fr_1.1fr] sm:items-center sm:gap-7"><span className="font-mono text-xs text-copper">{number}</span><Icon className="h-6 w-6 text-white/40 transition group-hover:text-copper" strokeWidth={1.4} /><h3 className="text-xl font-semibold tracking-tight">{title}</h3><p className="text-sm leading-6 text-white/50">{copy}</p></article>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper text-charcoal">
        <div className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div><p className="section-label text-red">03 / Inside AMR</p><h2 className="mt-7 max-w-3xl font-display text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.055em]">One roof. The full stack.</h2></div>
            <a href="https://advancedmetalresearch.com/about" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 self-start border-b border-charcoal pb-1 text-xs font-bold uppercase tracking-[0.16em] sm:self-auto">Explore AMR <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </div>
          <div className="mt-14 grid gap-px bg-charcoal/20 sm:grid-cols-3">{[['8,250', 'sq ft Hawthorne facility'], ['400A / 480V', 'industrial power'], ['50+1', 'VF-4SS tool changer']].map(([value, label]) => <div key={value} className="bg-paper px-6 py-9 lg:px-9"><p className="font-display text-4xl font-semibold tracking-[-0.05em] lg:text-5xl">{value}</p><p className="mt-3 text-xs uppercase tracking-[0.16em] text-charcoal/50">{label}</p></div>)}</div>
          <div className="mt-px grid gap-px bg-charcoal/20 sm:grid-cols-2 lg:grid-cols-4">{loop.map(({ label, detail, icon: Icon }, index) => <div key={label} className="group bg-charcoal p-7 text-white lg:p-9"><div className="flex items-start justify-between"><Icon className="h-7 w-7 text-copper" strokeWidth={1.4} /><span className="font-mono text-[10px] text-white/25">0{index + 1}</span></div><p className="mt-16 text-2xl font-semibold">{label}</p><p className="mt-2 text-sm text-white/45">{detail}</p></div>)}</div>

          <div className="mt-px grid gap-8 bg-red p-7 text-white sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <BriefcaseBusiness className="h-8 w-8 text-copper" strokeWidth={1.4} />
            <div><p className="section-label text-white/55">Potential internships</p><h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Build hardware next to SpaceX R&amp;D.</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">Explore possible hands-on opportunities at AMR’s Hawthorne shop, directly next to SpaceX R&amp;D. Opportunities depend on AMR availability and selection.</p></div>
            <a href={contactHref} className="group inline-flex items-center gap-3 border-b border-white pb-1 text-xs font-bold uppercase tracking-[0.16em]">Ask the team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
        </div>
      </section>

      <section id="join" className="relative overflow-hidden bg-red text-white">
        <div className="pointer-events-none absolute -right-24 -top-32 h-[34rem] w-[34rem] rounded-full border-[110px] border-white/[0.035]" />
        <div className="relative mx-auto grid max-w-[1480px] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
          <div><p className="section-label text-white/60">04 / Join the room</p><h2 className="mt-7 max-w-4xl font-display text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">Bring your<br />hard problem.</h2></div>
          <div className="flex flex-col justify-end">
            <Sparkles className="h-8 w-8 text-copper" strokeWidth={1.5} />
            <p className="mt-8 max-w-md text-lg leading-8 text-white/75">If you think in mechanisms, controls, materials, code—or all four—you belong in this conversation.</p>
            <div className="mt-9 border border-white/20 p-5"><p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-copper">No invitation required</p><p className="mt-3 text-sm leading-6 text-white/65">Simply join us Thursday, Sep. 10 at 6:00 PM on The Glade at Berkeley.</p></div>
            <a href={contactHref} className="group mt-px inline-flex w-full items-center justify-between bg-paper px-6 py-5 text-sm font-bold uppercase tracking-[0.16em] text-charcoal transition hover:bg-copper sm:w-auto sm:min-w-80">Email both organizers <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></a>
            <p className="mt-5 max-w-md text-xs leading-5 text-white/55">lilahbenckendorf@berkeley.edu<br />tim@advancedmetalresearch.com</p>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-white">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-6 px-5 py-8 text-[10px] uppercase tracking-[0.18em] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>The Glade · Berkeley · Thursday, Sep. 10 · 6:00 PM</p>
          <div className="flex gap-6"><a className="transition hover:text-white" href="https://advancedmetalresearch.com" target="_blank" rel="noreferrer">Source site</a><ShareButton compact /></div>
        </div>
      </footer>
    </main>
  );
}
