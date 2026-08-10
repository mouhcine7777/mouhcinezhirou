export type CityFaq = { q: string; a: string };

export type CityData = {
  slug: string;
  city: string;
  region: string;
  // A one-line eyebrow tag, e.g. "Freelance basé à Casablanca — disponible cette semaine"
  eyebrow: string;
  heroIntro: string;
  // Short local-economy paragraph — this is the section that actually differentiates
  // the page: real, specific context about why this city's businesses need a site,
  // not a reworded copy of another city's paragraph.
  localContextTitle: string;
  localContextBody: string[];
  // Named districts/zones, used in the FAQ so it reads like someone who actually
  // knows the city, not a template.
  districts: string[];
  neighborCities: { name: string; slug: string }[];
  faqs: CityFaq[];
  metaKeywords: string[];
};

export const cityPages: CityData[] = [
  {
    slug: "developpeur-web-freelance-tanger",
    city: "Tanger",
    region: "Tanger-Tétouan-Al Hoceïma",
    eyebrow: "Freelance à distance depuis Casablanca — clients à Tanger",
    heroIntro:
      "Je m'appelle Mouhcine, développeur web freelance, et je travaille avec des entreprises basées à Tanger en télétravail complet. Pas d'agence, pas de sous-traitance : je conçois et je code moi-même chaque site, du premier échange WhatsApp à la mise en ligne, en React et Next.js.",
    localContextTitle: "Un site pensé pour l'économie de Tanger",
    localContextBody: [
      "Tanger n'est pas une ville comme les autres au Maroc : port de Tanger Med, proximité directe avec l'Europe, zones franches industrielles et une forte activité import-export. Les entreprises qui y opèrent ont souvent besoin d'un site capable de parler à des clients ou partenaires à l'étranger, pas seulement au marché local.",
      "Je construis des sites multilingues (français, anglais, parfois espagnol) avec cette réalité en tête : présentation claire de l'activité, formulaires de contact professionnels, et une structure qui inspire confiance à un partenaire commercial basé à Madrid ou à Rotterdam autant qu'à un client marocain.",
    ],
    districts: ["Tanger Med", "Médina", "Malabata", "Centre-ville"],
    neighborCities: [
      { name: "Rabat", slug: "developpeur-web-freelance-rabat" },
      { name: "Casablanca", slug: "developpeur-web-freelance-casablanca" },
    ],
    faqs: [
      {
        q: "Travaillez-vous à distance avec des clients à Tanger ?",
        a: "Oui, entièrement. Je suis basé à Casablanca et je travaille avec plusieurs clients à Tanger uniquement en télétravail — WhatsApp, visio et points d'étape réguliers. Deux clients tangérois (Chiringuito, Tangerino) témoignent que ça ne pose aucun problème de réactivité.",
      },
      {
        q: "Pouvez-vous créer un site multilingue pour une entreprise qui travaille avec l'Europe ?",
        a: "Oui, c'est une demande fréquente pour les entreprises basées à Tanger avec des partenaires en Espagne ou ailleurs en Europe. Je mets en place une structure multilingue propre (français, anglais, espagnol selon vos besoins), avec un vrai suivi SEO par langue plutôt qu'une simple traduction automatique.",
      },
      {
        q: "Pourquoi choisir un développeur freelance plutôt qu'une agence à Tanger ?",
        a: "Parce que vous parlez directement à la personne qui écrit le code, sans commercial ni chef de projet entre nous. Un devis clair sous 24h, un seul interlocuteur du début à la fin, et un prix qui reflète le travail réel plutôt qu'une structure d'agence.",
      },
    ],
    metaKeywords: [
      "développeur web freelance Tanger",
      "développeur freelance Tanger",
      "développeur web Tanger",
      "créer un site web Tanger",
      "développeur React Next.js Tanger",
    ],
  },
  {
    slug: "developpeur-web-freelance-rabat",
    city: "Rabat",
    region: "Rabat-Salé-Kénitra",
    eyebrow: "Freelance à distance depuis Casablanca — clients à Rabat",
    heroIntro:
      "Je m'appelle Mouhcine, développeur web freelance, et je travaille avec des entreprises et institutions basées à Rabat en télétravail complet. Pas d'agence, pas de sous-traitance : je conçois et je code moi-même chaque site, du premier échange WhatsApp à la mise en ligne, en React et Next.js.",
    localContextTitle: "Un site à la hauteur d'une capitale administrative",
    localContextBody: [
      "Rabat concentre les ministères, les ambassades, les organisations internationales et de nombreux sièges d'entreprises et de cabinets de conseil. C'est un tissu économique plus institutionnel qu'à Casablanca, où la crédibilité visuelle et la clarté de l'information comptent souvent plus que l'effet démonstratif.",
      "Je construis des sites sobres, rapides et rigoureux dans leur structure : pages de présentation claires, mentions légales et informations institutionnelles bien organisées, et une base technique qui tient la charge si le trafic vient de partenaires officiels ou d'appels d'offres.",
    ],
    districts: ["Agdal", "Hay Riad", "Technopolis", "Centre-ville"],
    neighborCities: [
      { name: "Casablanca", slug: "developpeur-web-freelance-casablanca" },
      { name: "Tanger", slug: "developpeur-web-freelance-tanger" },
    ],
    faqs: [
      {
        q: "Travaillez-vous à distance avec des clients à Rabat ?",
        a: "Oui, entièrement. Je suis basé à Casablanca, à moins d'une heure de route de Rabat, et je travaille avec mes clients rbatis principalement en télétravail — WhatsApp, visio et points d'étape réguliers. Une rencontre en personne reste possible si vous la préférez.",
      },
      {
        q: "Créez-vous des sites pour des institutions, cabinets ou associations ?",
        a: "Oui. Au-delà des sites vitrines classiques, je conçois des sites pour des cabinets de conseil, des associations et des structures institutionnelles avec un besoin de sobriété, de clarté et de conformité (mentions légales, accessibilité, structure de contenu rigoureuse).",
      },
      {
        q: "Pourquoi choisir un développeur freelance plutôt qu'une agence à Rabat ?",
        a: "Parce que vous parlez directement à la personne qui écrit le code, sans commercial ni chef de projet entre nous. Un devis clair sous 24h, un seul interlocuteur du début à la fin, et un prix qui reflète le travail réel plutôt qu'une structure d'agence.",
      },
    ],
    metaKeywords: [
      "développeur web freelance Rabat",
      "développeur freelance Rabat",
      "développeur web Rabat",
      "créer un site web Rabat",
      "développeur React Next.js Rabat",
    ],
  },
  {
    slug: "developpeur-web-freelance-marrakech",
    city: "Marrakech",
    region: "Marrakech-Safi",
    eyebrow: "Freelance à distance depuis Casablanca — clients à Marrakech",
    heroIntro:
      "Je m'appelle Mouhcine, développeur web freelance, et je travaille avec des entreprises basées à Marrakech en télétravail complet. Pas d'agence, pas de sous-traitance : je conçois et je code moi-même chaque site, du premier échange WhatsApp à la mise en ligne, en React et Next.js.",
    localContextTitle: "Un site pensé pour l'économie touristique de Marrakech",
    localContextBody: [
      "Marrakech vit au rythme du tourisme et de l'événementiel : riads, restaurants, activités, mariages, festivals. La grande majorité des visiteurs réservent en ligne avant même d'arriver, souvent depuis l'étranger — un site lent ou mal traduit se traduit directement par des réservations perdues.",
      "Je construis des sites rapides, visuellement soignés et multilingues (français, anglais, souvent espagnol), avec des systèmes de réservation ou de contact pensés pour convertir un visiteur qui compare plusieurs options en quelques minutes, avant même de poser une question.",
    ],
    districts: ["Guéliz", "Hivernage", "Palmeraie", "Médina"],
    neighborCities: [
      { name: "Agadir", slug: "developpeur-web-freelance-agadir" },
      { name: "Casablanca", slug: "developpeur-web-freelance-casablanca" },
    ],
    faqs: [
      {
        q: "Travaillez-vous à distance avec des clients à Marrakech ?",
        a: "Oui, entièrement. Je suis basé à Casablanca et j'ai déjà livré plusieurs projets pour des clients à Marrakech uniquement en télétravail — WhatsApp, visio et points d'étape réguliers. Palooza, un de mes clients marrakchis, témoigne de la simplicité de ce fonctionnement à distance.",
      },
      {
        q: "Pouvez-vous intégrer un système de réservation pour un riad, restaurant ou activité ?",
        a: "Oui, c'est une demande courante pour les entreprises touristiques à Marrakech. J'intègre des systèmes de réservation ou de demande de disponibilité adaptés à votre activité, connectés si besoin à WhatsApp Business pour un suivi rapide des demandes.",
      },
      {
        q: "Pourquoi choisir un développeur freelance plutôt qu'une agence à Marrakech ?",
        a: "Parce que vous parlez directement à la personne qui écrit le code, sans commercial ni chef de projet entre nous. Un devis clair sous 24h, un seul interlocuteur du début à la fin, et un prix qui reflète le travail réel plutôt qu'une structure d'agence.",
      },
    ],
    metaKeywords: [
      "développeur web freelance Marrakech",
      "développeur freelance Marrakech",
      "développeur web Marrakech",
      "créer un site web Marrakech",
      "développeur React Next.js Marrakech",
    ],
  },
  {
    slug: "developpeur-web-freelance-agadir",
    city: "Agadir",
    region: "Souss-Massa",
    eyebrow: "Freelance à distance depuis Casablanca — clients à Agadir",
    heroIntro:
      "Je m'appelle Mouhcine, développeur web freelance, et je travaille avec des entreprises basées à Agadir en télétravail complet. Pas d'agence, pas de sous-traitance : je conçois et je code moi-même chaque site, du premier échange WhatsApp à la mise en ligne, en React et Next.js.",
    localContextTitle: "Un site pensé pour Agadir : tourisme et export agricole",
    localContextBody: [
      "Agadir repose sur deux moteurs économiques bien distincts : le tourisme balnéaire et l'export agricole (tomates, agrumes, primeurs) vers l'Europe, l'un des piliers de la région Souss-Massa. Les besoins web ne sont pas les mêmes selon le secteur, et un site générique ne sert bien ni l'un ni l'autre.",
      "Pour une activité touristique, je construis des sites rapides et visuels avec réservation en ligne. Pour une entreprise d'export ou agroalimentaire, je privilégie un site professionnel clair, avec catalogue produit et informations pensées pour un acheteur B2B européen qui évalue un fournisseur potentiel.",
    ],
    districts: ["Founty", "Secteur Touristique", "Centre-ville", "Cité Suisse"],
    neighborCities: [
      { name: "Marrakech", slug: "developpeur-web-freelance-marrakech" },
      { name: "Casablanca", slug: "developpeur-web-freelance-casablanca" },
    ],
    faqs: [
      {
        q: "Travaillez-vous à distance avec des clients à Agadir ?",
        a: "Oui, entièrement. Je suis basé à Casablanca et je travaille avec mes clients agadiris uniquement en télétravail — WhatsApp, visio et points d'étape réguliers, sans que la distance ne ralentisse le projet.",
      },
      {
        q: "Créez-vous des sites pour des entreprises d'export ou agroalimentaires ?",
        a: "Oui. Pour ce type d'activité, je construis des sites orientés B2B : présentation claire de l'activité et des certifications, catalogue produit, et un formulaire de contact pensé pour un acheteur professionnel à l'étranger, pas pour un simple visiteur grand public.",
      },
      {
        q: "Pourquoi choisir un développeur freelance plutôt qu'une agence à Agadir ?",
        a: "Parce que vous parlez directement à la personne qui écrit le code, sans commercial ni chef de projet entre nous. Un devis clair sous 24h, un seul interlocuteur du début à la fin, et un prix qui reflète le travail réel plutôt qu'une structure d'agence.",
      },
    ],
    metaKeywords: [
      "développeur web freelance Agadir",
      "développeur freelance Agadir",
      "développeur web Agadir",
      "créer un site web Agadir",
      "développeur React Next.js Agadir",
    ],
  },
];

export function getCityPage(slug: string): CityData | undefined {
  return cityPages.find((c) => c.slug === slug);
}
