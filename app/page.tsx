"use client";

import { useRef } from "react";
import { Github, Twitter } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GmailIcon, OpenAIIcon, TelegramIcon } from "./icons";

gsap.registerPlugin(useGSAP);

const EMAIL = "yernar34@gmail.com";
const TELEGRAM = "https://t.me/yernar1121";

// Simple Icons slug, light-mode color, dark-mode color
const stack: { name: string; icon: string | typeof OpenAIIcon }[] = [
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs/000/fff" },
  { name: "React Native", icon: "react" },
  { name: "Expo", icon: "expo/000/fff" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Express", icon: "express/000/fff" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Prisma", icon: "prisma/2d3748/fff" },
  { name: "Tailwind", icon: "tailwindcss" },
  { name: "OpenAI", icon: OpenAIIcon },
  { name: "Claude", icon: "claude" },
  { name: "Git", icon: "git" },
  { name: "Docker", icon: "docker" },
];

type Status = "Live" | "New" | "Open source";

const apps: {
  name: string;
  description: string;
  href: string;
  icon: string;
  status: Status;
}[] = [
  {
    name: "Lumvy",
    description:
      "Put your crew in the clip. Upload a short video, add a selfie of each person, get your own version back in minutes.",
    href: "https://lumvy.io/",
    icon: "/apps/lumvy.svg",
    status: "New",
  },
  {
    name: "Gymguru",
    description:
      "AI workout planner for iOS with personalized plans, progress tracking and full workout history.",
    href: "https://gymguru.io/",
    icon: "/apps/gymguru.ico",
    status: "Live",
  },
];

const projects = [
  {
    name: "Social Network",
    description:
      "Full-stack social network with real-time messaging, friend management and post feeds.",
    href: "https://github.com/ranre1121/socialnetwork",
    status: "Open source" as Status,
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/ranre1121/", icon: Github },
  { label: "X/Twitter", href: "https://x.com/yernar1121", icon: Twitter },
  { label: "Telegram", href: TELEGRAM, icon: TelegramIcon },
  { label: "Email", href: `mailto:${EMAIL}`, icon: GmailIcon },
];

const statusStyles: Record<Status, string> = {
  Live: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  New: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  "Open source": "bg-sky-500/10 text-sky-600 dark:text-sky-400",
};

function StackIcon({ icon: Icon }: { icon: string | typeof OpenAIIcon }) {
  if (typeof Icon !== "string") return <Icon className="size-4" />;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${Icon}`}
      alt=""
      className="size-4"
      loading="lazy"
    />
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="font-sans text-sm font-medium uppercase tracking-wide text-subtle">
      {children}
    </h2>
  );
}

function Card({
  name,
  description,
  href,
  status,
  icon,
}: {
  name: string;
  description: string;
  href: string;
  status: Status;
  icon?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-reveal
      className="group block rounded-xl border border-line bg-card p-4 transition duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--accent)_45%,transparent)]"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-lg border border-line bg-chip">
          {icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={icon} alt="" className="size-5" />
          ) : (
            <Github className="size-4 text-muted" />
          )}
        </span>
        <h3 className="whitespace-nowrap font-mono text-[15px] text-fg">{name}</h3>
        <span
          className={`whitespace-nowrap rounded-full px-2 py-0.5 font-mono text-xs ${statusStyles[status]}`}
        >
          {status}
        </span>
        <span className="ml-auto text-subtle opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
          ↗
        </span>
      </div>
      <p className="mt-3 font-mono text-sm leading-relaxed text-muted">
        {description}
      </p>
    </a>
  );
}

export default function Page() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(items, { autoAlpha: 0, y: 14, filter: "blur(6px)" });
      rootRef.current?.classList.remove("gsap-hidden");
      gsap.to(items, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.045,
        delay: 0.1,
      });
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="gsap-hidden flex min-h-screen flex-col px-4 sm:px-8"
    >
      <main className="mx-auto w-full max-w-2xl flex-1 pb-24 pt-20 sm:pt-32">
        {/* Hero */}
        <section>
          <h1
            data-reveal
            className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Hey, I&apos;m{" "}
            <span className="link-underline text-accent">Yernar Izbatyrov</span>
            !
          </h1>
          <div
            data-reveal
            className="mt-5 space-y-2 font-mono text-[15px] leading-relaxed text-muted"
          >
            <p>
              A 21-year-old developer from Kazakhstan, studying at
              Nazarbayev University.
            </p>
            <p>
              I build products end to end with the{" "}
              <span className="inline-flex items-center gap-1.5 rounded-md bg-chip px-1.5 py-0.5 text-fg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.simpleicons.org/react"
                  alt=""
                  className="size-3.5"
                />
                React
              </span>{" "}
              ecosystem, from mobile apps to AI-powered SaaS.
            </p>
          </div>

          <div data-reveal className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-fg px-5 py-2.5 font-sans text-sm font-medium text-bg transition hover:opacity-85"
            >
              <GmailIcon className="size-4" />
              Send an email
            </a>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-5 py-2.5 font-sans text-sm font-medium transition hover:border-subtle"
            >
              <TelegramIcon className="size-4" />
              Message on Telegram
            </a>
          </div>

          <p
            data-reveal
            className="mt-5 flex items-center gap-2.5 font-mono text-xs text-muted"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </p>
        </section>

        {/* Stack */}
        <section className="mt-20" data-reveal>
          <SectionLabel>Tech stack</SectionLabel>
          <p className="mt-4 font-mono text-[15px] text-fg">
            The tools I use for my apps and client work:
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stack.map(({ name, icon }) => (
              <li
                key={name}
                className="inline-flex items-center gap-2 rounded-lg bg-chip px-3 py-1.5 font-mono text-sm text-fg transition hover:-translate-y-px"
              >
                <StackIcon icon={icon} />
                {name}
              </li>
            ))}
          </ul>
        </section>

        {/* Apps */}
        <section className="mt-20">
          <div data-reveal>
            <SectionLabel>Apps</SectionLabel>
            <p className="mt-4 font-mono text-[15px] text-fg">
              Products I&apos;ve built and run:
            </p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {apps.map((app) => (
              <Card key={app.name} {...app} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-20">
          <div data-reveal>
            <SectionLabel>Projects</SectionLabel>
            <p className="mt-4 font-mono text-[15px] text-fg">
              Side projects and experiments:
            </p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.name} {...project} />
            ))}
          </div>
        </section>

        {/* Socials */}
        <section className="mt-20" data-reveal>
          <SectionLabel>Find me on</SectionLabel>
          <ul className="mt-5 flex flex-wrap gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-chip px-3 py-1.5 font-mono text-sm transition hover:text-accent"
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="mt-20" data-reveal>
          <SectionLabel>Get in touch</SectionLabel>
          <div className="mt-5 space-y-2 font-mono text-[15px]">
            <p>
              Reach me anytime at{" "}
              <a href={`mailto:${EMAIL}`} className="link-underline">
                {EMAIL}
              </a>
            </p>
            <p>
              Or text me on{" "}
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                Telegram
              </a>
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}
