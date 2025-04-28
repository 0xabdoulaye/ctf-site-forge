---
title: "Reverse Engineering d'un malware ciblant les infrastructures critiques"
author: "mamadou"
date: "2024-03-22"
tags: ["Malware", "Reverse Engineering", "Critical Infrastructure"]
slug: "reverse-engineering-malware-critical-infrastructure"
thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
---

# Reverse Engineering d'un malware ciblant les infrastructures critiques

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
3. Segmentation renforcée des réseaux OT/IT