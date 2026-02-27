'use client';

import type { ReactNode } from 'react';

import { Reveal } from './components/Reveal';
import { useStaggerReveal } from './hooks/useStaggerReveal';

type Experience = {
  title: string;
  subtitle: string;
  bullets: string[];
};

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const heroLines: ReactNode[] = [
  <p key="role" className="text-sm uppercase tracking-[0.16em] text-slate-400">
    Frontend Engineer
  </p>,
  <h1 key="title" id="hero-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
    Hi, I&apos;m Juan Manuel.
  </h1>,
  <p key="main" className="max-w-2xl text-slate-300">
    Frontend Engineer focused on React and Next.js, currently building customer-facing experiences
    for FabFitFun.
  </p>,
  <p key="sub" className="max-w-2xl text-slate-400">
    I care about scalable architecture, experimentation, and developer experience.
  </p>,
];

const aboutParagraphs = [
  'I have 5+ years of experience building web products for eCommerce, enterprise, and SaaS clients across LatAm and the US. My core stack is Next.js, React, TypeScript, and modern frontend architecture patterns.',
  "In recent projects I've worked with CMS-driven experiences using Sanity and observability workflows with Datadog to support production reliability.",
];

const experiences: Experience[] = [
  {
    title: 'Frontend Next.js Engineer · Distillery',
    subtitle: 'Feb 2024 - Present · Client: FabFitFun',
    bullets: [
      'Build and ship new user-facing functionality in a modern Next.js + TypeScript storefront.',
      'Contribute to A/B testing initiatives and product experimentation workflows to validate customer-facing changes.',
      'Work on CMS-driven experiences using Sanity to keep content operations scalable and maintainable.',
      'Use Datadog monitoring workflows to improve observability and support faster issue investigation in production.',
      'Improve frontend maintainability and developer experience across shared code and component patterns.',
    ],
  },
  {
    title: 'Frontend Next.js Developer · Distillery',
    subtitle: 'Jul 2023 - Feb 2024 · Client: Bain & Company - Natura Brasil',
    bullets: [
      'Helped shape a clean, reusable, and scalable frontend architecture.',
      'Built reusable components and core features with Next.js and TypeScript.',
      'Worked with React Query and Material UI in a multi-team delivery context.',
    ],
  },
  {
    title: 'Full-stack Next.js Engineer · Distillery',
    subtitle: 'Mar 2022 - Jul 2023',
    bullets: [
      'Developed pages, components, and API routes for an internal platform.',
      'Built a reusable WYSIWYG editor experience using Tiptap.',
      'Implemented CRUD operations with Next.js API routes, Prisma, and SQL.',
    ],
  },
  {
    title: 'Frontend Developer · Globant',
    subtitle: 'Aug 2021 - Mar 2022 · Client: Deloitte',
    bullets: [
      'Built frontend components and features for enterprise client requirements.',
      'Worked with React, Bootstrap, Chakra UI, and Stencil.js.',
    ],
  },
  {
    title: 'Software Engineer · BITLOGIC.io',
    subtitle: 'Feb 2021 - Aug 2021 · Client: Universidad Siglo 21',
    bullets: [
      'Contributed to components, pages, and feature development for a large educational platform.',
      'Worked with Angular, Node.js, Jest, E2E testing, and GitLab CI/CD in delivery pipelines.',
    ],
  },
  {
    title: 'Frontend React Developer · KIRI',
    subtitle: 'Jan 2020 - Feb 2021',
    bullets: [
      'Implemented features for a web-based admin panel product.',
      'Built map-based and workflow functionality, including Mapbox integrations and CRUD operations.',
      'Worked with React, Redux, Material UI, Tailwind, and Parse.js.',
    ],
  },
];

export default function Home() {
  const { getRevealProps } = useStaggerReveal({ mountDelay: 100 });
  const experienceDelayStart = 1100;
  const experienceDelayStep = 80;
  const contactDelayBase = experienceDelayStart + experiences.length * experienceDelayStep + 100;

  return (
    <>
      <header className="border-b border-slate-800">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6"
        >
          <a href="#hero" className="text-sm font-semibold tracking-wide">
            pulgadev
          </a>
          <ul className="flex items-center gap-4 text-sm">
            {navItems.map((item, index) => (
              <Reveal
                key={item.href}
                as="li"
                delay={100 + index * 90}
                getRevealProps={getRevealProps}
              >
                <a href={item.href}>{item.label}</a>
              </Reveal>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-24 px-6 py-16">
        <section id="hero" aria-labelledby="hero-title" className="space-y-4">
          {heroLines.map((line, index) => (
            <Reveal key={index} delay={420 + index * 110} getRevealProps={getRevealProps}>
              {line}
            </Reveal>
          ))}
        </section>

        <section id="about" aria-labelledby="about-title" className="space-y-4">
          <Reveal
            as="h2"
            id="about-title"
            className="text-2xl font-semibold"
            delay={780}
            getRevealProps={getRevealProps}
          >
            About
          </Reveal>

          {aboutParagraphs.map((text, index) => (
            <Reveal
              key={index}
              as="p"
              className="max-w-3xl text-slate-300"
              delay={860 + index * 80}
              getRevealProps={getRevealProps}
            >
              {text}
            </Reveal>
          ))}
        </section>

        <section id="experience" aria-labelledby="experience-title" className="space-y-6">
          <Reveal
            as="h2"
            id="experience-title"
            className="text-2xl font-semibold"
            delay={1020}
            getRevealProps={getRevealProps}
          >
            Experience
          </Reveal>

          {experiences.map((experience, index) => (
            <Reveal
              key={experience.title}
              as="article"
              className="space-y-2 rounded-lg border border-slate-800 p-5"
              delay={experienceDelayStart + index * experienceDelayStep}
              getRevealProps={getRevealProps}
            >
              <h3 className="text-lg font-semibold">{experience.title}</h3>
              <p className="text-sm text-slate-400">{experience.subtitle}</p>
              <ul className="list-disc space-y-1 pl-5 text-slate-300">
                {experience.bullets.map(bullet => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </section>

        <section id="contact" aria-labelledby="contact-title" className="space-y-4">
          <Reveal
            as="h2"
            id="contact-title"
            className="text-2xl font-semibold"
            delay={contactDelayBase}
            getRevealProps={getRevealProps}
          >
            Contact
          </Reveal>

          <Reveal
            as="p"
            className="max-w-2xl text-slate-300"
            delay={contactDelayBase + 80}
            getRevealProps={getRevealProps}
          >
            I&apos;m open to frontend and full-stack opportunities where I can contribute to
            product quality, architecture, and team velocity.
          </Reveal>

          <div className="flex items-center gap-4 text-sm">
            <Reveal
              as="a"
              href="https://www.linkedin.com/in/juan-manuel-albrecht-241634150/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-700 px-4 py-2 hover:border-slate-500"
              delay={contactDelayBase + 160}
              getRevealProps={getRevealProps}
            >
              LinkedIn
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800">
        <div className="mx-auto w-full max-w-5xl px-6 py-6 text-sm text-slate-400">
          Built by pulgadev.
        </div>
      </footer>
    </>
  );
}
