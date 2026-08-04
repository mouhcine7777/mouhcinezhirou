export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO
  readTime: string;
  keywords: string[];
  excerpt: string;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "combien-coute-un-site-web-au-maroc",
    title: "Combien coûte un site web au Maroc en 2026 ? Le guide des prix",
    description:
      "Prix réel d'un site vitrine, e-commerce ou application web au Maroc en 2026 : fourchettes de budget et ce qui fait varier le prix, par un développeur freelance à Casablanca.",
    category: "Prix & Budget",
    date: "2026-08-05",
    readTime: "7 min",
    keywords: [
      "prix site web maroc",
      "combien coûte un site web au maroc",
      "tarif création site web maroc",
      "devis site web maroc",
      "coût site e-commerce maroc",
    ],
    excerpt:
      "La question qu'on me pose le plus souvent sur WhatsApp. Voici des vraies fourchettes de prix, ce qui les justifie, et comment ne pas vous faire avoir.",
    content: [
      {
        type: "p",
        text: "« Combien ça coûte un site web ? » C'est la première question sur WhatsApp, presque à chaque fois. Et la réponse honnête est que ça dépend de ce que vous voulez construire. Mais « ça dépend » n'aide personne à faire un budget, donc voici des chiffres réels, basés sur des projets livrés au Maroc en 2025-2026.",
      },
      { type: "h2", text: "Les fourchettes de prix par type de projet" },
      {
        type: "ul",
        items: [
          "Site vitrine simple (5-8 pages, design sur mesure) : 4 000 à 9 000 MAD",
          "Site vitrine avancé (animations, multilingue, blog intégré) : 9 000 à 18 000 MAD",
          "Site e-commerce (catalogue, paiement, gestion des commandes) : 15 000 à 35 000 MAD",
          "Application web sur mesure (espace client, back-office, API) : à partir de 30 000 MAD, selon la complexité",
        ],
      },
      {
        type: "p",
        text: "Ces prix concernent un développeur freelance sérieux, pas un template WordPress modifié en une après-midi, et pas non plus un devis d'agence avec chef de projet, commercial et marge de structure. C'est la fourchette « travail sur mesure, un seul interlocuteur ».",
      },
      { type: "h2", text: "Ce qui fait vraiment varier le prix" },
      {
        type: "p",
        text: "Le nombre de pages compte moins que ce qu'on croit. Voici ce qui fait vraiment bouger un devis, dans l'ordre d'impact réel.",
      },
      {
        type: "ul",
        items: [
          "Le sur-mesure du design : un design unique coûte plus cher qu'un template adapté, mais se démarque et convertit mieux",
          "Les fonctionnalités dynamiques, comme la réservation, le paiement en ligne, l'espace membre ou la recherche filtrée",
          "L'intégration avec des outils tiers : CRM, ERP, WhatsApp Business API, systèmes de livraison",
          "Le contenu : textes et photos déjà prêts, ou à produire ensemble (rédaction, shooting)",
          "La maintenance après livraison : mises à jour, sauvegardes, évolutions",
        ],
      },
      { type: "h2", text: "Freelance ou agence : l'écart de prix expliqué" },
      {
        type: "p",
        text: "Pour un projet équivalent, une agence facture généralement 1,5 à 3 fois plus qu'un freelance expérimenté. Ce n'est pas que le travail de code soit différent. C'est que vous payez aussi le commercial qui a géré le premier rendez-vous, le chef de projet qui transmet vos retours au développeur, et la marge de structure de l'agence. Avec un freelance, vous parlez directement à la personne qui écrit le code, ce qui réduit les intermédiaires et généralement les délais.",
      },
      {
        type: "quote",
        text: "Le prix le plus bas n'est presque jamais le meilleur calcul. Un site à 2 000 MAD codé en template générique qui devra être refait dans un an coûte plus cher, au final, qu'un site sur mesure bien construit dès le départ.",
      },
      { type: "h2", text: "Comment obtenir un devis fiable" },
      {
        type: "p",
        text: "Un bon devis se construit en trois échanges, pas en un seul message. Vous décrivez votre activité et vos objectifs, on discute des fonctionnalités réellement nécessaires (pas toutes celles qu'on peut imaginer), et vous recevez une fourchette claire sous 24h, sans engagement. C'est exactement comme ça que je procède pour chaque projet.",
      },
      {
        type: "p",
        text: "Envie d'un chiffrage précis pour votre projet ? Discutons-en directement sur WhatsApp, la réponse arrive généralement en moins d'une heure.",
      },
    ],
  },
  {
    slug: "developpeur-freelance-vs-agence-web-maroc",
    title: "Développeur web freelance ou agence au Maroc : que choisir ?",
    description:
      "Freelance ou agence pour créer votre site web au Maroc ? Comparatif honnête sur le prix, les délais et la qualité, pour choisir selon votre projet.",
    category: "Conseils",
    date: "2026-08-05",
    readTime: "6 min",
    keywords: [
      "développeur freelance vs agence maroc",
      "freelance ou agence site web",
      "choisir développeur web maroc",
      "agence web maroc",
    ],
    excerpt:
      "Les deux options ont leur place. Voici comment savoir laquelle correspond réellement à votre projet, sans discours commercial.",
    content: [
      {
        type: "p",
        text: "Ce n'est pas un article pour vous convaincre que le freelance est toujours meilleur, ce serait malhonnête. Les agences ont leur utilité. Mais pour la majorité des projets de site vitrine, e-commerce ou application sur mesure au Maroc, le calcul penche clairement d'un côté. Voici pourquoi, et dans quels cas c'est l'inverse.",
      },
      { type: "h2", text: "Ce que vous gagnez avec un freelance" },
      {
        type: "ul",
        items: [
          "Un interlocuteur unique : vous parlez directement à la personne qui code, sans jeu de téléphone entre commercial, chef de projet et développeur",
          "Un prix plus juste, sans marge de structure, de bureaux ou de commerciaux à financer",
          "Des délais plus courts : une seule personne décide et exécute, sans validations internes multiples",
          "Une vraie flexibilité : un changement de dernière minute se discute directement, pas via un ticket",
        ],
      },
      { type: "h2", text: "Ce que vous gagnez avec une agence" },
      {
        type: "ul",
        items: [
          "Une équipe complète : designer, développeur, chef de projet, parfois SEO et copywriter réunis",
          "Une continuité en cas d'absence, sans dépendance à une seule personne",
          "Une capacité à gérer de très gros projets en parallèle sur plusieurs mois",
        ],
      },
      { type: "h2", text: "Le vrai critère de décision" },
      {
        type: "p",
        text: "La question n'est pas « qui est le meilleur » mais « qu'est-ce que mon projet exige ». Un site vitrine, un site e-commerce de taille standard ou une application web avec un périmètre défini, c'est exactement le terrain de jeu d'un bon freelance full stack. Un projet nécessitant simultanément une refonte de marque complète, une stratégie de contenu à grande échelle et un développement complexe sur plusieurs mois peut justifier une équipe pluridisciplinaire.",
      },
      {
        type: "quote",
        text: "90% des entreprises et indépendants qui me contactent n'ont pas besoin d'une agence. Ils ont besoin d'un site rapide, bien construit, et livré sans complications. C'est exactement ce périmètre qu'un freelance sérieux couvre le mieux.",
      },
      { type: "h2", text: "Comment vérifier qu'un freelance est fiable" },
      {
        type: "ul",
        items: [
          "Un portfolio de projets réels, pas des maquettes : demandez les liens en ligne",
          "Une présence claire (site, réseaux, avis), pas juste un profil sur une marketplace",
          "Une réponse claire sur les délais et le suivi après livraison, pas seulement sur le prix",
          "Un devis détaillé, pas un chiffre lâché sans explication",
        ],
      },
      {
        type: "p",
        text: "Vous hésitez encore entre freelance et agence pour votre projet ? Décrivez-le moi sur WhatsApp, je vous dirai honnêtement si c'est un projet que je peux couvrir, ou s'il vaut mieux passer par une structure plus large.",
      },
    ],
  },
  {
    slug: "guide-complet-creation-site-web-maroc-2026",
    title: "Créer un site web au Maroc en 2026 : le guide complet",
    description:
      "Toutes les étapes pour créer un site web professionnel au Maroc en 2026 : objectifs, technologie, budget et référencement Google.",
    category: "Guide",
    date: "2026-08-05",
    readTime: "9 min",
    keywords: [
      "créer un site web maroc",
      "guide création site web maroc 2026",
      "faire un site web maroc",
      "site internet maroc",
    ],
    excerpt:
      "De l'idée au site en ligne : toutes les étapes, dans l'ordre, pour lancer un site web professionnel au Maroc sans perdre de temps ni d'argent.",
    content: [
      {
        type: "p",
        text: "Créer un site web au Maroc en 2026 n'a plus rien à voir avec il y a cinq ans. Les attentes des visiteurs ont changé (vitesse, mobile, clarté), et Google est beaucoup plus exigeant sur la qualité technique. Voici le processus complet, dans l'ordre, tel que je le mène avec chaque client.",
      },
      { type: "h2", text: "1. Clarifier l'objectif avant le design" },
      {
        type: "p",
        text: "La première erreur, de loin, est de commencer par « je veux un site qui ressemble à... ». Le bon point de départ est simple : qu'est-ce que ce site doit faire pour votre activité ? Générer des leads, vendre en ligne, présenter un portfolio, centraliser une prise de rendez-vous ? Chaque objectif implique une structure et des priorités techniques différentes.",
      },
      { type: "h2", text: "2. Choisir la bonne technologie" },
      {
        type: "p",
        text: "WordPress, Shopify, ou du développement sur mesure en React et Next.js : chaque option a sa place, et le mauvais choix se paie cher plus tard.",
      },
      {
        type: "ul",
        items: [
          "WordPress : rapide à lancer, énorme écosystème de plugins, mais souvent lent et vulnérable si mal configuré",
          "Shopify : excellent pour l'e-commerce standard, moins flexible pour du sur-mesure poussé",
          "Sur-mesure (React, Next.js) : performance maximale, contrôle total, référencement optimisé dès la structure du code. Recommandé dès que le site doit se démarquer ou évoluer dans le temps",
        ],
      },
      { type: "h2", text: "3. Penser mobile et vitesse dès le départ" },
      {
        type: "p",
        text: "Plus de 70% du trafic web au Maroc passe par mobile. Un site pensé « desktop d'abord puis adapté » se sent toujours moins naturel qu'un site conçu mobile-first. Et la vitesse n'est pas un détail technique : c'est un critère de classement Google direct (Core Web Vitals) et le premier facteur qui fait fuir un visiteur avant même de lire votre contenu.",
      },
      { type: "h2", text: "4. Construire pour le référencement, pas l'ajouter après coup" },
      {
        type: "p",
        text: "Le SEO ne se « rajoute » pas à la fin. Il se construit dans la structure : balises de titre uniques par page, une seule balise h1 par page, des données structurées (schema.org), un site rapide, un sitemap XML, et un contenu qui répond réellement aux questions que vos clients tapent sur Google.",
      },
      {
        type: "quote",
        text: "Un site magnifique que Google ne trouve pas ne rapporte rien. La technique et le design doivent avancer ensemble, pas l'un après l'autre.",
      },
      { type: "h2", text: "5. Lancer, puis mesurer et faire évoluer" },
      {
        type: "p",
        text: "La mise en ligne n'est pas la fin du projet. Google Search Console et Google Analytics permettent de voir concrètement ce qui fonctionne : quelles pages attirent du trafic, où les visiteurs abandonnent, quels mots-clés génèrent des contacts. Un site vivant, ajusté sur des données réelles, performe toujours mieux qu'un site figé.",
      },
      { type: "h2", text: "Combien de temps ça prend ?" },
      {
        type: "p",
        text: "Pour un site vitrine sur mesure, comptez 2 à 4 semaines. Pour un e-commerce complet, 4 à 8 semaines. Pour une application web sur mesure, selon le périmètre, généralement 6 à 12 semaines. Ces délais supposent un contenu (textes, visuels) prêt ou produit en parallèle du développement.",
      },
      {
        type: "p",
        text: "Prêt à lancer votre projet ? Discutons de vos objectifs sur WhatsApp pour un devis clair et gratuit sous 24h.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

// Drop a matching file at public/blog/<slug>.jpg (1200x630) to give a post
// its own cover image. Everything else picks it up automatically.
export function blogImagePath(slug: string): string {
  return `/blog/${slug}.jpg`;
}
