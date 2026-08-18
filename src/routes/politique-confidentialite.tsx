import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/politique-confidentialite")({
  component: PolitiqueConfidentialite,
});

function PolitiqueConfidentialite() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <Navigation />
      <main className="relative z-10 pt-32 pb-32 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Politique de confidentialité - Dernière mise à jour : 18 août 2026
          </p>
          <h1 className="text-4xl sm:text-5xl font-normal text-foreground mb-8" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Politique de confidentialité et RGPD
          </h1>

          <div className="prose prose-sm text-muted-foreground leading-relaxed space-y-8">
            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>Collecte des données</h2>
              <p>Nous collectons uniquement les données nécessaires au bon fonctionnement de nos services :</p>
              <ul>
                <li>Nom et prénom</li>
                <li>Adresse e-mail</li>
                <li>Contenu du message (formulaire de contact)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>Utilisation des données</h2>
              <p>Les données sont utilisées exclusivement pour répondre à vos demandes de contact.</p>
              <p><strong>Nous ne vendons aucune donnée.</strong> Les informations sont conservées à des fins strictement professionnelles.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>Conservation</h2>
              <p>Vos données sont conservées pendant 3 ans à compter de leur collecte, sauf durée légale plus longue.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>Vos droits</h2>
              <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données. Contactez-nous à contact@kusooo.fr.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>Cookies</h2>
              <p>Notre site utilise des cookies fonctionnels indispensables au bon fonctionnement. Aucun cookie de suivi publicitaire n'est utilisé.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>Hébergeur</h2>
              <p>Le site est hébergé par IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Allemagne (ionos.fr).</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>Contact</h2>
              <p>E-mail : contact@kusooo.fr<br />Téléphone : +33 7 56 82 43 92<br />Studio basé à Nantes, France</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
