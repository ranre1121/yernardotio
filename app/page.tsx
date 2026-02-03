"use client";

import { useRef } from "react";
import {
  Github,
  Twitter,
  Mail,
  Link,
  Settings,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, useGSAP);

const apps = [
  {
    name: "Gymguru",
    description:
      "Workout planner app with personalized plans, progress tracking, and complete workout history.",
    href: "https://gymguru.io/",
  },
];

const projects = [
  {
    name: "Social Network App",
    description:
      "A full-stack social network application with real-time messaging, friend management, and post feeds.",
    href: "https://github.com/ranre1121/socialnetwork",
  },
];

export default function Page() {
  const mainRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const appsLabelRef = useRef<HTMLHeadingElement>(null);
  const projectsLabelRef = useRef<HTMLHeadingElement>(null);
  const appsListRef = useRef<HTMLDivElement>(null);
  const projectsListRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!h1Ref.current) return;

      document.fonts.ready.then(() => {
        const split = new SplitText(h1Ref.current!, {
          type: "chars",
        });

        // Set initial hidden states
        gsap.set(split.chars, {
          filter: "blur(8px)",
          yPercent: 40,
          autoAlpha: 0,
        });
        gsap.set(subtitleRef.current, { autoAlpha: 0, y: 12 });
        gsap.set([appsLabelRef.current, projectsLabelRef.current], {
          autoAlpha: 0,
          y: 12,
        });
        if (appsListRef.current) {
          gsap.set(appsListRef.current.children, { autoAlpha: 0, y: 12 });
        }
        if (projectsListRef.current) {
          gsap.set(projectsListRef.current.children, { autoAlpha: 0, y: 12 });
        }
        gsap.set(contactRef.current, { autoAlpha: 0 });

        // Make everything visible now that we've set initial states
        mainRef.current?.classList.remove("gsap-hidden");

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // 1. h1 chars
        tl.to(
          split.chars,
          {
            filter: "blur(0px)",
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.02,
          },
          0.4,
        );

        // 2. Subtitle
        tl.to(
          subtitleRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
          },
          0.9,
        );

        // 3. Section headers
        tl.to(
          [appsLabelRef.current, projectsLabelRef.current],
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
          },
          1.4,
        );

        // 5. List items
        const allItems = [
          ...(appsListRef.current
            ? Array.from(appsListRef.current.children)
            : []),
          ...(projectsListRef.current
            ? Array.from(projectsListRef.current.children)
            : []),
        ];
        tl.to(
          allItems,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          1.6,
        );

        // 6. Contact + social
        tl.to(
          contactRef.current,
          {
            autoAlpha: 1,
            duration: 0.6,
          },
          2.0,
        );
      });
    },
    { scope: mainRef },
  );

  return (
    <>
      <main
        ref={mainRef}
        className="gsap-hidden h-screen relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-36 sm:pt-44 md:px-10"
      >
        {/* Header */}
        <header>
          <h1
            ref={h1Ref}
            className="text-4xl text-center sm:text-5xl md:text-7xl font-bold text-white"
          >
            Hi, I'm <span className="whitespace-nowrap ">Yernar</span>
          </h1>
          <p
            ref={subtitleRef}
            className="mt-4 text-xl md:text-2xl text-center font-medium text-white/50"
            style={{ visibility: "hidden" }}
          >
            Software Engineer • Prompt Engineer
          </p>
        </header>

        {/* Work Grid */}
        <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-12 ">
          {/* Apps */}
          <section>
            <h2
              ref={appsLabelRef}
              className="text-base uppercase tracking-[0.2em] border-b pb-2 font-bold text-white/40"
              style={{ visibility: "hidden" }}
            >
              Apps
            </h2>
            <div ref={appsListRef} className="mt-6 space-y-5">
              {apps.map((app) => (
                <a
                  key={app.name}
                  href={app.href}
                  className="block transition-colors"
                  style={{ visibility: "hidden" }}
                  target="_blank"
                >
                  <span className="flex gap-1.5 items-center">
                    <h3 className="text-lg font-semibold text-white/80 transition-colors hover:text-white">
                      {app.name}
                    </h3>
                    <Link className="size-3 text-red-400" />
                  </span>
                  <p className="mt-0.5 text-base font-medium text-white/40">
                    {app.description}
                  </p>
                </a>
              ))}
              <div
                className="flex items-center gap-2 text-white/40"
                style={{ visibility: "hidden" }}
              >
                <Settings
                  className="size-4 animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <span className="text-base font-medium">More coming soon</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2
              ref={projectsLabelRef}
              className="text-base uppercase tracking-[0.2em] border-b pb-2 font-bold text-white/40"
              style={{ visibility: "hidden" }}
            >
              Projects
            </h2>
            <div ref={projectsListRef} className="mt-6 space-y-5">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.href}
                  className="block transition-colors"
                  style={{ visibility: "hidden" }}
                  target="_blank"
                >
                  <span className="flex gap-1.5 items-center">
                    <h3 className="text-lg font-semibold text-white/80 transition-colors hover:text-white">
                      {project.name}
                    </h3>
                    <Link className="size-3 text-red-400" />
                  </span>
                  <p className="mt-0.5 text-base font-medium text-white/40">
                    {project.description}
                  </p>
                </a>
              ))}
              <div
                className="flex items-center gap-2 text-white/40"
                style={{ visibility: "hidden" }}
              >
                <Settings
                  className="size-4 animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <span className="text-base font-medium"> More coming soon</span>
              </div>
            </div>
          </section>
        </div>

        {/* Footer / Contact */}
        <div
          ref={contactRef}
          className="mt-20 items-center text-center"
          style={{ visibility: "hidden" }}
        >
          <h2 className="text-base uppercase tracking-[0.2em] font-bold  text-white/50 mb-2">
            Contact Me
          </h2>
          <p className="text-base font-medium text-white/80">
            <a
              href="https://t.me/yernar1121"
              className="transition-colors hover:text-white"
              target="_blank"
            >
              @yernar1121 •{" "}
            </a>

            <a
              href="mailto:yernar34@gmail.com"
              className="transition-colors hover:text-white"
              target="_blank"
            >
              yernar34@gmail.com
            </a>
          </p>
          <nav className="mt-4 flex gap-5 justify-center">
            {[
              // { icon: Linkedin, href: "#", label: "LinkedIn" },
              {
                icon: Github,
                href: "https://github.com/ranre1121/",
                label: "GitHub",
              },
              {
                icon: Twitter,
                href: "https://x.com/yernar1121",
                label: "Twitter",
              },
              { icon: Mail, href: "mailto:yernar34@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/40  transition-colors hover:text-white/80"
                target="_blank"
              >
                <Icon className="size-6" />
              </a>
            ))}
          </nav>
        </div>
      </main>
    </>
  );
}
