
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#090b0a">
<title>Your Name — AI Developer</title>

<style>
:root {
  --bg: #090b0a;
  --panel: #111512;
  --panel2: #171c18;
  --text: #f2f5ef;
  --muted: #9ba69b;
  --line: #29312a;
  --accent: #c5ff78;
  --max: 1180px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 85px;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: Inter, system-ui, -apple-system, sans-serif;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

.wrap {
  width: min(var(--max), calc(100% - 48px));
  margin: auto;
}

/* SCROLL PROGRESS BAR */
.progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0;
  background: var(--accent);
  z-index: 100;
}

/* NAVIGATION */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px max(24px, calc((100vw - var(--max)) / 2));
  border-bottom: 1px solid #29312a80;
  background: #090b0acc;
  backdrop-filter: blur(18px);
}

.brand {
  font-weight: 800;
  letter-spacing: -.05em;
  font-size: 1.12rem;
}

.brand span,
.accent {
  color: var(--accent);
}

.navlinks {
  display: flex;
  gap: 26px;
  align-items: center;
  font-size: .8rem;
  color: var(--muted);
}

.navlinks a {
  transition: color .25s;
}

.navlinks a:hover,
.navlinks a.current-section {
  color: var(--accent);
}

.nav-cta {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 10px 15px;
}

