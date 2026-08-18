import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Silk from '@/components/Silk';
import { AnimatedList } from '@/components/ui/animated-list';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

function NotificationItem({ item }: { item: NotificationItem }) {
  return (
    <div
      className={cn(
        'relative flex w-full items-start gap-4 rounded-xl border border-border/20 bg-background/30 p-5 shadow-sm backdrop-blur-sm',
        'transition-all duration-300 hover:border-border/40 hover:shadow-md',
        `border-l-2`,
      )}
      style={{ borderLeftColor: item.color }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: `${item.color}20` }}
      >
        <item.icon className="h-5 w-5" style={{ color: item.color }} />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{item.title}</p>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

const processSteps: NotificationItem[] = [
  {
    id: '1',
    title: 'Discussion',
    description: "On échange pour capter vos ambitions, vos valeurs et le positionnement que vous souhaitez dans le paysage numérique.",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4v-5.5a2 2 0 0 1 2-2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8"></path></svg>
    ),
    color: '#1e3b6f',
  },
  {
    id: '2',
    title: 'Conception',
    description: "On dessine les bonnes questions. On réalise le site avec soin, en respectant votre identité et votre voix.",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12c4.42 0 8 3.58 8 8 0-3.59 2.91-6.5 7-7 0-3.86-2.09-5-4-6.5 0-1.66 0-3-.77-4.2 3-1 6-1.5 9-1.5z"></path><path d="M7 21c0-2.5-.5-4.5-1.5-6-1.5 1-3 1.5-5.5 1.5z"></path></svg>
    ),
    color: '#3b82f6',
  },
  {
    id: '3',
    title: 'Livraison',
    description: "On livre le site accompagné d'un suivi complet pour qu'il prenne toute son ampleur et diffuse votre présence au monde.",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14M5 12l7 7m-7 0l7-7"></path></svg>
    ),
    color: '#10b981',
  },
];

export function About() {
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowList(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="about" className="relative h-[110vh] min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <Silk speed={5} scale={1} color="#1e3b6f" noiseIntensity={1.5} rotation={0} />
        </div>
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
        <div
          className={cn(
            'relative text-center transition-all duration-700 ease-out',
            showList ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          )}
        >
          <h2
            className="text-4xl font-normal leading-[0.95] text-foreground sm:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            À propos - Le studio
          </h2>
          <p
            className="mt-8 max-w-2xl text-balance text-lg text-foreground/80"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Nous créons pour celles et ceux qui pensent.
            <br className="hidden sm:block" />
            On discute avec le client pour comprendre ses ambitions, on réalise le site avec soin en respectant son identité, puis on le livre accompagné d'un suivi complet pour qu'il prenne toute son ampleur.
          </p>
        </div>

        <div
          className={cn(
            'relative mt-16 w-full max-w-2xl transition-all duration-700 delay-200 ease-out',
            showList ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
          )}
        >
          <div className="absolute -top-8 left-0 right-0 h-px w-full bg-border" />
          <AnimatedList
            delayBetweenItems={2500}
            className="w-full"
            itemClassName="opacity-0 animate-fade-rise"
          >
            {processSteps.map((step) => (
              <NotificationItem key={step.id} item={step} />
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
