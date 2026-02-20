export default function Home() {
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
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-24 px-6 py-16">
        <section id="hero" aria-labelledby="hero-title" className="space-y-4">
          <p className="text-sm uppercase tracking-[0.16em] text-slate-400">Frontend Engineer</p>
          <h1 id="hero-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I&apos;m Juan Manuel.
          </h1>
          <p className="max-w-2xl text-slate-300">
            Frontend Engineer focused on React and Next.js, currently building customer-facing
            experiences for FabFitFun.
          </p>
          <p className="max-w-2xl text-slate-400">
            I care about scalable architecture, experimentation, and developer experience.
          </p>
        </section>

        <section id="about" aria-labelledby="about-title" className="space-y-4">
          <h2 id="about-title" className="text-2xl font-semibold">
            About
          </h2>
          <p className="max-w-3xl text-slate-300">
            I have 5+ years of experience building web products for eCommerce, enterprise, and
            SaaS clients across LatAm and the US. My core stack is Next.js, React, TypeScript, and
            modern frontend architecture patterns.
          </p>
          <p className="max-w-3xl text-slate-300">
            In recent projects I&apos;ve worked with CMS-driven experiences using Sanity and
            observability workflows with Datadog to support production reliability.
          </p>
        </section>

        <section id="experience" aria-labelledby="experience-title" className="space-y-6">
          <h2 id="experience-title" className="text-2xl font-semibold">
            Experience
          </h2>
          <article className="space-y-2 rounded-lg border border-slate-800 p-5">
            <h3 className="text-lg font-semibold">Frontend Next.js Engineer · Distillery</h3>
            <p className="text-sm text-slate-400">Feb 2024 - Present · Client: FabFitFun</p>
            <ul className="list-disc space-y-1 pl-5 text-slate-300">
              <li>
                Build and ship new user-facing functionality in a modern Next.js + TypeScript
                storefront.
              </li>
              <li>
                Contribute to A/B testing initiatives and product experimentation workflows to
                validate customer-facing changes.
              </li>
              <li>
                Work on CMS-driven experiences using Sanity to keep content operations scalable and
                maintainable.
              </li>
              <li>
                Use Datadog monitoring workflows to improve observability and support faster issue
                investigation in production.
              </li>
              <li>
                Improve frontend maintainability and developer experience across shared code and
                component patterns.
              </li>
            </ul>
          </article>

          <article className="space-y-2 rounded-lg border border-slate-800 p-5">
            <h3 className="text-lg font-semibold">Frontend Next.js Developer · Distillery</h3>
            <p className="text-sm text-slate-400">
              Jul 2023 - Feb 2024 · Client: Bain &amp; Company - Natura Brasil
            </p>
            <ul className="list-disc space-y-1 pl-5 text-slate-300">
              <li>Helped shape a clean, reusable, and scalable frontend architecture.</li>
              <li>Built reusable components and core features with Next.js and TypeScript.</li>
              <li>Worked with React Query and Material UI in a multi-team delivery context.</li>
            </ul>
          </article>

          <article className="space-y-2 rounded-lg border border-slate-800 p-5">
            <h3 className="text-lg font-semibold">Full-stack Next.js Engineer · Distillery</h3>
            <p className="text-sm text-slate-400">Mar 2022 - Jul 2023</p>
            <ul className="list-disc space-y-1 pl-5 text-slate-300">
              <li>Developed pages, components, and API routes for an internal platform.</li>
              <li>Built a reusable WYSIWYG editor experience using Tiptap.</li>
              <li>Implemented CRUD operations with Next.js API routes, Prisma, and SQL.</li>
            </ul>
          </article>

          <article className="space-y-2 rounded-lg border border-slate-800 p-5">
            <h3 className="text-lg font-semibold">Frontend Developer · Globant</h3>
            <p className="text-sm text-slate-400">
              Aug 2021 - Mar 2022 · Client: Deloitte
            </p>
            <ul className="list-disc space-y-1 pl-5 text-slate-300">
              <li>Built frontend components and features for enterprise client requirements.</li>
              <li>Worked with React, Bootstrap, Chakra UI, and Stencil.js.</li>
            </ul>
          </article>

          <article className="space-y-2 rounded-lg border border-slate-800 p-5">
            <h3 className="text-lg font-semibold">Software Engineer · BITLOGIC.io</h3>
            <p className="text-sm text-slate-400">
              Feb 2021 - Aug 2021 · Client: Universidad Siglo 21
            </p>
            <ul className="list-disc space-y-1 pl-5 text-slate-300">
              <li>
                Contributed to components, pages, and feature development for a large educational
                platform.
              </li>
              <li>
                Worked with Angular, Node.js, Jest, E2E testing, and GitLab CI/CD in delivery
                pipelines.
              </li>
            </ul>
          </article>

          <article className="space-y-2 rounded-lg border border-slate-800 p-5">
            <h3 className="text-lg font-semibold">Frontend React Developer · KIRI</h3>
            <p className="text-sm text-slate-400">Jan 2020 - Feb 2021</p>
            <ul className="list-disc space-y-1 pl-5 text-slate-300">
              <li>Implemented features for a web-based admin panel product.</li>
              <li>
                Built map-based and workflow functionality, including Mapbox integrations and CRUD
                operations.
              </li>
              <li>Worked with React, Redux, Material UI, Tailwind, and Parse.js.</li>
            </ul>
          </article>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="space-y-4">
          <h2 id="contact-title" className="text-2xl font-semibold">
            Contact
          </h2>
          <p className="max-w-2xl text-slate-300">
            I&apos;m open to frontend and full-stack opportunities where I can contribute to
            product quality, architecture, and team velocity.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://www.linkedin.com/in/juan-manuel-albrecht-241634150/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-700 px-4 py-2 hover:border-slate-500"
            >
              LinkedIn
            </a>
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