/* HERO */
.hero {
  min-height: 100svh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 130px 0 150px;
  background:
    radial-gradient(ellipse at 78% 48%, #c5ff780d, transparent 38%),
    linear-gradient(180deg, var(--bg) 78%, #111512 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.12fr .88fr;
  gap: 30px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  text-transform: uppercase;
  letter-spacing: .16em;
  font-size: .69rem;
  color: var(--muted);
  font-weight: 700;
}

.dot {
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 14px var(--accent);
}

h1, h2, h3, p {
  margin-top: 0;
}

h1 {
  font-size: clamp(3.4rem, 8.2vw, 7.4rem);
  line-height: .91;
  letter-spacing: -.085em;
  margin: 26px 0 25px;
}

.hero-copy {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.75;
  color: var(--muted);
  max-width: 540px;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 5px;
  background: var(--accent);
  color: #11160d;
  font-size: .83rem;
  font-weight: 800;
  border: 1px solid var(--accent);
  transition: transform .25s, background .25s;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn.secondary {
  background: transparent;
  color: var(--text);
  border-color: var(--line);
}

.micro {
  margin-top: 38px;
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
  color: var(--muted);
  font-size: .75rem;
}

/* ANIMATED AI ORB */
.orbital {
  min-height: 440px;
  position: relative;
  display: grid;
  place-items: center;
  isolation: isolate;
  transition: transform .2s ease-out;
}

.orbital::before,
.orbital::after {
  content: "";
  position: absolute;
  border: 1px solid #c5ff7848;
  border-radius: 50%;
  width: min(37vw, 400px);
  aspect-ratio: 1;
  transform: rotate(-28deg);
}

.orbital::after {
  width: min(28vw, 300px);
  transform: rotate(44deg);
  border-color: #f2f5ef29;
}

.core {
  width: clamp(140px, 19vw, 220px);
  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;
  background: radial-gradient(
    circle at 36% 30%,
    #f4ffdc 0,
    #c5ff78 7%,
    #6b9c3e 18%,
    #1a2b1c 48%,
    #0b100c 72%
  );
  box-shadow: 0 0 70px #a6f85a22, inset -18px -20px 42px #0009;
  animation: float 6s ease-in-out infinite;
}

.core::before {
  content: "";
  position: absolute;
  inset: -24px;
  border-radius: 50%;
  border: 1px dashed #c5ff7855;
  animation: spin 22s linear infinite;
}

.orbit-label {
  position: absolute;
  background: var(--panel);
  border: 1px solid var(--line);
  padding: 11px 13px;
  border-radius: 6px;
  font-size: .75rem;
  box-shadow: 0 15px 45px #0002;
}

.orbit-label b {
  display: block;
  margin-bottom: 3px;
}

.orbit-label small {
  color: var(--muted);
}

.ol1 { top: 16%; left: 0; }
.ol2 { right: 0; top: 32%; }
.ol3 { bottom: 14%; left: 8%; }

.hero-bottom {
  position: absolute;
  bottom: 38px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: .68rem;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.scroll-cue {
  display: flex;
  gap: 10px;
  align-items: center;
}

.scroll-line {
  height: 1px;
  width: 40px;
  background: var(--accent);
}

/* COMMON SECTIONS */
section {
  position: relative;
}

.section {
  padding: 130px 0;
}

.section-head {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: end;
  margin-bottom: 55px;
}

.kicker {
  font-size: .72rem;
  text-transform: uppercase;
  letter-spacing: .16em;
  color: var(--accent);
  font-weight: 750;
}

.section h2 {
  font-size: clamp(2.5rem, 5.5vw, 5.1rem);
  line-height: .98;
  letter-spacing: -.075em;
  margin: 16px 0 0;
}

.section-intro {
  max-width: 330px;
  line-height: 1.75;
  color: var(--muted);
  font-size: .94rem;
  margin: 0;
}

/* ABOUT */
.about {
  background: linear-gradient(180deg, #111512 0%, #111512 100%);
}

.about-grid {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 8vw;
  align-items: start;
}

.about-stamp {
  position: sticky;
  top: 125px;
  border: 1px solid var(--line);
  padding: 25px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(145deg, #1c2618, var(--panel));
  box-shadow: 18px 18px 0 #c5ff7812;
}

.stamp-big {
  font-size: clamp(4rem, 9vw, 8rem);
  line-height: .8;
  letter-spacing: -.1em;
  font-weight: 850;
  color: var(--accent);
}

.stamp-bottom {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  color: var(--muted);
  font-size: .75rem;
}

.about-text p {
  font-size: clamp(1.3rem, 2.4vw, 1.9rem);
  line-height: 1.6;
  letter-spacing: -.025em;
}

.about-text p.muted {
  font-size: 1rem;
  color: var(--muted);
  letter-spacing: 0;
  line-height: 1.9;
}

.inline-highlight {
  color: var(--accent);
}

/* SKILLS */
.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.skill {
  border: 1px solid var(--line);
  padding: 23px;
  min-height: 170px;
  background: var(--panel);
  transition: transform .3s, border-color .3s;
}

.skill:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.skill-num {
  font-size: .7rem;
  color: var(--accent);
  letter-spacing: .12em;
}

.skill h3 {
  margin: 25px 0 8px;
  font-size: 1.1rem;
}

.skill p {
  color: var(--muted);
  font-size: .83rem;
  line-height: 1.65;
  margin: 0;
}

/* PROJECTS */
.projects {
  background: var(--bg);
  color: var(--text);
  padding-bottom: 120px;
}

.projects-top {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 24px;
  margin-bottom: 35px;
}

.projects-top h2 {
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  letter-spacing: -.08em;
  line-height: .95;
  margin: 14px 0 0;
}

.project-counter {
  color: var(--muted);
  font-size: .8rem;
}

.project-track {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.project-card {
  border: 1px solid var(--line);
  background: var(--panel);
  min-height: 420px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform .3s, border-color .3s;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--accent);
}

.project-art {
  height: 205px;
  display: grid;
  place-items: center;
  background: radial-gradient(circle, #30492c, #101411 70%);
}

.project-art svg {
  width: 80%;
  height: 80%;
}

.art-two {
  background: radial-gradient(circle, #273c52, #101411 72%);
}

.art-three {
  background: radial-gradient(circle, #453b24, #101411 72%);
}

.project-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-type {
  font-size: .68rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: .14em;
}

.project-body h3 {
  font-size: 1.4rem;
  margin: 13px 0;
}

.project-body p {
  color: var(--muted);
  font-size: .86rem;
  line-height: 1.7;
  flex: 1;
}

.tags {
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
  margin: 12px 0 20px;
}

.tag {
  border: 1px solid #343c35;
  border-radius: 99px;
  padding: 6px 9px;
  color: #c5cdc4;
  font-size: .67rem;
}

.project-link {
  padding-top: 15px;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  font-size: .78rem;
}

/* JOURNEY */
.journey {
  background: var(--panel);
}

.timeline {
  border-top: 1px solid var(--line);
}

.timeline-item {
  display: grid;
  grid-template-columns: 150px 1fr 1.1fr;
  gap: 25px;
  padding: 27px 0;
  border-bottom: 1px solid var(--line);
  align-items: start;
}

.timeline-date {
  font-size: .75rem;
  color: var(--accent);
}

.timeline-item h3 {
  margin: 0;
  font-size: 1.2rem;
}

.timeline-item p {
  margin: 0;
  color: var(--muted);
  font-size: .88rem;
  line-height: 1.75;
}

/* CONTACT */
.contact {
  padding: 130px 0 45px;
  overflow: hidden;
}

.contact-panel {
  border: 1px solid var(--line);
  padding: clamp(28px, 7vw, 80px);
  position: relative;
  background: linear-gradient(130deg, var(--panel), var(--bg));
}

.contact h2 {
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: .9;
  letter-spacing: -.085em;
  margin: 18px 0 25px;
}

.contact h2 span {
  color: var(--accent);
}

.contact-panel p {
  color: var(--muted);
  max-width: 500px;
  line-height: 1.8;
}

.contact-bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 80px;
  padding-top: 20px;
  border-top: 1px solid var(--line);
  font-size: .72rem;
  color: var(--muted);
}

.socials {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

/* SCROLL-BASED ANIMATIONS */
.reveal {
  opacity: 0;
  transform: translate3d(0, 64px, 0) scale(.97);
  filter: blur(5px);
  transition:
    opacity .9s cubic-bezier(.2,.7,.2,1),
    transform .9s cubic-bezier(.2,.7,.2,1),
    filter .9s ease;
  will-change: opacity, transform, filter;
}

.reveal.visible {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
  filter: blur(0);
}

.section-head.reveal {
  transform: translate3d(-36px, 35px, 0);
}

.section-head.reveal.visible {
  transform: translate3d(0, 0, 0);
}

.timeline-item.reveal {
  transform: translate3d(-28px, 25px, 0);
}

.timeline-item.reveal.visible {
  transform: translate3d(0, 0, 0);
}

.skills .skill:nth-child(3n+2),
.project-card:nth-child(3n+2) {
  transition-delay: .12s;
}

.skills .skill:nth-child(3n),
.project-card:nth-child(3n) {
  transition-delay: .22s;
}

/* FLOATING ORB ANIMATIONS */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-13px); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* RESPONSIVE DESIGN */
@media (max-width: 800px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 135px;
  }

  .orbital {
    min-height: 340px;
  }

  .orbital::before { width: 300px; }
  .orbital::after { width: 225px; }
  .core { width: 155px; }

  .hero-bottom {
    position: static;
    margin-top: 28px;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .about-stamp {
    position: relative;
    top: auto;
    min-height: 220px;
  }

  .skills {
    grid-template-columns: repeat(2, 1fr);
  }

  .project-track {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    grid-template-columns: 95px 1fr;
    gap: 12px;
  }

  .timeline-item p {
    grid-column: 2;
  }

  .section-head {
    align-items: start;
    flex-direction: column;
  }

  .navlinks {
    gap: 13px;
  }

  .navlinks a:not(.nav-cta) {
    display: none;
  }

  .contact-bottom {
    align-items: flex-start;
    flex-direction: column;
  }

  .section,
  .contact {
    padding-top: 90px;
  }
}

@media (max-width: 480px) {
  .wrap {
    width: calc(100% - 34px);
  }

  .nav {
    padding: 14px 17px;
  }

  .hero {
    min-height: auto;
    padding-bottom: 50px;
  }

  .hero h1 {
    font-size: clamp(3.2rem, 16vw, 5rem);
  }

  .orbital {
    min-height: 290px;
  }

  .orbital::before { width: 250px; }
  .orbital::after { width: 185px; }
  .core { width: 130px; }

  .orbit-label {
    font-size: .68rem;
    padding: 9px;
  }

  .skills {
    grid-template-columns: 1fr;
  }

  .projects-top {
    align-items: start;
    flex-direction: column;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .timeline-item p {
    grid-column: 1;
  }

  .contact-panel {
    padding: 26px 20px;
  }

  .contact h2 {
    font-size: clamp(3.1rem, 15vw, 4.5rem);
  }

  .contact-bottom {
    margin-top: 55px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }

  *,
  *::before,
  *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }

  .reveal,
  .section-head.reveal,
  .timeline-item.reveal {
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
    will-change: auto;
  }
}
</style>
</head>

<body>
<div class="progress" id="progress"></div>

<header class="nav">
  <a class="brand" href="#top">YOUR<span>NAME</span>.</a>
  <nav class="navlinks">
    <a href="#about">About</a>
    <a href="#skills">Expertise</a>
    <a href="#projects">Projects</a>
    <a href="#journey">Journey</a>
    <a class="nav-cta" href="#contact">Let's talk ↗</a>
  </nav>
</header>

<main id="top">

  <!-- HERO SECTION -->
  <section class="hero">
    <div class="wrap hero-grid">
      <div>
        <div class="eyebrow">
          <span class="dot"></span>
          AI DEVELOPER · BUILDER · PROBLEM SOLVER
        </div>

        <h1>
          Building<br>
          <span class="accent">intelligence.</span><br>
          Shaping what's next.
        </h1>

        <p class="hero-copy">
          I turn curious questions into intelligent systems —
          combining machine learning, thoughtful engineering, and
          human-centred design to build technology that matters.
        </p>

        <div class="actions">
          <a class="btn" href="#projects">Explore my work ↘</a>
          <a class="btn secondary" href="#about">A little about me ↗</a>
        </div>

        <div class="micro">
          <span><strong>01</strong> / Learn</span>
          <span><strong>02</strong> / Build</span>
          <span><strong>03</strong> / Iterate</span>
        </div>
      </div>

      <div class="orbital" aria-label="AI-inspired glowing orb">
        <div class="core"></div>

        <div class="orbit-label ol1">
          <b>Machine learning</b>
          <small>Patterns → predictions</small>
        </div>

        <div class="orbit-label ol2">
          <b>Generative AI</b>
          <small>Context → intelligence</small>
        </div>

        <div class="orbit-label ol3">
          <b>Computer vision</b>
          <small>Pixels → insight</small>
        </div>
      </div>
    </div>

    <div class="wrap hero-bottom">
      <span>Independent mind. Practical AI.</span>
      <span class="scroll-cue">
        <span class="scroll-line"></span>
        Scroll to explore ↓
      </span>
    </div>
  </section>

  <!-- ABOUT SECTION -->
  <section class="section about" id="about">
    <div class="wrap">
      <div class="section-head reveal">
        <div>
          <div class="kicker">01 / The person behind the models</div>
          <h2>Curiosity is my<br>favourite tool.</h2>
        </div>
        <p class="section-intro">
          I’m an AI developer in progress, driven by the challenge
          of turning complex ideas into useful, understandable products.
        </p>
      </div>

      <div class="about-grid">
        <div class="about-stamp reveal">
          <div class="stamp-big">AI<br>/01</div>
          <div class="stamp-bottom">
            <span>Learn by building</span>
            <span>Always in beta ↗</span>
          </div>
        </div>

        <div class="about-text reveal">
          <p>
            I believe good AI is more than a clever model. It’s a
            complete experience —
            <span class="inline-highlight">
              reliable, explainable, and built around a real problem.
            </span>
          </p>

          <p class="muted">
            My work explores Python, machine learning,
            retrieval-augmented generation, and computer vision.
            I enjoy moving from a rough idea to a working prototype,
            testing assumptions, and improving the details that make
            a project genuinely useful.
          </p>

          <p class="muted">
            This portfolio is a snapshot of that journey:
            experiments, lessons, and projects that keep pushing me forward.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- SKILLS SECTION -->
  <section class="section" id="skills">
    <div class="wrap">
      <div class="section-head reveal">
        <div>
          <div class="kicker">02 / My toolkit</div>
          <h2>From raw data<br>to real-world AI.</h2>
        </div>
        <p class="section-intro">
          A growing toolkit for building end-to-end intelligent
          applications — from data preparation to the user-facing experience.
        </p>
      </div>

      <div class="skills">
        <article class="skill reveal">
          <span class="skill-num">01 / LANGUAGE</span>
          <h3>Python & data</h3>
          <p>Data wrangling, scripting, notebooks, and clean problem-solving workflows.</p>
        </article>

        <article class="skill reveal">
          <span class="skill-num">02 / INTELLIGENCE</span>
          <h3>Machine learning</h3>
          <p>Model training, evaluation, feature thinking, and measuring what matters.</p>
        </article>

        <article class="skill reveal">
          <span class="skill-num">03 / VISION</span>
          <h3>Computer vision</h3>
          <p>Image processing, segmentation, classification, and visual inference.</p>
        </article>

        <article class="skill reveal">
          <span class="skill-num">04 / LANGUAGE</span>
          <h3>RAG & LLM apps</h3>
          <p>Embeddings, retrieval, context-aware answers, and document-based assistants.</p>
        </article>

        <article class="skill reveal">
          <span class="skill-num">05 / ENGINEERING</span>
          <h3>APIs & integration</h3>
          <p>Connecting models to usable interfaces, services, and application workflows.</p>
        </article>

        <article class="skill reveal">
          <span class="skill-num">06 / SHIP IT</span>
          <h3>Web & tooling</h3>
          <p>HTML, CSS, JavaScript, Git, experimentation, and iterative delivery.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- PROJECTS SECTION -->
  <section class="section projects" id="projects">
    <div class="wrap">
      <div class="projects-top reveal">
        <div>
          <div class="kicker">03 / Selected experiments</div>
          <h2>Ideas, meet<br>implementation.</h2>
        </div>
        <div class="project-counter">A few things I’m building ↘</div>
      </div>

      <div class="project-track">
        <article class="project-card reveal">
          <div class="project-art">
            <svg viewBox="0 0 300 180" fill="none" aria-hidden="true">
              <g stroke="#c5ff78" stroke-opacity=".7">
                <path d="M35 48L92 26 144 56 203 28 263 61
                M35 48L58 113 119 145 178 107 238 134 263 61
                M92 26L119 145 M144 56L178 107 203 28
                M58 113L144 56 238 134"/>
                <circle cx="35" cy="48" r="5" fill="#c5ff78"/>
                <circle cx="92" cy="26" r="5" fill="#c5ff78"/>
                <circle cx="144" cy="56" r="6" fill="#c5ff78"/>
                <circle cx="203" cy="28" r="5" fill="#c5ff78"/>
                <circle cx="263" cy="61" r="5" fill="#c5ff78"/>
                <circle cx="58" cy="113" r="5" fill="#c5ff78"/>
                <circle cx="119" cy="145" r="5" fill="#c5ff78"/>
                <circle cx="178" cy="107" r="6" fill="#c5ff78"/>
                <circle cx="238" cy="134" r="5" fill="#c5ff78"/>
              </g>
              <circle cx="151" cy="85" r="28" stroke="#c5ff78" stroke-width="1.5"/>
              <path d="M141 85h20M151 75v20" stroke="#c5ff78" stroke-width="2"/>
            </svg>
          </div>

          <div class="project-body">
            <div class="project-type">Generative AI · RAG</div>
            <h3>College Explorer</h3>
            <p>
              A document-grounded assistant designed to help students
              find college rules, schedules, and course information
              through contextual answers.
            </p>
            <div class="tags">
              <span class="tag">Python</span>
              <span class="tag">Embeddings</span>
              <span class="tag">RAG</span>
            </div>
            <a class="project-link" href="https://github.com/" target="_blank" rel="noreferrer">
              View project repository ↗
            </a>
          </div>
        </article>

        <article class="project-card reveal">
          <div class="project-art art-two">
            <svg viewBox="0 0 300 180" fill="none" aria-hidden="true">
              <path d="M0 48Q35 36 70 51T140 48T210 50T300 44
              M0 78Q35 66 70 81T140 78T210 80T300 74
              M0 108Q35 96 70 111T140 108T210 110T300 104
              M0 138Q35 126 70 141T140 138T210 140T300 134"
              stroke="#80bfff" stroke-opacity=".35"/>
              <path d="M52 112C83 87 94 104 122 72S173 63 191 90
              227 105 250 62" stroke="#80bfff" stroke-width="2"
              stroke-dasharray="5 5"/>
              <ellipse cx="143" cy="96" rx="57" ry="22"
              transform="rotate(-23 143 96)" stroke="#80bfff" stroke-width="2"/>
              <ellipse cx="143" cy="96" rx="35" ry="11"
              transform="rotate(-23 143 96)" stroke="#80bfff"/>
              <circle cx="143" cy="96" r="5" fill="#80bfff"/>
            </svg>
          </div>

          <div class="project-body">
            <div class="project-type">Computer vision · Earth observation</div>
            <h3>Oil Spill Intelligence</h3>
            <p>
              An experimental SAR-image workflow exploring spill-region
              segmentation and classification against oil-spill look-alikes.
            </p>
            <div class="tags">
              <span class="tag">Deep learning</span>
              <span class="tag">SAR imagery</span>
              <span class="tag">Segmentation</span>
            </div>
            <a class="project-link" href="https://github.com/" target="_blank" rel="noreferrer">
              View project repository ↗
            </a>
          </div>
        </article>

        <article class="project-card reveal">
          <div class="project-art art-three">
            <svg viewBox="0 0 300 180" fill="none" aria-hidden="true">
              <g stroke="#ffd780" stroke-opacity=".8">
                <rect x="65" y="28" width="170" height="124" rx="7"/>
                <path d="M82 48h136M82 63h90M82 78h112M82 93h65M82 122h136"/>
                <path d="M183 79l10 10 20-24" stroke-width="3"
                stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="201" cy="83" r="25" stroke-dasharray="3 5"/>
              </g>
            </svg>
          </div>

          <div class="project-body">
            <div class="project-type">AI engineering · Experiment</div>
            <h3>Applied AI Lab</h3>
            <p>
              A space for small prototypes, model evaluations, and
              experiments that turn new techniques into practical demos.
            </p>
            <div class="tags">
              <span class="tag">Python</span>
              <span class="tag">Evaluation</span>
              <span class="tag">Prototyping</span>
            </div>
            <a class="project-link" href="https://github.com/" target="_blank" rel="noreferrer">
              Explore experiments ↗
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- JOURNEY SECTION -->
  <section class="section journey" id="journey">
    <div class="wrap">
      <div class="section-head reveal">
        <div>
          <div class="kicker">04 / The journey</div>
          <h2>Progress over<br>perfection.</h2>
        </div>
        <p class="section-intro">
          Every project teaches something new. This is a living timeline
          for your milestones, internships, events, and achievements.
        </p>
      </div>

      <div class="timeline">
        <div class="timeline-item reveal">
          <div class="timeline-date">THE FOUNDATION</div>
          <h3>Learning the fundamentals</h3>
          <p>Strengthening programming, data structures, and the math and intuition behind machine learning.</p>
        </div>

        <div class="timeline-item reveal">
          <div class="timeline-date">BUILDING MODE</div>
          <h3>From tutorials to projects</h3>
          <p>Applying new concepts to working prototypes, learning through debugging, iteration, and evaluation.</p>
        </div>

        <div class="timeline-item reveal">
          <div class="timeline-date">WHAT'S NEXT</div>
          <h3>Build. Share. Improve.</h3>
          <p>Shipping projects, collaborating with other builders, and making AI systems more useful and trustworthy.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT SECTION -->
  <section class="contact" id="contact">
    <div class="wrap">
      <div class="contact-panel reveal">
        <div class="kicker">05 / Open to ideas & collaboration</div>
        <h2>Have a problem<br>worth <span>solving?</span></h2>
        <p>
          I’m interested in thoughtful projects, learning opportunities,
          and conversations about AI. Let’s make something useful.
        </p>

        <div class="actions">
          <a class="btn" href="mailto:your.email@example.com">Email me ↗</a>
          <a class="btn secondary" href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>

        <div class="contact-bottom">
          <span>© <span id="year"></span> YOUR NAME · MADE WITH CURIOSITY</span>
          <div class="socials">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>

<script>
/* 1. Update the scroll progress bar */
const progress = document.getElementById("progress");

function updateProgress() {
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const percentage = maxScroll > 0
    ? (window.scrollY / maxScroll) * 100
    : 0;

  progress.style.width = percentage + "%";
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

/* 2. Update the copyright year */
document.getElementById("year").textContent =
  new Date().getFullYear();

/* 3. Animate content when it enters the viewport */
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  document.querySelectorAll(".reveal").forEach((element, index) => {
    /* Stagger cards for a cascading animation */
    if (
      element.classList.contains("skill") ||
      element.classList.contains("project-card")
    ) {
      element.style.transitionDelay = `${(index % 3) * 110}ms`;
    }

    revealObserver.observe(element);
  });

  /* 4. Highlight the navigation link for the active section */
  const sections = document.querySelectorAll(
    "main section[id]"
  );

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".navlinks a").forEach((link) => {
            const active =
              link.getAttribute("href") === `#${entry.target.id}`;

            link.classList.toggle("current-section", active);
          });
        }
      });
    },
    {
      rootMargin: "-30% 0px -55% 0px"
    }
  );

  sections.forEach((section) => navObserver.observe(section));
} else {
  /* Keep everything visible when reduced motion is requested */
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("visible");
  });
}

/* 5. Slight parallax movement on the AI orb */
if (!reduceMotion) {
  const orb = document.querySelector(".orbital");
  let queued = false;

  window.addEventListener("scroll", () => {
    if (queued) return;

    queued = true;

    requestAnimationFrame(() => {
      const y = Math.min(window.scrollY, 600);
      orb.style.transform = `translateY(${y * 0.075}px)`;
      queued = false;
    });
  }, { passive: true });
}
</script>

</body>
</html>
