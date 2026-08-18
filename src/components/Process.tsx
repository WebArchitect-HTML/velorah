import Silk from '@/components/Silk';

const STEPS = [
  {
    id: 1,
    title: 'Discussion',
    description: "On écoute vos ambitions",
  },
  {
    id: 2,
    title: 'Conception',
    description: "On réalise le site avec soin, selon votre identité.",
  },
  {
    id: 3,
    title: 'Livraison',
    description: "On livre avec un suivi personnalisé à l'arrivée.",
  },
];

export function Process() {
  return (
    <section id="about" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <div style={{ width: '100%', height: '100%' }}>
          <Silk speed={5} scale={1} color="#1e3b6f" noiseIntensity={1.5} rotation={0} />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        {/* Header */}
        <div className="relative text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-sm text-muted-foreground mb-3">
            À propos - Le studio
          </p>
          <h2
            className="text-3xl font-normal leading-[0.95] text-foreground sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Nous créons pour celles et ceux qui pensent.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-foreground/70">
            Discuter, réaliser, livrer
          </p>
        </div>

        {/* Timeline - vertical on mobile, horizontal on desktop */}
        <div className="relative w-full max-w-6xl">
          {/* Ligne verticale sur mobile, horizontale sur desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-border/30" />
          <div className="lg:hidden absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-border/30" />

          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
            {STEPS.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center w-full lg:w-1/3 lg:px-4">
                {/* Nombre liquid glass */}
                <div className="liquid-glass relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full text-base sm:text-lg font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {step.id}
                </div>

                {/* Card - vertical stack on all screens */}
                <div className="mt-6 w-full max-w-xs sm:max-w-sm lg:max-w-md p-4 sm:p-6 text-center rounded-2xl liquid-glass">
                  <h3 className="text-lg sm:text-xl font-normal text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}