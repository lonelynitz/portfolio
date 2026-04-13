# Implementation Plan: Personal Portfolio

## Overview

Build a static single-page React + Vite + Tailwind CSS portfolio for Vasanth Murugesan. All content comes from `src/data/resume.js`. No backend, no routing library, no external API calls.

## Tasks

- [x] 1. Scaffold project and configure tooling
  - Run `npm create vite@latest . -- --template react` and install dependencies
  - Install and configure Tailwind CSS (`tailwindcss`, `postcss`, `autoprefixer`)
  - Install testing dependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `fast-check`
  - Add `test` script to `package.json` pointing to `vitest --run`
  - Configure `vite.config.js` with `test: { environment: 'jsdom', globals: true, setupFiles: './src/setupTests.js' }`
  - Create `src/setupTests.js` importing `@testing-library/jest-dom`
  - Replace default `index.css` with Tailwind directives (`@tailwind base/components/utilities`)
  - _Requirements: 9.1, 9.2_

- [x] 2. Create resume data file
  - Create `src/data/resume.js` with all exported constants: `personal`, `about`, `skills`, `experience`, `projects` exactly as defined in the design data models
  - _Requirements: 1.2, 1.3, 1.4, 2.2, 2.3, 2.4, 2.5, 3.3, 3.4, 3.5, 4.3, 4.4, 4.5, 5.5, 5.6, 6.2, 6.3, 6.4_

- [x] 3. Implement primitive components
  - [x] 3.1 Implement `SkillBadge` component
    - Create `src/components/SkillBadge.jsx` accepting `label` prop
    - Render a styled pill using Tailwind utility classes
    - _Requirements: 3.2_

  - [ ]* 3.2 Write property test for SkillBadge rendering
    - **Property 1: All skills in every category are rendered as badges**
    - **Validates: Requirements 3.3, 3.4, 3.5**
    - Generate random skill strings; render `SkillBadge`; assert label text is present in output

  - [x] 3.3 Implement `ExperienceCard` component
    - Create `src/components/ExperienceCard.jsx` accepting `title`, `company`, `location`, `dateRange`, `bullets` props
    - Render all fields with a `<ul>` for bullets
    - _Requirements: 4.4_

  - [ ]* 3.4 Write property test for ExperienceCard
    - **Property 2: Experience cards render all required fields**
    - **Validates: Requirements 4.4**
    - Generate random experience objects; render `ExperienceCard`; assert all fields appear in output

  - [x] 3.5 Implement `ProjectCard` component
    - Create `src/components/ProjectCard.jsx` accepting `name`, `description`, `technologies`, `liveUrl?`, `repoUrl?` props
    - Render name, description, tech badges (reuse `SkillBadge`), and conditional external links with `target="_blank"`
    - _Requirements: 5.3, 5.4_

  - [ ]* 3.6 Write property tests for ProjectCard
    - **Property 4: Project cards render all required fields**
    - **Validates: Requirements 5.3**
    - **Property 5: Project cards show external links in new tab when URL is present**
    - **Validates: Requirements 5.4**
    - Generate random project objects with/without URLs; assert fields and anchor attributes

- [x] 4. Implement section components
  - [x] 4.1 Implement `Hero` section
    - Create `src/components/Hero.jsx` using `personal` data
    - Render name heading, title subtitle, tagline, "Contact Me" button (`href="#contact"`), LinkedIn button (`target="_blank"`)
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

  - [ ]* 4.2 Write unit tests for Hero
    - Assert name, title, tagline render; LinkedIn button has `target="_blank"`; CTA targets `#contact`
    - _Requirements: 1.2, 1.3, 1.4, 1.5, 1.6_

  - [x] 4.3 Implement `About` section
    - Create `src/components/About.jsx` using `about` data
    - Render summary paragraph, education credential, certifications list
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

  - [ ]* 4.4 Write unit tests for About
    - Assert summary text, education credential, and both certifications are present
    - _Requirements: 2.2, 2.4, 2.5_

  - [x] 4.5 Implement `Skills` section
    - Create `src/components/Skills.jsx` using `skills` data
    - Render three category groups, each mapping its array to `SkillBadge` components with `flex-wrap`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

  - [ ]* 4.6 Write unit tests for Skills
    - Assert three category headings are present
    - _Requirements: 3.2_

  - [x] 4.7 Implement `Experience` section
    - Create `src/components/Experience.jsx` using `experience` data
    - Map entries to `ExperienceCard` components in the order defined in `resume.js` (reverse chronological)
    - _Requirements: 4.1, 4.2, 4.3_

  - [ ]* 4.8 Write property test for experience ordering
    - **Property 3: Experience entries are in reverse chronological order**
    - **Validates: Requirements 4.2**
    - Assert each consecutive pair in the rendered list has a more-recent start date first

  - [ ]* 4.9 Write unit tests for Experience
    - Assert all three company names are present; FR8 Web Developer card contains "75%"
    - _Requirements: 4.3, 4.5_

  - [x] 4.10 Implement `Projects` section
    - Create `src/components/Projects.jsx` using `projects` data
    - Render a grid of `ProjectCard` components
    - _Requirements: 5.1, 5.2_

  - [ ]* 4.11 Write unit tests for Projects
    - Assert at least two cards render; ERP and Grow App names are present
    - _Requirements: 5.2, 5.5, 5.6_

