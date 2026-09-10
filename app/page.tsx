'use client';

import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Check,
  CircuitBoard,
  Clock3,
  DraftingCompass,
  Flame,
  MapPin,
  ScanLine,
  Share2,
} from 'lucide-react';
import { useState } from 'react';

const topics = ['Advanced manufacturing', 'Metallurgy', 'AI', 'Robotics'];

const program = [
  { title: 'CAD → path', detail: 'Geometry, fixtures and robot motion', icon: DraftingCompass },
  { title: 'Sense', detail: 'Vision, calibration and seam tracking', icon: ScanLine },
  { title: 'Weld', detail: 'Heat, materials and production reality', icon: Flame },
  { title: 'Learn', detail: 'Inspection evidence into the next weld', icon: Bot },
];

export default function Home() {
  const [shared, setShared] = useState(false);

  async function shareEvent() {
    const shareData = {
      title: 'Forge the Future — Berkeley',
      text: 'Join engineers in Berkeley at 6:00 PM for advanced manufacturing, metallurgy, AI, and robotics.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShared(true);
        window.setTimeout(() => setShared(false), 2200);
      }
    } catch {
      // Closing the native share sheet is an intentional no-op.
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <nav className="relative z-20 mx-auto flex h-16 w-full max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Forge the Future home">
          <span className="grid h-8 w-8 place-items-center bg-copper text-[9px] font-black tracking-[-0.08em] text-ink">AMR</span>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:block">Forge the Future</span>
        </a>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:flex"><MapPin className="h-3 w-3 text-copper" /> Berkeley, CA</span>
          <button type="button" onClick={shareEvent} className="inline-flex h-9 cursor-pointer items-center gap-2 border border-white/20 px-3 text-[10px] font-bold uppercase tracking-[0.14em] transition hover:border-copper hover:bg-copper hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-scan" aria-label="Share this event">
            {shared ? <Check className="h-3.5 w-3.5" /> : <Share2 className="h-3.5 w-3.5" />}
            {shared ? 'Copied' : 'Share'}
          </button>
        </div>
      </nav>

      <section id="top" className="relative mx-auto max-w-[1380px] px-5 pb-8 sm:px-8 lg:px-10">
        <div className="absolute inset-x-5 top-0 h-px bg-white/10 sm:inset-x-8 lg:inset-x-10" />
        <div className="grid min-h-[620px] gap-7 py-8 lg:h-[calc(100svh-64px)] lg:min-h-[620px] lg:max-h-[800px] lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative z-10 max-w-3xl lg:pr-5">
            <div className="mb-6 flex flex-wrap gap-1.5">
              {topics.map((topic) => <span key={topic} className="border border-white/15 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.13em] text-white/55">{topic}</span>)}
            </div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-copper">Berkeley · 6:00 PM</p>
            <h1 className="font-display text-[clamp(3.7rem,8vw,7.7rem)] font-black uppercase leading-[0.8] tracking-[-0.075em]">
              Forge<br /><span className="text-outline">the future.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
              One focused evening connecting mechanical design, mechatronics, metallurgy, AI and robotic welding.
            </p>

            <div className="mt-7 grid max-w-2xl grid-cols-2 gap-px bg-white/15 sm:grid-cols-3">
              <div className="flex items-center gap-3 bg-ink px-4 py-3.5"><Clock3 className="h-4 w-4 text-copper" /><div><p className="micro-label">Starts</p><p className="mt-0.5 text-sm font-semibold">6:00 PM</p></div></div>
              <div className="flex items-center gap-3 bg-ink px-4 py-3.5"><MapPin className="h-4 w-4 text-copper" /><div><p className="micro-label">Event</p><p className="mt-0.5 text-sm font-semibold">Berkeley, CA</p></div></div>
              <div className="col-span-2 flex items-center gap-3 bg-ink px-4 py-3.5 sm:col-span-1"><CircuitBoard className="h-4 w-4 text-copper" /><div><p className="micro-label">Priority</p><p className="mt-0.5 text-sm font-semibold">ME + Mechatronics</p></div></div>
            </div>
          </div>

          <aside className="relative min-h-[310px] overflow-hidden border border-white/10 bg-panel sm:min-h-[390px] lg:h-[min(66vh,590px)]" aria-label="Robotic welding event visual">
            <Image src="/hero.png" alt="Robotic welding cell scanning a precision metal workpiece" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[68%_center]" />
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
            <p className="section-label text-white/55">Berkeley · 6:00 PM</p>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-[0.88] tracking-[-0.06em]">Bring your hard problem.</h2>
          </div>
          <a href="https://advancedmetalresearch.com/contact?subject=Forge%20the%20Future%20Berkeley%20event" target="_blank" rel="noreferrer" className="group inline-flex min-w-72 items-center justify-between bg-paper px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-charcoal transition hover:bg-copper">
            Request an invitation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <footer className="bg-ink text-white">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-4 px-5 py-6 text-[9px] uppercase tracking-[0.16em] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>Event in Berkeley · AMR based in Hawthorne, California</p>
          <div className="flex gap-5"><a className="inline-flex items-center gap-1 transition hover:text-white" href="https://advancedmetalresearch.com/about" target="_blank" rel="noreferrer">About AMR <ArrowUpRight className="h-3 w-3" /></a><button type="button" onClick={shareEvent} className="cursor-pointer transition hover:text-white">Share</button></div>
        </div>
      </footer>
    </main>
  );
}
