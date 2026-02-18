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
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-24 px-6 py-16">
        <section id="hero" aria-labelledby="hero-title" className="space-y-4">
          <p className="text-sm uppercase tracking-[0.16em] text-slate-400">Software Engineer</p>
          <h1 id="hero-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I&apos;m Juan Manuel.
          </h1>
          <p className="max-w-2xl text-slate-300">
            I build reliable and accessible products for the web.
          </p>
        </section>

        <section id="about" aria-labelledby="about-title" className="space-y-3">
          <h2 id="about-title" className="text-2xl font-semibold">
            About
          </h2>
          <p className="max-w-3xl text-slate-300">
            Short bio, how you got into development, and what kind of problems you like solving.
          </p>
        </section>

        <section id="experience" aria-labelledby="experience-title" className="space-y-3">
          <h2 id="experience-title" className="text-2xl font-semibold">
            Experience
          </h2>
          <p className="text-slate-300">Timeline or role cards go here.</p>
        </section>

        <section id="projects" aria-labelledby="projects-title" className="space-y-3">
          <h2 id="projects-title" className="text-2xl font-semibold">
            Projects
          </h2>
          <p className="text-slate-300">Featured projects and other noteworthy work.</p>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="space-y-3">
          <h2 id="contact-title" className="text-2xl font-semibold">
            Contact
          </h2>
          <p className="text-slate-300">Email, social links, and collaboration call-to-action.</p>
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