- [x] 5. Implement Contact section with form validation
  - [x] 5.1 Implement `ContactForm` sub-component
    - Create form with `name`, `email`, `message` fields and local state for values, errors, and `submitted`
    - On submit: validate non-empty fields and email format; set inline errors or set `submitted = true` and show confirmation
    - Error messages: "Name is required", "Email is required", "Please enter a valid email address", "Message is required"
    - _Requirements: 6.5, 6.6, 6.7, 6.8_

  - [ ]* 5.2 Write property tests for ContactForm validation
    - **Property 6: Contact form rejects submission with any empty required field**
    - **Validates: Requirements 6.7**
    - **Property 7: Contact form rejects invalid email formats**
    - **Validates: Requirements 6.8**
    - Generate empty/whitespace combos and invalid email strings; simulate submit; assert errors shown and no confirmation

  - [ ]* 5.3 Write unit tests for ContactForm
    - Assert confirmation message shown after valid submission
    - Assert inline errors shown for empty fields and invalid email
    - _Requirements: 6.6, 6.7, 6.8_

  - [x] 5.4 Implement `Contact` section wrapper
    - Create `src/components/Contact.jsx` displaying email, phone, LinkedIn link (`target="_blank"`), and `ContactForm`
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [ ]* 5.5 Write unit tests for Contact section
    - Assert email, phone, and LinkedIn link with `target="_blank"` are present
    - _Requirements: 6.2, 6.3, 6.4_

- [x] 6. Checkpoint — Ensure all tests pass
  - Run `npx vitest --run` and confirm all tests pass; ask the user if questions arise.

- [x] 7. Implement Navbar with hamburger menu
  - [x] 7.1 Implement `Navbar` component
    - Create `src/components/Navbar.jsx` with `position: fixed` / `fixed top-0` Tailwind class
    - Render anchor links for all six sections; use `scroll-behavior: smooth` via `index.css` on `html`
    - Add hamburger button visible only on mobile (`md:hidden`); toggle `menuOpen` state to show/hide mobile link list
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

  - [ ]* 7.2 Write property test for Navbar links
    - **Property 8: Navigation bar contains a link for every section**
    - **Validates: Requirements 7.2**
    - Given the fixed sections list, render `Navbar`; assert each section id has a corresponding anchor href

  - [ ]* 7.3 Write unit tests for Navbar
    - Assert hamburger button click shows all nav links
    - _Requirements: 7.5, 7.6_

- [x] 8. Wire everything together in App
  - Update `src/App.jsx` to render `<Navbar>` and a `<main>` containing all sections in order: Hero → About → Skills → Experience → Projects → Contact
  - Wrap sections in semantic elements: `<header>` for Hero, `<section>` for each content section, `<footer>` for Contact
  - Add `id` attributes to each section matching navbar anchor hrefs
  - _Requirements: 7.3, 8.3, 8.4_

  - [ ]* 8.1 Write unit tests for App structure
    - Assert semantic elements `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` are present
    - Assert section DOM order: Hero → About → Skills → Experience → Projects → Contact
    - _Requirements: 8.4_

- [x] 9. Final checkpoint — Ensure all tests pass
  - Run `npx vitest --run` and confirm all tests pass; ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- All content must come strictly from `src/data/resume.js` — no invented data
- The contact form is client-side only; no email is sent in the local-first build
- LinkedIn URL in `resume.js` is a placeholder — update before deployment
- Run the dev server manually: `npm run dev`
- Run tests manually: `npx vitest --run`
