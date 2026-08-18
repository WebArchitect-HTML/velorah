import { ArrowUp } from 'lucide-react';
import { TailwindCssBackgroundSnippet } from '@/components/ui/tailwind-css-background-snippet';

const FOOTER_LINKS = [
  {
    heading: 'Kusooo',
    links: ['Travaux choisis', 'Processus', 'Approche', 'Collaborations'],
  },
  {
    heading: 'Contact',
    links: ['Instagram', 'Are.na', 'LinkedIn', 'Newsletter'],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden px-6 pt-24 pb-12 border-t border-border bg-background">
      {/* Background gradient */}
      <TailwindCssBackgroundSnippet />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top - Large statement */}
        <div className="reveal pb-20">
          <p
            className="text-5xl sm:text-7xl md:text-8xl font-normal text-foreground leading-[0.95]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Kusooo<sup className="text-xl">&reg;</sup>
          </p>
          <p className="text-muted-foreground text-sm mt-6 max-w-md">
            Se concentrer sur la qualité d'une expérience qui convertit plutôt qu'un site sans âme
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-16">
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading} className="reveal">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Kusooo
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Nantes, France
              <br />
              +33 7 56 82 43 92
              <br />
              <a
                href="mailto:contact@kusooo.fr"
                className="block hover:text-foreground transition-colors"
              >
                contact@kusooo.fr
              </a>
              <a
                href="https://www.kusooo.fr"
                className="block hover:text-foreground transition-colors"
              >
                www.kusooo.fr
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2026 Kusooo. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <a href="/mentions-legales" className="hover:text-foreground transition-colors">Mentions légales</a>
            <a href="/cgv" className="hover:text-foreground transition-colors">CGV</a>
            <a href="/politique-confidentialite" className="hover:text-foreground transition-colors">Politique de confidentialité</a>
          </div>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Retour en haut
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
