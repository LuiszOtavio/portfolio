---
title: Personal portfolio
summary: Static bilingual (PT/EN) site built with Astro and Tailwind, with deployment planned on Azure Static Web Apps.
stack: [Astro, Tailwind CSS, TypeScript, Azure Static Web Apps]
order: 1
---

## Problem

Recruiters and tech leads read a portfolio differently. A recruiter needs to understand in 30 seconds who I am, what I do, which stack I use and how to hire me. A tech lead wants technical depth. The site also has to load fast on any phone and render a good preview when the link is pasted into LinkedIn or an email.

## Architecture

- **Fully static site:** every page is generated as HTML at build time, with no server.
- **Zero JavaScript by default:** the only script on the page toggles between the light and dark themes.
- **Two languages with their own routes:** `/` in Portuguese and `/en/` in English, using Astro's built-in routing.
- **Content separate from layout:** experience, skills and education live in TypeScript data files, and each project is a Markdown file validated by a schema.

## Decisions

- **Astro instead of React:** the site is mostly content. Astro ships ready-made HTML without sending the React library to the browser, which helps performance and SEO.
- **Tailwind CSS with custom color tokens:** colors live in CSS variables, and the light theme is just a second set of values.
- **Theme applied before first paint:** a tiny script in the `<head>` reads the saved preference, avoiding a flash of the wrong theme.

## What went wrong

- **Incompatible Node version:** the build failed on Node 20.11, which lacked an API used by Astro. On top of that, `npm audit` flagged critical vulnerabilities in the Astro version compatible with that Node. The fix was upgrading to Node 24 LTS and using the latest Astro release, with no known vulnerabilities.
- **Missing space in the HTML:** the Astro template dropped the line break between a piece of text and a highlighted element, gluing the words together. I fixed it by inserting the space explicitly.
