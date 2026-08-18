import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/mentions-legales")({
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <Navigation />
      <main className="relative z-10 pt-32 pb-32 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Mentions légales - Dernière mise à jour : 18 août 2026
          </p>
          <h1 className="text-4xl sm:text-5xl font-normal text-foreground mb-8" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Mentions légales
          </h1>

          <div className="prose prose-sm text-muted-foreground leading-relaxed space-y-8">
            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>1. Éditeur du site</h2>
              <p>Le présent site est édité par le studio Kusooo, fondé par <strong>Malo Gallis Gautier</strong>.</p>
              <p>
                E-mail : <a href="mailto:contact@kusooo.fr" className="text-foreground hover:text-muted-foreground transition-colors">contact@kusooo.fr</a>
              </p>
              <p>Téléphone : +33 7 56 82 43 92</p>
              <p>Le site est exploité à titre personnel et n'est pas publié par une société.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>2. Directeur de la publication</h2>
              <p>Le directeur de la publication est : <strong>Malo Gallis Gautier</strong></p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>3. Hébergement</h2>
              <p>Le site est hébergé sur un serveur privé virtuel (VPS) fourni par :</p>
              <p><strong>IONOS SE</strong><br />Elgendorfer Str. 57<br />56410 Montabaur<br />Allemagne<br />Site internet : ionos.fr</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>4. Propriété intellectuelle</h2>
              <p>L'ensemble des éléments présents sur le site, notamment les textes, graphismes, images, logos, éléments visuels, interfaces, animations et contenus, sont protégés par les dispositions applicables en matière de propriété intellectuelle.</p>
              <p>Toute reproduction, représentation, modification, adaptation, distribution ou exploitation, totale ou partielle, de ces éléments sans autorisation préalable est interdite.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>5. Responsabilité</h2>
              <p>L'éditeur s'efforce de maintenir sur le site des informations exactes et à jour. Toutefois, l'éditeur ne garantit pas l'exactitude, l'exhaustivité ou l'actualité de l'ensemble des informations publiées sur le site.</p>
              <p>L'éditeur ne saurait être tenu responsable des dommages directs ou indirects pouvant résulter de l'utilisation du site ou de l'impossibilité d'y accéder.</p>
              <p>Les liens hypertextes éventuellement présents sur le site vers des sites tiers ne sauraient engager la responsabilité de l'éditeur quant au contenu, à la disponibilité ou au fonctionnement de ces sites.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>6. Données personnelles</h2>
              <p>Le site ne collecte pas de données personnelles à des fins commerciales ou publicitaires.</p>
              <p>Le site dispose toutefois d'un formulaire de contact permettant à l'utilisateur de transmettre volontairement certaines informations, notamment son nom, son adresse e-mail et le contenu de son message.</p>
              <p>Les données transmises via ce formulaire sont utilisées uniquement afin de répondre aux demandes adressées à l'éditeur. Ces données ne sont pas vendues ni cédées à des tiers à des fins commerciales.</p>
              <p>Les données sont conservées pendant la durée nécessaire au traitement de la demande et, le cas échéant, pendant la durée nécessaire au respect des obligations légales applicables.</p>
              <p>Conformément au RGPD, toute personne dispose d'un droit d'accès, de rectification, d'effacement, de limitation du traitement et d'opposition. Pour exercer ces droits :</p>
              <p>
                <strong>E-mail :</strong> <a href="mailto:contact@kusooo.fr" className="text-foreground hover:text-muted-foreground transition-colors">contact@kusooo.fr</a>
              </p>
              <p>Vous disposez également du droit d'introduire une réclamation auprès de la CNIL.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>7. Cookies</h2>
              <p>Le site n'utilise pas de cookies non nécessaires à son fonctionnement, sauf indication contraire. Si des cookies ou technologies similaires nécessitant le consentement de l'utilisateur sont ultérieurement mis en place, les informations correspondantes ainsi qu'un mécanisme permettant de gérer les préférences de l'utilisateur seront ajoutés au site.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>8. Accessibilité</h2>
              <p>L'éditeur s'efforce de rendre le site accessible au plus grand nombre et d'améliorer continuellement son niveau d'accessibilité.</p>
              <p>Aucune déclaration de conformité ou certification d'accessibilité n'est revendiquée à ce jour.</p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>9. Droit applicable & Contact</h2>
              <p>Le présent site est soumis au droit français. Pour toute question concernant le site, son contenu ou les présentes mentions légales :</p>
              <p>
                E-mail : <a href="mailto:contact@kusooo.fr" className="text-foreground hover:text-muted-foreground transition-colors">contact@kusooo.fr</a><br />
                Téléphone : +33 7 56 82 43 92
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
