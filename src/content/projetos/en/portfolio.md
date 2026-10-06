---
title: Personal portfolio
summary: Static bilingual (PT/EN) site built with Astro and Tailwind, deployed on Azure Static Web Apps.
stack: [Astro, Tailwind CSS, TypeScript, Azure Static Web Apps]
order: 1
demo: /en/
repo: https://github.com/LuiszOtavio/portfolio
image: ../../../img/projetos/portfolio-home-en.png
imageAlt: Portfolio home page showing the name Luis Otávio Batista, the headline and the Download CV, Contact and GitHub buttons on a dark background
---

## Problem

Recruiters and tech leads read a portfolio differently. A recruiter needs to understand in 30 seconds who I am, what I do, which stack I use and how to hire me. A tech lead wants technical depth. The site also has to load fast on any phone and render a good preview when the link is pasted into LinkedIn or an email.

## Architecture

- **Fully static site:** every page is generated as HTML at build time, with no server.
- **Zero JavaScript by default:** the only script on the page toggles between the light and dark themes.
- **Two languages with their own routes:** `/` in Portuguese and `/en/` in English, using Astro's built-in routing.
- **Content separate from layout:** experience, skills and education live in TypeScript data files, and each project is a Markdown file validated by a schema.
