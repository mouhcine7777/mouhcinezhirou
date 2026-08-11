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
    slug: "seo-local-maroc-referencement-google-casablanca",
    title: "SEO local au Maroc : comment être visible sur Google en 2026",
    description:
      "Comment optimiser le référencement local de votre entreprise au Maroc : Google Business Profile, mots-clés locaux, avis clients. Guide pratique par un développeur web.",
    category: "SEO",
    date: "2026-08-11",
    readTime: "10 min",
    keywords: [
      "seo local maroc",
      "référencement local maroc",
      "seo casablanca",
      "référencement google maroc",
      "être visible sur google maroc",
    ],
    excerpt:
      "Un site magnifique que Google ne trouve pas ne rapporte rien. Les 5 piliers du référencement local au Maroc, expliqués sans jargon marketing.",
    content: [
      {
        type: "p",
        text: "Vous avez un hôtel, un restaurant, une agence de voyage ou une boutique en ligne au Maroc, et vos clients potentiels ne vous trouvent pas sur Google ? Ce n'est presque jamais un problème de « chance » ou de concurrence écrasante. C'est un problème de SEO local mal fait, ou pas fait du tout.",
      },
      {
        type: "p",
        text: "En construisant des sites pour des hôtels, riads et agences au Maroc, je vois le même schéma revenir : un site rapide, bien codé, mais invisible sur Google. Voici ce qui fait la différence entre un site que personne ne trouve et un site qui apparaît en première page à Casablanca, Marrakech ou ailleurs.",
      },
      { type: "h2", text: "Qu'est-ce que le SEO local, et pourquoi c'est différent au Maroc" },
      {
        type: "p",
        text: "Le SEO local, c'est l'ensemble des techniques qui permettent à votre entreprise d'apparaître quand quelqu'un cherche un service près de lui : « restaurant Casablanca centre-ville », « riad Marrakech médina », « agence web Maroc ». Au Maroc, ce jeu a ses propres règles.",
      },
      {
        type: "ul",
        items: [
          "La concurrence reste faible dans la plupart des secteurs et villes, hors Casablanca et Marrakech : un travail sérieux paie vite",
          "Le bilinguisme français/arabe (et souvent l'anglais pour le tourisme) change le ciblage des mots-clés : beaucoup d'entreprises ne ciblent qu'une langue et perdent la moitié du trafic potentiel",
          "Google Business Profile est largement sous-exploité par les PME marocaines, alors que c'est souvent le levier le plus rapide",
        ],
      },
      {
        type: "p",
        text: "Si votre site a des [performances lentes](/blog/site-web-lent-wordpress-vitesse-maroc), aucune stratégie de SEO local ne compensera : Google pénalise directement la lenteur dans son classement.",
      },
      { type: "h2", text: "Les 5 piliers du SEO local au Maroc" },
      { type: "h3", text: "1. Optimiser sa fiche Google Business Profile" },
      {
        type: "p",
        text: "C'est le levier n°1, et le plus négligé. Une fiche bien remplie peut, à elle seule, générer plus de visibilité qu'un site entier mal référencé.",
      },
      {
        type: "ul",
        items: [
          "Catégorie principale précise (pas « entreprise » mais « restaurant marocain », « riad », « agence de voyage »)",
          "Adresse exacte, zone de service si vous vous déplacez",
          "Photos réelles et récentes, mises à jour régulièrement",
          "Horaires toujours à jour, notamment pendant Ramadan et les jours fériés marocains",
          "Description avec vos mots-clés principaux, écrite naturellement",
        ],
      },
      { type: "h3", text: "2. Les avis clients : le facteur le plus sous-estimé" },
      {
        type: "p",
        text: "Google utilise le volume, la fréquence et la qualité des avis comme signal de confiance direct. Une entreprise avec 50 avis à 4,5 étoiles battra presque toujours un concurrent avec 5 avis, même si son site est mieux fait.",
      },
      {
        type: "quote",
        text: "Demandez systématiquement un avis après chaque prestation, et répondez à tous les avis, positifs et négatifs. Cette activité est elle-même un signal de référencement.",
      },
      { type: "h3", text: "3. Mots-clés locaux : penser comme vos clients cherchent" },
      {
        type: "p",
        text: "Un piège fréquent : cibler « hôtel de luxe » au lieu de « hôtel de luxe Marrakech médina » ou « riad avec piscine Marrakech pas cher ». Plus une requête est précise géographiquement, plus elle convertit, et plus elle est facile à ranker. Utilisez ces mots-clés naturellement dans vos titres de page, vos H1/H2, l'URL et le contenu, jamais en les répétant artificiellement.",
      },
      { type: "h3", text: "4. Contenu local et pages dédiées par ville ou secteur" },
      {
        type: "p",
        text: "Si vous servez plusieurs villes, une seule page générique « nos services » ne suffit pas. Google favorise les pages spécifiques à chaque zone géographique, avec du contenu réellement différent, pas du texte copié-collé avec juste le nom de ville changé. C'est le même principe qui structure notre [guide complet de création de site web au Maroc](/blog/guide-complet-creation-site-web-maroc-2026) : la structure du site doit refléter la structure réelle de votre activité, pas l'inverse.",
      },
      { type: "h3", text: "5. Les fondations techniques : vitesse, mobile, structure" },
      {
        type: "p",
        text: "Le meilleur contenu local du monde ne sert à rien si le site met plus de 3 secondes à charger, s'il n'est pas parfaitement responsive sur mobile (plus de 70% des recherches locales au Maroc se font sur smartphone), ou si la structure HTML n'a pas de balises propres. C'est un point que je vois systématiquement mal géré par les templates génériques, une des raisons pour lesquelles bien choisir entre un [développeur freelance ou une agence](/blog/developpeur-freelance-vs-agence-web-maroc) compte autant que le référencement lui-même.",
      },
      { type: "h2", text: "Combien de temps avant de voir des résultats ?" },
      {
        type: "p",
        text: "Le SEO local n'est pas instantané. Voici une timeline réaliste, basée sur des projets réels au Maroc :",
      },
      {
        type: "ul",
        items: [
          "Semaines 1-2 : optimisation Google Business Profile et corrections techniques du site, premiers effets sur les recherches très locales",
          "Mois 1-3 : montée progressive sur les mots-clés de niche, à faible concurrence",
          "Mois 3-6 : positions stables en première page sur les requêtes locales ciblées, si le rythme de contenu et d'avis est maintenu",
        ],
      },
      {
        type: "quote",
        text: "Toute agence qui promet la première position en une semaine vend du vent.",
      },
      { type: "h2", text: "Questions fréquentes" },
      { type: "h3", text: "Le SEO local coûte-t-il cher au Maroc ?" },
      {
        type: "p",
        text: "Non, c'est souvent le levier marketing le plus rentable pour une PME marocaine : Google Business Profile est gratuit, et l'essentiel du travail est de la structure et de la constance, pas du budget publicitaire. Le vrai coût, c'est le temps, ou un prestataire qui s'en occupe pour vous.",
      },
      { type: "h3", text: "Faut-il un site en français, en arabe, ou les deux ?" },
      {
        type: "p",
        text: "Idéalement les deux, avec des pages distinctes et correctement balisées, surtout si vous ciblez à la fois une clientèle locale et internationale (tourisme, hôtellerie). Un site uniquement en français perd une part significative des recherches locales en arabe.",
      },
      { type: "h3", text: "Google Business Profile suffit-il, ou ai-je besoin d'un site web ?" },
      {
        type: "p",
        text: "Les deux sont complémentaires, pas interchangeables. La fiche Google capte l'intention immédiate (« près de moi »), le site convertit et construit la confiance sur le long terme, en plus de vous rendre indépendant de la plateforme.",
      },
      { type: "h3", text: "Puis-je faire le SEO local moi-même ?" },
      {
        type: "p",
        text: "Oui, en grande partie : Google Business Profile et la collecte d'avis ne demandent pas de compétences techniques. En revanche, les fondations techniques du site (vitesse, structure, balisage) demandent souvent un développeur, ce qui est précisément le type de travail que je fais pour mes clients.",
      },
      { type: "h2", text: "En résumé" },
      {
        type: "p",
        text: "Le SEO local au Maroc n'est pas un mystère réservé aux grandes agences : c'est une combinaison de fiche Google bien tenue, d'avis clients réguliers, de mots-clés précis, de contenu local pertinent, et d'un site techniquement solide. La plupart des entreprises marocaines n'en font qu'un seul de ces cinq piliers. Celles qui font les cinq dominent leur marché local.",
      },
      {
        type: "p",
        text: "Vous voulez un avis honnête sur la visibilité locale de votre entreprise, ou repartir sur un site pensé dès le départ pour le référencement ? [Discutons de votre projet](/#contact), je vous montre concrètement où vous perdez des clients potentiels, et je peux vous montrer des [réalisations pour le secteur hôtelier et touristique](/#work).",
      },
    ],
  },
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
      {
        type: "p",
        text: "Un budget bien pensé inclut aussi le [SEO local](/blog/seo-local-maroc-referencement-google-casablanca) : un site cher mais invisible sur Google rapporte moins qu'un site plus modeste, correctement référencé.",
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
        text: "Plus de 70% du trafic web au Maroc passe par mobile. Un site pensé « desktop d'abord puis adapté » se sent toujours moins naturel qu'un site conçu mobile-first. Et la vitesse n'est pas un détail technique : c'est un critère de classement Google direct (Core Web Vitals) et le premier facteur qui fait fuir un visiteur avant même de lire votre contenu. Si vous voulez comprendre concrètement [pourquoi un site est lent et comment le corriger](/blog/site-web-lent-wordpress-vitesse-maroc), j'ai détaillé le sujet dans un article dédié.",
      },
      { type: "h2", text: "4. Construire pour le référencement, pas l'ajouter après coup" },
      {
        type: "p",
        text: "Le SEO ne se « rajoute » pas à la fin. Il se construit dans la structure : balises de titre uniques par page, une seule balise h1 par page, des données structurées (schema.org), un site rapide, un sitemap XML, et un contenu qui répond réellement aux questions que vos clients tapent sur Google. La structure technique n'est qu'une moitié du travail : l'autre moitié est le [SEO local](/blog/seo-local-maroc-referencement-google-casablanca), souvent décisif pour une entreprise qui cible une clientèle marocaine.",
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
  {
    slug: "site-web-lent-wordpress-vitesse-maroc",
    title: "Site web lent au Maroc : pourquoi, et comment le corriger",
    description:
      "Votre site est lent malgré un bon hébergement ? Les vraies causes (souvent WordPress) et les solutions concrètes pour un site rapide, bien classé sur Google.",
    category: "Performance",
    date: "2026-08-06",
    readTime: "8 min",
    keywords: [
      "site web lent maroc",
      "vitesse site web google",
      "core web vitals maroc",
      "react vs wordpress vitesse",
      "améliorer vitesse site wordpress",
    ],
    excerpt:
      "Un site lent perd des visiteurs avant même qu'ils ne lisent votre contenu, et Google le sait. Voici les vraies causes et comment les corriger.",
    content: [
      {
        type: "p",
        text: "« Mon site est lent, mais mon hébergement est pourtant bon » : c'est une phrase que j'entends souvent. Le problème est presque toujours ailleurs. Voici comment savoir si votre site est vraiment lent, pourquoi c'est le cas la plupart du temps, et ce qui règle le problème pour de bon.",
      },
      { type: "h2", text: "Comment savoir si votre site est vraiment lent" },
      {
        type: "p",
        text: "Google mesure la vitesse avec trois indicateurs concrets, les Core Web Vitals : le temps d'affichage du contenu principal (LCP), la stabilité visuelle pendant le chargement (CLS), et la réactivité au premier clic (INP). Ces chiffres sont publics et gratuits à consulter sur PageSpeed Insights, en entrant simplement l'adresse de votre site. Un score rouge ou orange sur mobile, c'est un signal direct que Google pénalise votre classement, pas juste un détail technique.",
      },
      { type: "h2", text: "Pourquoi WordPress est souvent le coupable" },
      {
        type: "p",
        text: "WordPress n'est pas lent par nature. Il le devient avec l'usage : un plugin ajouté pour chaque nouvelle fonctionnalité, un thème générique chargé de fonctionnalités inutilisées, des images jamais compressées, et un hébergement partagé bon marché qui sert des centaines d'autres sites en même temps. Après un an ou deux, un site WordPress traîne souvent 15 à 30 plugins actifs, chacun ajoutant son propre code JavaScript au chargement de la page.",
      },
      {
        type: "ul",
        items: [
          "Trop de plugins actifs, dont certains redondants ou oubliés",
          "Un thème générique lourd, avec des fonctionnalités jamais utilisées",
          "Des images en pleine résolution, jamais compressées ni redimensionnées",
          "Un hébergement partagé, sans cache configuré correctement",
          "Des mises à jour manquées qui accumulent des failles et du code dépassé",
        ],
      },
      { type: "h2", text: "Pourquoi React et Next.js partent avec un avantage structurel" },
      {
        type: "p",
        text: "Un site développé en React et Next.js n'a pas ce problème par construction. Les pages sont pré-générées ou rendues côté serveur, le code est automatiquement découpé pour ne charger que ce qui est nécessaire à chaque page, et l'optimisation des images est intégrée nativement plutôt qu'ajoutée après coup via un plugin. Ce n'est pas une question de talent du développeur : c'est l'architecture elle-même qui élimine la plupart des causes de lenteur avant qu'elles n'existent. C'est justement l'approche que j'utilise pour chaque [création de site web sur mesure au Maroc](/creation-site-web-maroc).",
      },
      {
        type: "quote",
        text: "Un visiteur qui attend plus de 3 secondes a déjà quitté la page avant de voir votre contenu. Et Google, qui mesure exactement ce délai, en tire les mêmes conclusions que lui.",
      },
      { type: "h2", text: "Les solutions concrètes selon votre situation" },
      {
        type: "p",
        text: "Si vous êtes sur WordPress et que le site doit rester en l'état, plusieurs actions ramènent un vrai gain : un plugin de cache correctement configuré, la compression de toutes les images existantes, la désactivation des plugins inutilisés, et un hébergement dédié plutôt que partagé. Ces actions réduisent la lenteur, mais ne l'éliminent pas complètement : l'architecture de base reste la même.",
      },
      {
        type: "p",
        text: "Si le site est ancien, refait tous les deux ou trois ans, ou critique pour votre activité (e-commerce, génération de leads), la [refonte en développement sur mesure](/creation-site-web-maroc) règle le problème à la racine plutôt que de le limiter. C'est aussi souvent moins coûteux sur la durée qu'une succession de correctifs. Le détail des prix est dans mon [guide des tarifs pour un site web au Maroc](/blog/combien-coute-un-site-web-au-maroc).",
      },
      { type: "h2", text: "La vitesse n'est pas qu'un détail technique" },
      {
        type: "p",
        text: "Un site rapide se classe mieux sur Google, retient plus longtemps les visiteurs, et convertit davantage sur mobile, qui représente la majorité du trafic au Maroc. Investir dans la vitesse dès la conception, plutôt que d'essayer de la rattraper après coup, reste la décision la plus rentable qu'on puisse prendre sur un projet web. Une fois cette base technique posée, c'est le [SEO local](/blog/seo-local-maroc-referencement-google-casablanca) qui détermine si vos clients vous trouvent réellement sur Google.",
      },
      {
        type: "p",
        text: "Vous voulez savoir si votre site actuel a un problème de vitesse, ou combien coûterait une refonte plus rapide ? Envoyez-moi le lien sur WhatsApp, je vous donne un avis honnête sous 24h.",
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
