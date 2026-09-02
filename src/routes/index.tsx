import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "../components/site-nav";
import { Reveal } from "../components/reveal";
import { HeroDrawing, ProjectDrawing } from "../components/technical-drawings";
import { expertise, experience, projects, skillGroups } from "../data/portfolio";

const TITLE = "Yonsi — Engineering, Drafter & Full-Stack Developer";
const DESCRIPTION =
  "Portfolio of Yonsi, an engineering drafter and site supervisor with experience in civil construction, structural drafting, piping, quantity surveying, project supervision, and digital development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "engineering drafter Indonesia, civil engineering drafter, structural drafter, piping drafter, quantity surveyor, site supervisor, AutoCAD drafter, Revit Structure, Tekla Structures, engineering portfolio, construction portfolio, full-stack developer Indonesia",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Yonsi",
          jobTitle: "Engineering Drafter, Site Supervisor, Quantity Surveyor",
          email: "mailto:jabirelsabah@gmail.com",
          telephone: "+62-858-8344-4796",
          address: { "@type": "PostalAddress", addressRegion: "Banten", addressCountry: "ID" },
          knowsAbout: [
            "Technical drawing",
            "Structural drafting",
            "Piping engineering",
            "Quantity surveying",
            "Site supervision",
            "Full-stack web development",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function SectionHead({ no, label, title }: { no: string; label: string; title: string }) {
  return (
    <div className="grid grid-cols-4 gap-x-5 border-t border-foreground pt-4 md:grid-cols-8 lg:grid-cols-12">
      <p className="label col-span-4 text-accent md:col-span-2 lg:col-span-3">
        {no} / {label}
      </p>
      <Reveal
        as="h2"
        className="col-span-4 mt-6 text-3xl leading-[0.95] font-bold tracking-tight uppercase md:col-span-6 md:mt-0 md:text-4xl lg:col-span-9 lg:text-6xl"
      >
        {title}
      </Reveal>
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <a
        href="#about"
        className="label sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      <SiteNav />

      <main className="mx-auto max-w-[1600px] px-5 md:px-10">
        {/* HERO */}
        <section className="grid grid-cols-4 gap-x-5 gap-y-10 py-14 md:grid-cols-8 lg:grid-cols-12 lg:py-24">
          <div className="col-span-4 md:col-span-8 lg:col-span-7">
            <Reveal as="p" className="label text-muted-foreground">
              Engineering / Drafting / Construction / Digital
            </Reveal>
            <Reveal
              as="h1"
              delay={80}
              className="mt-8 text-[3.25rem] leading-[0.86] font-bold tracking-[-0.03em] uppercase sm:text-[5rem] lg:text-[7rem] xl:text-[8.5rem]"
            >
              I build
              <br />
              with
              <br />
              <span className="text-accent">precision.</span>
            </Reveal>
            <Reveal
              as="p"
              delay={160}
              className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg"
            >
              Engineering experience translated into drawings, structures, construction execution,
              and digital solutions.
            </Reveal>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="label inline-flex min-h-11 items-center bg-foreground px-6 text-background transition-colors hover:bg-accent"
              >
                View selected work →
              </a>
              <a
                href="#contact"
                className="label inline-flex min-h-11 items-center border border-foreground px-6 transition-colors hover:text-accent"
              >
                Contact me
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-x-5 gap-y-6 border-t border-foreground pt-5">
              <div>
                <dt className="label text-muted-foreground">Based in</dt>
                <dd className="label mt-2">Indonesia</dd>
              </div>
              <div>
                <dt className="label text-muted-foreground">Discipline</dt>
                <dd className="label mt-2">Engineering / Drafting / Supervision / Development</dd>
              </div>
            </dl>
          </div>

          <div className="col-span-4 md:col-span-8 lg:col-span-5">
            <Reveal delay={120} className="border border-foreground p-4">
              <HeroDrawing className="h-auto w-full text-foreground" />
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24 py-16 lg:py-28">
          <SectionHead
            no="01"
            label="About"
            title="A multidisciplinary engineering practitioner."
          />
          <div className="mt-12 grid grid-cols-4 gap-x-5 gap-y-10 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 space-y-6 text-base leading-relaxed md:col-span-5 lg:col-span-7 lg:col-start-4 lg:text-lg">
              <p>
                Yonsi is an engineering drafter and civil supervisor with hands-on field experience
                across civil construction, structural works, technical drawing, quantity surveying,
                and site supervision.
              </p>
              <p>
                His work covers dam and irrigation works, drainage, road works, land preparation,
                cut &amp; fill, piping documentation, and day-to-day engineering coordination
                between design, contractors, and site execution.
              </p>
              <p>
                Alongside this practice he is developing skills in full-stack web development,
                combining engineering documentation habits with digital tools. He works as a
                practitioner with broad multidisciplinary experience and a continuous learning
                mindset, rather than as a specialist in a single discipline.
              </p>
            </div>
            <div className="col-span-4 md:col-span-3 lg:col-span-2">
              <p className="label border-t border-foreground pt-4 text-muted-foreground">
                Education
              </p>
              <p className="mt-4 text-sm leading-relaxed">
                Senior High School
                <br />
                SMA Negeri Cilegon
              </p>
              <p className="label mt-2 text-muted-foreground">1994 — 1995</p>
              <p className="label mt-8 border-t border-foreground pt-4 text-muted-foreground">
                Location
              </p>
              <p className="mt-4 text-sm">Banten, Indonesia</p>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="scroll-mt-24 py-16 lg:py-28">
          <SectionHead no="02" label="Expertise" title="Core expertise." />
          <ul className="mt-12">
            {expertise.map((item, i) => (
              <Reveal
                as="li"
                key={item.no}
                delay={i * 40}
                className="grid grid-cols-4 items-baseline gap-x-5 gap-y-2 border-t border-border py-7 md:grid-cols-8 lg:grid-cols-12"
              >
                <span className="label col-span-4 text-accent md:col-span-1 lg:col-span-1">
                  {item.no}
                </span>
                <h3 className="col-span-4 text-xl font-bold tracking-tight uppercase md:col-span-3 lg:col-span-4 lg:text-2xl">
                  {item.title}
                </h3>
                <p className="col-span-4 text-sm leading-relaxed text-muted-foreground md:col-span-4 lg:col-span-6 lg:col-start-7 lg:text-base">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-24 py-16 lg:py-28">
          <SectionHead no="03" label="Experience" title="Professional experience." />
          <ol className="mt-12">
            {experience.map((job, i) => (
              <Reveal
                as="li"
                key={`${job.company}-${job.period}`}
                delay={i * 30}
                className="grid grid-cols-4 gap-x-5 gap-y-3 border-t border-border py-8 md:grid-cols-8 lg:grid-cols-12"
              >
                <p className="label col-span-4 text-muted-foreground md:col-span-2 lg:col-span-3">
                  {job.period}
                </p>
                <div className="col-span-4 md:col-span-6 lg:col-span-9">
                  <h3 className="text-xl font-bold tracking-tight uppercase lg:text-2xl">
                    {job.company}
                  </h3>
                  <p className="label mt-2 text-accent">{job.role}</p>
                  {job.summary && (
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:text-base">
                      {job.summary}
                    </p>
                  )}
                  {job.points && (
                    <ul className="mt-4 max-w-2xl space-y-2">
                      {job.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground lg:text-base"
                        >
                          <span className="mt-2 block h-px w-4 shrink-0 bg-accent" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 py-16 lg:py-28">
          <SectionHead no="04" label="Selected work" title="Selected work." />
          <p className="label mt-6 text-muted-foreground">
            Drawings below are abstract technical illustrations, not actual project documentation.
          </p>
          <div className="mt-12 grid grid-cols-4 gap-x-5 gap-y-14 md:grid-cols-8 lg:grid-cols-12">
            {projects.map((p, i) => (
              <Reveal
                key={p.no}
                delay={(i % 2) * 60}
                className="group col-span-4 md:col-span-4 lg:col-span-6"
              >
                <div className="border border-foreground bg-card p-4 text-foreground transition-colors group-hover:border-accent">
                  <ProjectDrawing variant={p.drawing} />
                </div>
                <div className="mt-5 flex items-baseline justify-between border-t border-foreground pt-4">
                  <span className="label text-accent">Project {p.no}</span>
                  <span className="label text-muted-foreground">{p.year}</span>
                </div>
                <h3 className="mt-3 text-2xl font-bold tracking-tight uppercase lg:text-3xl">
                  {p.title}
                </h3>
                <p className="label mt-2 text-muted-foreground">{p.category}</p>
                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex gap-4 border-t border-border pt-3">
                    <dt className="label w-24 shrink-0 text-muted-foreground">Role</dt>
                    <dd>{p.role}</dd>
                  </div>
                  <div className="flex gap-4 border-t border-border pt-3">
                    <dt className="label w-24 shrink-0 text-muted-foreground">Scope</dt>
                    <dd className="text-muted-foreground">{p.scope}</dd>
                  </div>
                  <div className="flex gap-4 border-t border-border pt-3">
                    <dt className="label w-24 shrink-0 text-muted-foreground">Tools</dt>
                    <dd className="label">{p.tools}</dd>
                  </div>
                </dl>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ENGINEERING + DIGITAL */}
        <section className="py-16 lg:py-28">
          <div className="border-t border-foreground pt-10">
            <Reveal
              as="h2"
              className="text-3xl leading-[0.95] font-bold tracking-tight uppercase md:text-5xl lg:text-7xl"
            >
              From drawing board
              <br />
              to digital interface.
            </Reveal>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Yonsi's practice is not limited to traditional construction documentation. He is
              developing full-stack web development skills — modern web technologies, frontend and
              backend work, and engineering-oriented digital tools.
            </p>

            <div className="relative mt-16 grid grid-cols-4 gap-x-5 gap-y-10 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-4 md:col-span-4 lg:col-span-5">
                <p className="label border-b border-foreground pb-3 text-accent">Engineering</p>
                <ul className="mt-6 space-y-4">
                  {["CAD", "Structure", "Piping", "Civil", "Construction"].map((x) => (
                    <li key={x} className="text-2xl font-bold tracking-tight uppercase lg:text-4xl">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                aria-hidden="true"
                className="col-span-4 hidden items-center lg:col-span-2 lg:flex"
              >
                <span className="block h-px w-full bg-accent" />
              </div>
              <div className="col-span-4 md:col-span-4 lg:col-span-5">
                <p className="label border-b border-foreground pb-3 text-accent">Digital</p>
                <ul className="mt-6 space-y-4 lg:text-right">
                  {["Code", "Web", "Database", "Application", "Automation"].map((x) => (
                    <li key={x} className="text-2xl font-bold tracking-tight uppercase lg:text-4xl">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-16 border-t border-foreground pt-6 text-xl font-bold tracking-tight uppercase lg:text-3xl">
              Precision is the common language.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24 py-16 lg:py-28">
          <SectionHead no="05" label="Skills" title="Software & technical skills." />
          <div className="mt-12">
            {skillGroups.map((group, i) => (
              <Reveal
                key={group.label}
                delay={i * 40}
                className="grid grid-cols-4 gap-x-5 gap-y-4 border-t border-border py-8 md:grid-cols-8 lg:grid-cols-12"
              >
                <p className="label col-span-4 text-muted-foreground md:col-span-2 lg:col-span-3">
                  {group.label}
                </p>
                <ul className="col-span-4 flex flex-wrap gap-x-8 gap-y-3 md:col-span-6 lg:col-span-9">
                  {group.items.map((item) => (
                    <li key={item} className="text-base font-medium lg:text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="py-16 lg:py-28">
          <div className="grid grid-cols-4 gap-x-5 gap-y-8 border-t border-foreground pt-10 md:grid-cols-8 lg:grid-cols-12">
            <Reveal
              as="h2"
              className="col-span-4 text-4xl leading-[0.9] font-bold tracking-tight uppercase md:col-span-5 lg:col-span-7 lg:text-7xl"
            >
              Draw it.
              <br />
              Calculate it.
              <br />
              Build it.
              <br />
              <span className="text-accent">Improve it.</span>
            </Reveal>
            <p className="col-span-4 self-end text-sm leading-relaxed text-muted-foreground md:col-span-3 lg:col-span-4 lg:col-start-9 lg:text-base">
              A practical approach to engineering and technology: understand the problem, structure
              the information, produce precise documentation, execute carefully, and continuously
              improve the solution.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 py-16 lg:py-28">
          <SectionHead no="06" label="Contact" title="Let's build something precise." />
          <div className="mt-12 grid grid-cols-4 gap-x-5 gap-y-10 md:grid-cols-8 lg:grid-cols-12">
            <p className="col-span-4 text-base leading-relaxed md:col-span-5 lg:col-span-6 lg:col-start-4 lg:text-lg">
              For engineering drafting, technical drawing, construction support, quantity surveying,
              or digital development projects, feel free to get in touch.
            </p>
            <dl className="col-span-4 space-y-6 md:col-span-3 lg:col-span-3 lg:col-start-10">
              <div className="border-t border-foreground pt-3">
                <dt className="label text-muted-foreground">Email</dt>
                <dd className="mt-2">
                  <a
                    href="mailto:jabirelsabah@gmail.com"
                    className="text-base underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    jabirelsabah@gmail.com
                  </a>
                </dd>
              </div>
              <div className="border-t border-foreground pt-3">
                <dt className="label text-muted-foreground">Phone</dt>
                <dd className="mt-2">
                  <a
                    href="tel:+6285883444796"
                    className="text-base underline-offset-4 transition-colors hover:text-accent hover:underline"
                  >
                    +62 858-8344-4796
                  </a>
                </dd>
              </div>
              <div className="border-t border-foreground pt-3">
                <dt className="label text-muted-foreground">Location</dt>
                <dd className="mt-2 text-base">Banten, Indonesia</dd>
              </div>
            </dl>
            <div className="col-span-4 md:col-span-8 lg:col-span-9 lg:col-start-4">
              <a
                href="mailto:jabirelsabah@gmail.com"
                className="label inline-flex min-h-12 items-center bg-foreground px-8 text-background transition-colors hover:bg-accent"
              >
                Start a conversation →
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground">
        <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-x-5 gap-y-6 px-5 py-10 md:grid-cols-8 md:px-10 lg:grid-cols-12">
          <p className="col-span-4 text-lg font-bold tracking-[0.22em] uppercase md:col-span-2 lg:col-span-4">
            Yonsi
          </p>
          <p className="label col-span-4 text-muted-foreground md:col-span-4 lg:col-span-5">
            Engineering / Drafting / Construction / Digital
          </p>
          <p className="label col-span-4 text-muted-foreground md:col-span-2 lg:col-span-3 lg:text-right">
            © 2026 Yonsi
          </p>
          <p className="label col-span-4 border-t border-border pt-6 md:col-span-8 lg:col-span-12">
            Precision in every detail.
          </p>
        </div>
      </footer>
    </div>
  );
}
