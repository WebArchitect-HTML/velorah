import { Quote } from 'lucide-react';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Silence over noise',
    body: 'Every element earns its place. We remove until only the essential remains, then refine that.',
  },
  {
    number: '02',
    title: 'Depth over surface',
    body: 'We design for the person who stays, not the one who scrolls past. Work that rewards attention.',
  },
  {
    number: '03',
    title: 'Craft over speed',
    body: 'We ship slowly and deliberately. The work outlasts the trend it was born beside.',
  },
];

const STATS = [
  { value: '12', label: 'Years of practice' },
  { value: '47', label: 'Studios served' },
  { value: '8', label: 'Hands on the team' },
  { value: '1', label: 'Quiet rebellion' },
];

export function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden px-6 py-32 sm:py-40 bg-background"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Intro Statement */}
        <div className="max-w-4xl reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            About — The Studio
          </p>
          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-normal text-foreground leading-[1.0]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            We build for the{' '}
            <em className="not-italic text-muted-foreground">
              ones who think
            </em>{' '}
            in long sentences.
          </h2>
        </div>

        {/* Portrait + Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-24 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative overflow-hidden rounded-2xl bg-secondary/40">
              <div className="aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/1066171/pexels-photo-1066171.jpeg?auto=compress&cs=tinysrgb&h=1000&w=750"
                  alt="A portrait in the studio"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-85"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <Quote size={32} className="text-muted-foreground mb-6" />
            <p
              className="text-2xl sm:text-3xl md:text-4xl text-foreground leading-[1.2] font-normal"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              "The best work doesn't shout. It waits — patient, precise, and
              unmistakably alive — for the person quiet enough to notice it."
            </p>
            <p className="text-sm text-muted-foreground mt-8 tracking-wide">
              — Kusooo, Web Designer
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32">
          {PRINCIPLES.map((p) => (
            <div key={p.number} className="reveal">
              <span
                className="text-5xl text-muted-foreground/40 block mb-6"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {p.number}
              </span>
              <h3
                className="text-2xl text-foreground font-normal mb-4"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 pt-12 border-t border-border">
          {STATS.map((s) => (
            <div key={s.label} className="reveal">
              <span
                className="text-5xl sm:text-6xl text-foreground font-normal block"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {s.value}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-3 block">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
