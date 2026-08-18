import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/cgv")({
  component: CGV,
});

function CGV() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <Navigation />
      <main className="relative z-10 pt-32 pb-32 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Conditions Générales de Vente - Dernière mise à jour : 18 août 2026
          </p>
          <h1 className="text-4xl sm:text-5xl font-normal text-foreground mb-8" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Conditions Générales de Vente
          </h1>

          <div className="prose prose-sm text-muted-foreground leading-relaxed space-y-8">
            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>1. Préliminaires</h2>
              <p>Sont désignées ci-après collectivement comme les "Conditions Générales de Vente" (CGV) le présent document ainsi que toute version ultérieure. Le site est exploité par le studio Kusooo, fondé par Malo Gallis Gautier.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>2. Prix</h2>
              <p>Les prestations sont facturées selon le devis établi conjointement avec le client. Tous les prix indiqués sont en euros TTC et comprennent la TVA au taux en vigueur.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>3. Paiement</h2>
              <p>Le règlement s'effectue selon les modalités suivantes :</p>
              <ul>
                <li>Un acompte de 50% est versé au début de la réalisation du projet, établi conjointement avec le client.</li>
                <li>Le solde restant (50%) est versé à la livraison du site.</li>
              </ul>
              <p>Le paiement s'effectue par virement bancaire.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>4. Livraison</h2>
              <p>Le projet est livré une fois le paiement intégralement reçu. La date de livraison estimée est mentionnée dans le devis. Le site est considéré comme livré lors de son mise en ligne et de la remise d'un lien de consultation au client.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>5. Rétractation</h2>
              <p>Conformément aux articles 18 et suivants de la directive 2011/83/UE, le client dispose d'un délai de 14 jours calendaires pour exercer son droit de rétractation sans motif ni frais, à condition que le projet n'ait pas été réalisé ou commencé.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>6. Données personnelles</h2>
              <p>Nous ne vendons aucune donnée. Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre aux demandes du client et sont conservées à des fins strictement professionnelles. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et d'effacement sur vos données. Contactez-nous à contact@kusooo.fr.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>7. Droit applicable & Contact</h2>
              <p>Le présent site est soumis au droit français. Pour toute question :</p>
              <p>E-mail : contact@kusooo.fr<br />Téléphone : +33 7 56 82 43 92</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
