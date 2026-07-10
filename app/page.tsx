"use client";

import { useState, useEffect } from "react";

const TAGLINE =
  "Software engineer skilled in Node.js, React, and Kotlin — building scalable SaaS, AI-powered, and real-time operational platforms.";

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Java",       icon: "devicon-java-plain colored" },
      { name: "Kotlin",     icon: "devicon-kotlin-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "C",          icon: "devicon-c-plain colored" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React.js",     icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "Material-UI",  icon: "devicon-materialui-plain colored" },
      { name: "Shadcn UI",    icon: "devicon-react-original colored" }, 
      { name: "Android SDK",  icon: "devicon-android-plain colored" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js",    icon: "devicon-nodejs-plain colored" },
      { name: "Bun",        icon: "devicon-bun-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "Prisma",     icon: "devicon-prisma-plain colored" },
      { name: "WebSocket",  icon: "devicon-socketio-original colored" },
    ],
  },
  {
    id: "database",
    label: "Databases & Security",
    skills: [
      { name: "Firestore",  icon: "devicon-firebase-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB",    icon: "devicon-mongodb-plain colored" },
      { name: "SQL",        icon: "devicon-mysql-plain colored" },
      { name: "JWT",        icon: "devicon-json-plain colored" },
      { name: "OAuth2",     icon: "devicon-google-plain colored" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud, Tools & APIs",
    skills: [
      { name: "Firebase",   icon: "devicon-firebase-plain colored" },
      { name: "Render",     icon: "devicon-digitalocean-plain colored" },
      { name: "Cloudinary", icon: "devicon-cloudinary-plain colored" },
      { name: "Vercel",     icon: "devicon-vercel-plain" },
      { name: "Railway",    icon: "devicon-heroku-plain colored" },
      { name: "Git",        icon: "devicon-git-plain colored" },
      { name: "GitHub",     icon: "devicon-github-original" },
      { name: "Postman",    icon: "devicon-postman-plain colored" },
    ],
  },
  {
    id: "ai",
    label: "AI & APIs",
    skills: [
      { name: "Gemini API", icon: "devicon-google-plain colored" },
      { name: "Geoapify",   icon: "devicon-googleearth-plain colored" },
    ],
  },
];

export default function Home() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const tick = setInterval(() => {
        if (i < TAGLINE.length) {
          setTyped(TAGLINE.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(tick);
        }
      }, 28);
      return () => clearInterval(tick);
    }, 1100);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll(".observe").forEach((el) => observer.observe(el));

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const handleScroll = () => {
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 100) current = s.id;
      });
      navLinks.forEach((a) => {
        (a as HTMLElement).style.color =
          a.getAttribute("href") === `#${current}` ? "var(--accent)" : "";
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 640) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
      <nav>
        <div className="nav-inner">
          <a href="#" className="nav-brand">
            ds<span>.</span>dev
          </a>

          <button
            className={`nav-toggle${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-links${menuOpen ? " is-open" : ""}`}>
            {["experience", "projects", "skills", "contact"].map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setMenuOpen(false)}>
                  {id === "experience" ? "work" : id}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-top">
          <span className="hero-index">001 / PORTFOLIO</span>
          <span className="hero-avail">
            <span className="avail-dot" />
            available for hire
          </span>
        </div>

        <div className="hero-name-block">
          <span className="name-l1">DIGVIJAY</span>
          <span className="name-l2">Singh</span>
        </div>

        <div className="hero-bottom">
          <div className="hero-left-bottom">
            <div className="hero-meta">
              <span>Software Engineer</span>
              <span className="hero-meta-sep">·</span>
              <span>B.Tech CSE, BIT Sindri</span>
              <span className="hero-meta-sep">·</span>
              <span>Dhanbad, Jharkhand · 2028</span>
            </div>
            <div className="hero-tagline">
              {typed}
              <span className={done ? "cursor-solid" : "cursor-blink"}>▋</span>
            </div>
            <div className="hero-ctas">
              <a href="mailto:digvijaysingh20202005@gmail.com" className="btn-primary">
                get_in_touch()
              </a>
              <a href="/Digvijay_Resume.pdf" target="_blank" rel="noreferrer" className="btn-ghost">
                resume.pdf ↗️
              </a>
              <a
                href="https://github.com/Digvijay-djcodes"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                github →
              </a>
            </div>
          </div>

          <div className="hero-right-bottom">
            <div className="hero-count">04</div>
          </div>
        </div>
      </section>

      <div className="profile-strip">
        <div className="profile-cell">
          <div className="profile-avatar">
            <img
              src="https://github.com/Digvijay-djcodes.png"
              alt="Digvijay Singh"
              width={60}
              height={60}
            />
          </div>
          <div>
            <div className="profile-name-text">Digvijay Singh</div>
            <div className="profile-role-text">Software Engineer · BIT Sindri, 2028</div>
          </div>
        </div>
        <div className="stat-cell">
          <div className="stat-val">200+</div>
          <div className="stat-lbl">DSA Problems Solved</div>
        </div>
        <div className="stat-cell">
          <div className="stat-val">4+</div>
          <div className="stat-lbl">Live Full-Stack Projects</div>
        </div>
        <div className="stat-cell">
          <div className="stat-val">85%</div>
          <div className="stat-lbl">DB Cost Reduction</div>
        </div>
        <div className="stat-cell">
          <div className="stat-val">7.35</div>
          <div className="stat-lbl">SGPA / 10</div>
        </div>
      </div>

      <div className="edu-card observe">
        <img
          src="/bit-sindri-logo.png"
          alt="BIT Sindri"
          className="edu-logo"
        />
        <div className="edu-details">
          <div className="edu-tag">// education</div>
          <div className="edu-institution">B.I.T. Sindri</div>
          <div className="edu-degree">B.Tech, Computer Science and Engineering</div>
          <div className="edu-meta">
            <span>Aug 2024 – Present · Dhanbad, Jharkhand</span>
            <span className="edu-cgpa">7.35 / 10 SGPA</span>
          </div>
        </div>
      </div>

      <section id="experience">
  <div className="section-label">
    <span className="section-num">01</span>
    <span className="section-title">Experience</span>
  </div>

  <div className="exp-entry observe">
    <div className="exp-entry-top">
      <div>
        <div className="exp-co">ARLOO</div>
        <div className="exp-role-line">Software Development Engineer Intern</div>
      </div>
      <div className="exp-meta-right">
        <div className="exp-date">May 2026 — Present</div>
        <span className="exp-badge live">Active</span>
      </div>
    </div>
    <div className="exp-quote">
      &quot;Architected an enterprise-grade operational dashboard, an optimized NoSQL synchronization engine, and enhanced production Android workflows.&quot;
    </div>
    <ul className="exp-bullets">
      <li>
        Architected an enterprise-grade operational dashboard using React, TypeScript, and Shadcn UI, optimizing frontend rendering by seamlessly flattening complex nested NoSQL data in-memory.
      </li>
      <li>
        Designed a batched NoSQL database schema for historical market rates, reducing Firebase document reads by over 85% for mobile clients and significantly cutting cloud infrastructure costs.
      </li>
      <li>
        Developed a dynamic rate-syncing engine utilizing Firestore writeBatch, enabling 1-click automated recalculations of weight-based pricing across 100% of active regional orders.
      </li>
      <li>
        Enhanced customer workflows in a production Android app using Kotlin, integrating a reward calculation engine, automated redemption logic, and auto-sliding promotional UI.
      </li>
      <li>
        Optimized high-volume data pipelines using RecyclerViews and lifecycle-aware architecture, establishing a tamper-proof audit trail and improving merchant balance tracking.
      </li>
    </ul>
    <div className="exp-metrics">
      <div>
        <div className="metric-v">85%</div>
        <div className="metric-l">Read Cost Reduction</div>
      </div>
      <div>
        <div className="metric-v">1-Click</div>
        <div className="metric-l">Global Rate Sync</div>
      </div>
      <div>
        <div className="metric-v">Zero</div>
        <div className="metric-l">Data Conflicts</div>
      </div>
    </div>
    <div className="exp-stack">
      {["React","TypeScript","Shadcn UI","Firestore","Kotlin","Android SDK"].map(
        (s) => <span key={s} className="stack-pill">{s}</span>
      )}
    </div>
  </div>
</section>

<section id="projects">
        <div className="section-label">
          <span className="section-num">02</span>
          <span className="section-title">Projects</span>
        </div>

        <div className="projects-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="project-card observe">
            <div className="t-bar">
              <div className="t-dots">
                <span className="dot dot-r" />
                <span className="dot dot-y" />
                <span className="dot dot-g" />
              </div>
              <span className="t-path">~/projects/ai-mock-interview</span>
              <span className="t-num">01</span>
            </div>
            <div className="card-body">
              <div className="project-tag">AI Integration · Full Stack</div>
              <div className="project-name">AI Mock Interview Engine</div>
              <div className="project-desc">
                Engineered a stateless AI mock interview platform utilizing React, Bun, and Express. Reconstructed conversation contexts directly from PostgreSQL to eliminate server-side session memory overhead by <strong>100%</strong>. Integrated Google Gemini 2.5 Flash and browser-native Web Speech APIs to orchestrate a voice-first experience, bypassing WebRTC relays to cut dedicated audio infrastructure costs to <strong>0</strong>.
              </div>
              <div className="project-hl">→ React · Bun · Express · PostgreSQL · Gemini API</div>
              <div className="project-links">
                <a
                  href="https://ai-mock-interviewer-platform.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Live Demo ↗️
                </a>
                <a
                  href="https://github.com/Digvijay-djcodes/AI-Mock-Interviewer"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub ↗️
                </a>
              </div>
            </div>
          </div>

          <div className="project-card observe">
            <div className="t-bar">
              <div className="t-dots">
                <span className="dot dot-r" />
                <span className="dot dot-y" />
                <span className="dot dot-g" />
              </div>
              <span className="t-path">~/projects/wanderlust</span>
              <span className="t-num">02</span>
            </div>
            <div className="card-body">
              <div className="project-tag">Live · B2C Marketplace</div>
              <div className="project-name">WanderLust</div>
              <div className="project-desc">
                Architected a vacation accommodation discovery, listing & review platform in Node.js and MongoDB, engineered with an advanced search engine parsing <strong>3+</strong> concurrent query dimensions. Secured <strong>100%</strong> of protected API endpoints via Passport.js, Google OAuth, and crash-proof connect-mongo sessions. Integrated Geoapify for geolocation and offloaded media to Cloudinary.
              </div>
              <div className="project-hl">→ Node.js · Express · MongoDB · Geoapify</div>
              <div className="project-links">
                <a
                  href="https://wanderlust-puf9.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Live Demo ↗️
                </a>
                <a
                  href="https://github.com/Digvijay-djcodes/Wanderlust"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub ↗️
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-label">
          <span className="section-num">03</span>
          <span className="section-title">Skills</span>
        </div>

        {skillCategories.map((cat) => (
          <div key={cat.id} className="skill-row observe">
            <div className="skill-cat-label">{cat.label}</div>
            <div className="skill-items">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <i className={`${skill.icon} skill-icon`} />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="achievements">
        <div className="section-label">
          <span className="section-num">04</span>
          <span className="section-title">Achievements & Extra-Curriculars</span>
        </div>

        <div className="leadership-grid">
          <div className="leadership-card observe">
            <div className="lship-header">
              <div className="lship-logo">
                <img src="/iste-logo.png" alt="ISTE logo" />
              </div>
              <div>
                <div className="lship-org">ISTE Students Chapter, BIT Sindri</div>
                <div className="lship-role">Student Coordinator & Technical Aide</div>
                <div className="lship-date">2024 — Present</div>
              </div>
            </div>
            <ul className="lship-points">
              <li>Managed website, digital infrastructures, sponsorships and maintained ongoing technical operations for the chapter.</li>
              <li>Developed coding challenges, custom test cases, and evaluation pipelines for HackerRank-based programming contests.</li>
              <li>Spearheaded Triveni techfest — 1000+ participants, 5000+ footfall</li>
              <li>Evaluated 600+ applications, selected 15 members for induction</li>
            </ul>
          </div>

          <div className="leadership-card observe">
            <div className="lship-header">
              <div className="lship-logo">
                <img src="/cse_society_logo.jpg" alt="CSE Society logo" />
              </div>
              <div>
                <div className="lship-org">Computer Science and Engineering Society, BIT Sindri</div>
                <div className="lship-role">Student Coordinator</div>
                <div className="lship-date">January 2026 — Present</div>
              </div>
            </div>
            <ul className="lship-points">
              <li>Spearheaded the foundational technical infrastructure and digital presence for the society.</li>
              <li>Established core community guidelines and oversaw day-to-day technical operations.</li>
              <li>Collaborated with core members to outline the technical roadmap for computer science students.</li>
              <li>Represented the society in cross-club collaborations to drive technical initiatives and student engagement.</li>
            </ul>
          </div>
        </div>

        <div className="comp-list">
          {[
            { place: "Finalist", name: "Hackatron 36-Hour National Hackathon", info: "National Level Competition" },
            { place: "Solved", name: "Data Structures & Algorithms", info: "200+ Problems on LeetCode & HackerRank" },
          ].map((c) => (
            <div key={c.name} className="comp-row observe">
              <div className="comp-place">{c.place}</div>
              <div className="comp-name">{c.name}</div>
              <div className="comp-info">{c.info}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2 className="contact-hl observe">
          Let&#39;s build
          <br />
          something
          <br />
          <em>real.</em>
        </h2>
        <p className="contact-sub observe">
          Open to SDE internships and full-stack roles where good engineering
          and real impact matter.
        </p>
        <div className="contact-links observe">
          <a href="tel:+919304530974" className="contact-link">
            <svg viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
            </svg>
            +91 93045 30974
          </a>
          <a href="mailto:digvijaysingh20202005@gmail.com" className="contact-link">
            <svg viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            digvijaysingh20202005@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/digvijay-singh26"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <svg viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            linkedin.com/in/digvijay-singh26
          </a>
          <a
            href="https://github.com/Digvijay-djcodes"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            github.com/Digvijay-djcodes
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-mono">
          ds@portfolio:~$<span className="footer-cursor">▋</span>
        </div>
        <div className="footer-mono">©️ 2026 Digvijay Singh</div>
        <a href="#" className="footer-back">↑ top</a>
      </footer>
    </>
  );
}