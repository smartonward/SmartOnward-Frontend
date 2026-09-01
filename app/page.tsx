"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal:not(.is-visible)");
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
      );
      revealItems.forEach((item) => revealObserver.observe(item));
      return () => revealObserver.disconnect();
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="#home" className="logo" aria-label="SmartOnward home">
            <img
              src="/logo.png"
              alt="SmartOnward Logo"
              className="logo-img"
              height={28}
              style={{ height: "28px", width: "auto", maxHeight: "28px", objectFit: "contain" }}
            />
            <div className="logo-text">
              <span>Smart</span>Onward
            </div>
          </a>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#work" onClick={closeMenu}>
                What We Build
              </a>
            </li>
            <li>
              <a href="#process" onClick={closeMenu}>
                How We Work
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-cta"
                onClick={closeMenu}
              >
                Get Started →
              </a>
            </li>
          </ul>

          <button
            className="menu-btn"
            id="menuBtn"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-inner reveal is-visible">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot"></span> Digital Growth &amp; Automation Agency
            </div>

            <h1>
              Build. <span className="blue">Grow.</span>
              <br />
              Automate.
              <br />
              <span className="green">Move onward.</span>
            </h1>

            <p className="hero-sub">
              SmartOnward helps businesses build a stronger digital presence, attract more customers and automate repetitive work — through websites, branding, content, marketing and AI.
            </p>

            <div className="hero-btns">
              <a href="#contact" className="btn-primary">
                Start Your Project →
              </a>
              <a href="#services" className="btn-secondary">
                Explore Our Services
              </a>
            </div>

            <div className="hero-note">
              <span className="dot"></span> One team for strategy, creative, technology and growth.
            </div>
          </div>

          <div className="hero-visual">
            <div className="growth-card">
              <div className="growth-card-head">
                <span className="growth-label">SmartOnward Growth System</span>
                <span className="live-pill">Built around you</span>
              </div>

              <div className="engine">
                <div className="engine-box engine-build">
                  <strong>BUILD</strong>
                  <small>
                    Websites
                    <br />
                    Branding
                    <br />
                    Design
                  </small>
                </div>
                <div className="engine-box engine-grow">
                  <strong>GROW</strong>
                  <small>
                    Content
                    <br />
                    Social
                    <br />
                    Marketing
                  </small>
                </div>
                <div className="engine-box engine-auto">
                  <strong>AUTOMATE</strong>
                  <small>
                    AI Agents
                    <br />
                    Chatbots
                    <br />
                    Workflows
                  </small>
                </div>
              </div>

              <div className="flow-line"></div>

              <div className="growth-output">
                <div className="output-item">
                  <b>Presence</b>
                  <span>Look credible online</span>
                </div>
                <div className="output-item">
                  <b>Leads</b>
                  <span>Reach the right people</span>
                </div>
                <div className="output-item">
                  <b>Efficiency</b>
                  <span>Reduce manual work</span>
                </div>
              </div>

              <div className="card-foot">
                <span>One connected digital partner</span>
                <strong>SmartOnward ↗</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-inner">
          <div className="trust-item">
            <div className="trust-icon">✓</div>Business-first strategy
          </div>
          <div className="trust-item">
            <div className="trust-icon">✓</div>Web + Creative + Marketing
          </div>
          <div className="trust-item">
            <div className="trust-icon">✓</div>AI &amp; Automation
          </div>
          <div className="trust-item">
            <div className="trust-icon">✓</div>Clear communication
          </div>
          <div className="trust-item">
            <div className="trust-icon">✓</div>One team, multiple capabilities
          </div>
        </div>
      </div>

      {/* ABOUT / WHO WE ARE */}
      <section className="about-intro" id="about">
        <div className="section-inner">
          <div className="about-grid reveal">
            <div className="about-copy">
              <div className="section-eyebrow">Who We Are</div>
              <h2 className="section-title">
                We are <span>SmartOnward.</span>
              </h2>
              <p className="section-sub">
                A digital growth and automation agency built for businesses that want more from their online presence.
              </p>
              <p className="section-sub">
                We combine strategy, design, technology, content, marketing and AI automation to help businesses build stronger digital foundations, attract customers and operate smarter.
              </p>

              <div className="about-points">
                <div className="point">
                  <strong>Build better</strong>
                  <span>Digital experiences that make your business look credible and ready for growth.</span>
                </div>
                <div className="point">
                  <strong>Market smarter</strong>
                  <span>Content and campaigns designed around your audience and business goals.</span>
                </div>
                <div className="point">
                  <strong>Automate more</strong>
                  <span>AI-powered systems that reduce repetitive tasks and improve response time.</span>
                </div>
                <div className="point">
                  <strong>One connected team</strong>
                  <span>Less vendor coordination. More consistency across your digital presence.</span>
                </div>
              </div>
            </div>

            <div className="system-card">
              <div className="system-top">
                <span>Your digital growth system</span>
                <span className="system-badge">CONNECTED</span>
              </div>

              <div className="system-flow">
                <div className="system-row">
                  <div className="system-row-label">FOUNDATION</div>
                  <div className="system-track">
                    <span className="mini-tag">Website</span>
                    <span className="mini-tag">Brand</span>
                    <span className="mini-tag">UI/UX</span>
                  </div>
                </div>
                <div className="system-row">
                  <div className="system-row-label">ATTENTION</div>
                  <div className="system-track">
                    <span className="mini-tag">Reels</span>
                    <span className="mini-tag">Social</span>
                    <span className="mini-tag">Ads</span>
                    <span className="mini-tag">SEO</span>
                  </div>
                </div>
                <div className="system-row">
                  <div className="system-row-label">CONVERSION</div>
                  <div className="system-track">
                    <span className="mini-tag">Landing Pages</span>
                    <span className="mini-tag">Lead Forms</span>
                    <span className="mini-tag">Funnels</span>
                  </div>
                </div>
                <div className="system-row">
                  <div className="system-row-label">AUTOMATION</div>
                  <div className="system-track">
                    <span className="mini-tag">AI Agents</span>
                    <span className="mini-tag">WhatsApp</span>
                    <span className="mini-tag">Workflows</span>
                  </div>
                </div>
              </div>

              <p className="system-caption">
                The goal is not to add more digital tools. It is to make the right pieces work together around your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">Our Services</div>
            <h2 className="section-title">
              Everything you need to <span>move onward.</span>
            </h2>
            <p className="section-sub">
              From building your digital presence to growing your audience and automating everyday work, SmartOnward brings the right capabilities together under one roof.
            </p>
          </div>

          <div className="service-grid">
            {/* 01 WEBSITE */}
            <Link
              href="/website-development"
              className="service-card-link"
              aria-label="Explore Website Development"
            >
              <article className="service-card-new blue">
                <div className="service-card-top">
                  <div className="service-icon-wrap">
                    <svg viewBox="0 0 100 80" fill="none" aria-hidden="true">
                      <rect
                        x="12"
                        y="11"
                        width="57"
                        height="48"
                        rx="6"
                        fill="#DBEAFE"
                        stroke="#2563EB"
                        strokeWidth="2"
                      />
                      <path d="M12 23h57" stroke="#2563EB" strokeWidth="2" />
                      <circle cx="19" cy="17" r="2" fill="#2563EB" />
                      <circle cx="26" cy="17" r="2" fill="#60A5FA" />
                      <circle cx="33" cy="17" r="2" fill="#93C5FD" />
                      <rect
                        x="20"
                        y="30"
                        width="19"
                        height="15"
                        rx="2"
                        fill="#fff"
                        stroke="#93C5FD"
                      />
                      <path
                        d="M22 42l6-6 4 4 3-3 4 5"
                        stroke="#2563EB"
                        strokeWidth="1.7"
                      />
                      <rect
                        x="44"
                        y="30"
                        width="17"
                        height="3"
                        rx="1.5"
                        fill="#93C5FD"
                      />
                      <rect
                        x="44"
                        y="37"
                        width="13"
                        height="3"
                        rx="1.5"
                        fill="#BFDBFE"
                      />
                      <rect
                        x="44"
                        y="44"
                        width="9"
                        height="3"
                        rx="1.5"
                        fill="#DBEAFE"
                      />
                      <rect
                        x="68"
                        y="25"
                        width="20"
                        height="38"
                        rx="4"
                        fill="#fff"
                        stroke="#2563EB"
                        strokeWidth="2"
                      />
                      <rect
                        x="72"
                        y="30"
                        width="12"
                        height="22"
                        rx="2"
                        fill="#EFF6FF"
                      />
                      <circle cx="78" cy="57" r="2" fill="#2563EB" />
                    </svg>
                  </div>
                  <div className="service-number">01</div>
                </div>
                <h3>Website Development</h3>
                <p>
                  Fast, responsive websites and landing pages that make your value clear and turn visits into action.
                </p>
                <div className="service-tags-new">
                  <span className="service-tag-new">Business Websites</span>
                  <span className="service-tag-new">Landing Pages</span>
                  <span className="service-tag-new">UI/UX</span>
                  <span className="service-tag-new">SEO</span>
                </div>
                <div className="service-card-badge-link">
                  <span>Explore Service</span>
                  <span>→</span>
                </div>
              </article>
            </Link>

            {/* 02 BRANDING */}
            <Link
              href="/branding-and-visual-design"
              className="service-card-link"
              aria-label="Explore Branding & Visual Design"
            >
              <article className="service-card-new green">
                <div className="service-card-top">
                  <div className="service-icon-wrap">
                    <svg viewBox="0 0 100 80" fill="none" aria-hidden="true">
                      <rect
                        x="16"
                        y="18"
                        width="48"
                        height="39"
                        rx="7"
                        fill="#DCFCE7"
                      />
                      <path
                        d="M26 29h22"
                        stroke="#22C55E"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M26 38h28"
                        stroke="#86EFAC"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M26 47h17"
                        stroke="#BBF7D0"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <rect
                        x="57"
                        y="13"
                        width="28"
                        height="28"
                        rx="7"
                        fill="#fff"
                        stroke="#22C55E"
                        strokeWidth="2"
                      />
                      <path
                        d="M66 34V21l13 13M69 26h8"
                        stroke="#16A34A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="22" cy="62" r="7" fill="#22C55E" />
                      <path
                        d="M19 62l2 2 4-5"
                        stroke="#fff"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="service-number">02</div>
                </div>
                <h3>Branding &amp; Visual Design</h3>
                <p>
                  Build a recognizable identity with logo systems, brand guidelines and professional business collateral.
                </p>
                <div className="service-tags-new">
                  <span className="service-tag-new">Logo Design</span>
                  <span className="service-tag-new">Brand Identity</span>
                  <span className="service-tag-new">Pitch Decks</span>
                  <span className="service-tag-new">Collateral</span>
                </div>
                <div className="service-card-badge-link" style={{ color: "#16A34A" }}>
                  <span>Explore Service</span>
                  <span>→</span>
                </div>
              </article>
            </Link>

            {/* 03 VIDEO */}
            <Link
              href="/video-and-reels"
              className="service-card-link"
              aria-label="Explore Video & Reels"
            >
              <article className="service-card-new purple">
                <div className="service-card-top">
                  <div className="service-icon-wrap">
                    <svg viewBox="0 0 100 80" fill="none" aria-hidden="true">
                      <path
                        d="M18 20l9-7h49a5 5 0 015 5v29a5 5 0 01-5 5H23a5 5 0 01-5-5V20z"
                        fill="#EDE9FE"
                        stroke="#7C3AED"
                        strokeWidth="2"
                      />
                      <path d="M18 20h63l-10-9H27l-9 9z" fill="#C4B5FD" />
                      <path d="M45 25l15 9-15 9V25z" fill="#7C3AED" />
                      <rect
                        x="62"
                        y="40"
                        width="24"
                        height="25"
                        rx="6"
                        fill="#fff"
                        stroke="#7C3AED"
                        strokeWidth="2"
                      />
                      <path d="M62 48h24" stroke="#A78BFA" strokeWidth="2" />
                      <path d="M69 54l7 4-7 4V54z" fill="#7C3AED" />
                    </svg>
                  </div>
                  <div className="service-number">03</div>
                </div>
                <h3>Video &amp; Reels</h3>
                <p>
                  Create attention-grabbing short-form content, promotional videos, product videos and AI-assisted creative.
                </p>
                <div className="service-tags-new">
                  <span className="service-tag-new">Reels</span>
                  <span className="service-tag-new">Promotional Videos</span>
                  <span className="service-tag-new">AI Video</span>
                  <span className="service-tag-new">Editing</span>
                </div>
                <div className="service-card-badge-link" style={{ color: "#7C3AED" }}>
                  <span>Explore Service</span>
                  <span>→</span>
                </div>
              </article>
            </Link>

            {/* 04 SOCIAL */}
            <Link
              href="/social-media-management"
              className="service-card-link"
              aria-label="Explore Social Media Management"
            >
              <article className="service-card-new orange">
                <div className="service-card-top">
                  <div className="service-icon-wrap">
                    <svg viewBox="0 0 100 80" fill="none" aria-hidden="true">
                      <rect
                        x="25"
                        y="10"
                        width="32"
                        height="56"
                        rx="7"
                        fill="#FFF7ED"
                        stroke="#EA580C"
                        strokeWidth="2"
                      />
                      <rect
                        x="30"
                        y="17"
                        width="22"
                        height="31"
                        rx="3"
                        fill="#FFEDD5"
                      />
                      <circle cx="41" cy="55" r="3" fill="#EA580C" />
                      <rect
                        x="49"
                        y="32"
                        width="31"
                        height="22"
                        rx="7"
                        fill="#fff"
                        stroke="#FB923C"
                        strokeWidth="2"
                      />
                      <path
                        d="M57 39h15M57 45h10"
                        stroke="#FDBA74"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="17" cy="31" r="9" fill="#EA580C" />
                      <path
                        d="M13 31l3 3 5-6"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="62"
                        y="56"
                        width="17"
                        height="14"
                        rx="4"
                        fill="#F97316"
                      />
                      <path
                        d="M66 65l3-3 3 2 4-5"
                        stroke="#fff"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div className="service-number">04</div>
                </div>
                <h3>Social Media Management</h3>
                <p>
                  Stay visible with strategic calendars, posts, reels and community-focused content across key platforms.
                </p>
                <div className="service-tags-new">
                  <span className="service-tag-new">Content Strategy</span>
                  <span className="service-tag-new">Post Creation</span>
                  <span className="service-tag-new">Growth</span>
                  <span className="service-tag-new">Analytics</span>
                </div>
                <div className="service-card-badge-link" style={{ color: "#EA580C" }}>
                  <span>Explore Service</span>
                  <span>→</span>
                </div>
              </article>
            </Link>

            {/* 05 MARKETING */}
            <Link
              href="/digital-marketing"
              className="service-card-link"
              aria-label="Explore Digital Marketing"
            >
              <article className="service-card-new cyan">
                <div className="service-card-top">
                  <div className="service-icon-wrap">
                    <svg viewBox="0 0 100 80" fill="none" aria-hidden="true">
                      <circle
                        cx="40"
                        cy="39"
                        r="25"
                        fill="#ECFEFF"
                        stroke="#0891B2"
                        strokeWidth="2"
                      />
                      <circle
                        cx="40"
                        cy="39"
                        r="16"
                        fill="#fff"
                        stroke="#22D3EE"
                        strokeWidth="2"
                      />
                      <circle cx="40" cy="39" r="7" fill="#0891B2" />
                      <path
                        d="M40 39L66 14"
                        stroke="#2563EB"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M57 16h11v11"
                        stroke="#2563EB"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="67"
                        y="43"
                        width="21"
                        height="24"
                        rx="4"
                        fill="#fff"
                        stroke="#0891B2"
                        strokeWidth="2"
                      />
                      <path
                        d="M72 60V53M77 60V49M82 60V45"
                        stroke="#0891B2"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="service-number">05</div>
                </div>
                <h3>Digital Marketing</h3>
                <p>
                  Reach the right audience through Google Ads, Meta Ads, SEO and lead-generation campaigns built around goals.
                </p>
                <div className="service-tags-new">
                  <span className="service-tag-new">Google Ads</span>
                  <span className="service-tag-new">Meta Ads</span>
                  <span className="service-tag-new">SEO</span>
                  <span className="service-tag-new">Lead Generation</span>
                </div>
                <div className="service-card-badge-link" style={{ color: "#0891B2" }}>
                  <span>Explore Service</span>
                  <span>→</span>
                </div>
              </article>
            </Link>

            {/* 06 AI */}
            <Link
              href="/ai-automation"
              className="service-card-link"
              aria-label="Explore AI Automation"
            >
              <article className="service-card-new darkgreen">
                <div className="service-card-top">
                  <div className="service-icon-wrap">
                    <svg viewBox="0 0 100 80" fill="none" aria-hidden="true">
                      <rect
                        x="23"
                        y="20"
                        width="48"
                        height="37"
                        rx="11"
                        fill="#DCFCE7"
                        stroke="#15803D"
                        strokeWidth="2"
                      />
                      <circle
                        cx="38"
                        cy="38"
                        r="5"
                        fill="#fff"
                        stroke="#15803D"
                        strokeWidth="2"
                      />
                      <circle
                        cx="56"
                        cy="38"
                        r="5"
                        fill="#fff"
                        stroke="#15803D"
                        strokeWidth="2"
                      />
                      <path
                        d="M39 49h16"
                        stroke="#15803D"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M47 20V12M19 37h-7M75 37h7M27 21l-5-5M67 21l5-5"
                        stroke="#22C55E"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <rect
                        x="66"
                        y="45"
                        width="22"
                        height="19"
                        rx="6"
                        fill="#fff"
                        stroke="#22C55E"
                        strokeWidth="2"
                      />
                      <path
                        d="M72 51h10M72 56h7"
                        stroke="#86EFAC"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="84" cy="58" r="7" fill="#22C55E" />
                      <path
                        d="M81 58l2 2 4-4"
                        stroke="#fff"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="service-number">06</div>
                </div>
                <h3>AI Automation</h3>
                <p>
                  Reduce repetitive work with AI agents, chatbots, WhatsApp workflows, automated follow-ups and smart systems.
                </p>
                <div className="service-tags-new">
                  <span className="service-tag-new">Chatbots</span>
                  <span className="service-tag-new">AI Agents</span>
                  <span className="service-tag-new">WhatsApp</span>
                  <span className="service-tag-new">Workflows</span>
                </div>
                <div className="service-card-badge-link" style={{ color: "#15803D" }}>
                  <span>Explore Service</span>
                  <span>→</span>
                </div>
              </article>
            </Link>
          </div>

          <div className="services-bottom">
            <div>
              <strong>Need more than one service?</strong>
              <br />
              <span>
                We can combine web, branding, content, marketing and automation into one connected growth project.
              </span>
            </div>
            <a href="#contact" className="service-cta">
              Build My Growth System →
            </a>
          </div>
        </div>
      </section>

      {/* BUILD / GROW / AUTOMATE */}
      <section className="strategy-section" id="growth-system">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">How We Help You Grow</div>
            <h2 className="section-title">
              Services built around your <span>business.</span>
            </h2>
            <p className="section-sub">
              From your digital foundation to customer growth and smarter operations, we provide the capabilities your business needs under one roof.
            </p>
          </div>

          {/* 3-WAY SERVICE STRATEGY */}
          <div className="service-strategy reveal">
            <article className="strategy-card build">
              <div className="strategy-icon" aria-hidden="true">
                ✦
              </div>
              <div className="strategy-kicker">01 / BUILD</div>
              <h3 className="strategy-title">Build</h3>
              <p className="strategy-desc">
                Create the digital foundation your customers see, remember and trust.
              </p>
              <div className="strategy-divider"></div>
              <ul className="strategy-list">
                <li>
                  <span className="strategy-check">✓</span>Website Development
                </li>
                <li>
                  <span className="strategy-check">✓</span>Landing Pages &amp; UI/UX
                </li>
                <li>
                  <span className="strategy-check">✓</span>Branding &amp; Visual Identity
                </li>
                <li>
                  <span className="strategy-check">✓</span>Business &amp; Marketing Collateral
                </li>
              </ul>
            </article>

            <article className="strategy-card grow">
              <div className="strategy-icon" aria-hidden="true">
                ↗
              </div>
              <div className="strategy-kicker">02 / GROW</div>
              <h3 className="strategy-title">Grow</h3>
              <p className="strategy-desc">
                Turn attention into visibility, engagement, enquiries and opportunities.
              </p>
              <div className="strategy-divider"></div>
              <ul className="strategy-list">
                <li>
                  <span className="strategy-check">✓</span>Video &amp; Reels
                </li>
                <li>
                  <span className="strategy-check">✓</span>Social Media Management
                </li>
                <li>
                  <span className="strategy-check">✓</span>Google &amp; Meta Ads
                </li>
                <li>
                  <span className="strategy-check">✓</span>SEO &amp; Lead Generation
                </li>
              </ul>
            </article>

            <article className="strategy-card auto">
              <div className="strategy-icon" aria-hidden="true">
                ⚙
              </div>
              <div className="strategy-kicker">03 / AUTOMATE</div>
              <h3 className="strategy-title">Automate</h3>
              <p className="strategy-desc">
                Use AI and connected workflows to reduce repetitive work and respond faster.
              </p>
              <div className="strategy-divider"></div>
              <ul className="strategy-list">
                <li>
                  <span className="strategy-check">✓</span>AI Chatbots &amp; Agents
                </li>
                <li>
                  <span className="strategy-check">✓</span>WhatsApp Automation
                </li>
                <li>
                  <span className="strategy-check">✓</span>Email &amp; Follow-up Workflows
                </li>
                <li>
                  <span className="strategy-check">✓</span>Business Process Automation
                </li>
              </ul>
            </article>
          </div>

          <div className="strategy-connector">
            <span>One connected digital growth system</span>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section id="audience">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">Who We Help</div>
            <h2 className="section-title">
              Built for businesses ready to <span>move forward.</span>
            </h2>
            <p className="section-sub">
              Whether you are starting from scratch or improving an existing digital presence, we adapt the solution to where your business is today.
            </p>
          </div>

          <div className="audience-grid reveal">
            <div className="audience-card">
              <div className="audience-icon">🚀</div>
              <h3>Startups</h3>
              <p>Build your brand and digital foundation from the ground up.</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">📈</div>
              <h3>Growing Businesses</h3>
              <p>Upgrade your presence, marketing and customer acquisition.</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">🏪</div>
              <h3>Local Businesses</h3>
              <p>Get discovered, generate enquiries and automate customer interactions.</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">🛍️</div>
              <h3>D2C &amp; Brands</h3>
              <p>Build content, campaigns and digital experiences around your customers.</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon">💼</div>
              <h3>Professionals</h3>
              <p>Build authority through websites, branding and consistent content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="work-section" id="work">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">What We Build</div>
            <h2 className="section-title">
              From digital presence to <span>business systems.</span>
            </h2>
            <p className="section-sub">
              Our work is designed to solve practical business needs — not simply to add another digital asset.
            </p>
          </div>

          <div className="work-grid reveal">
            <div className="work-card">
              <div className="work-index">01 / DIGITAL PRESENCE</div>
              <h3>Websites that explain and convert.</h3>
              <p>
                Business websites, landing pages and UI/UX experiences that make your offer easy to understand and easy to act on.
              </p>
              <div className="work-tags">
                <span className="tag">Business Websites</span>
                <span className="tag">Landing Pages</span>
                <span className="tag">UI/UX</span>
                <span className="tag">SEO Ready</span>
              </div>
            </div>

            <div className="work-card">
              <div className="work-index">02 / BRAND &amp; CONTENT</div>
              <h3>A brand people can recognize.</h3>
              <p>
                Visual identity, social content, reels and marketing assets that create consistency across every customer touchpoint.
              </p>
              <div className="work-tags">
                <span className="tag">Brand Identity</span>
                <span className="tag">Reels</span>
                <span className="tag">Social Content</span>
                <span className="tag">Creative</span>
              </div>
            </div>

            <div className="work-card">
              <div className="work-index">03 / CUSTOMER GROWTH</div>
              <h3>Marketing that has a job to do.</h3>
              <p>
                Search, paid campaigns, social media and lead-generation systems built around visibility, enquiries and measurable goals.
              </p>
              <div className="work-tags">
                <span className="tag">Google Ads</span>
                <span className="tag">Meta Ads</span>
                <span className="tag">SEO</span>
                <span className="tag">Lead Generation</span>
              </div>
            </div>

            <div className="work-card">
              <div className="work-index">04 / AI &amp; AUTOMATION</div>
              <h3>Systems that work while you focus on business.</h3>
              <p>
                AI agents, chatbots, WhatsApp workflows and automated follow-ups that reduce manual work and improve response time.
              </p>
              <div className="work-tags">
                <span className="tag">AI Agents</span>
                <span className="tag">Chatbots</span>
                <span className="tag">WhatsApp</span>
                <span className="tag">Workflows</span>
              </div>
            </div>
          </div>

          <div className="work-note">
            <strong>Looking for something specific?</strong> SmartOnward can combine multiple capabilities into one project — for example, a new website + brand identity + content system + lead-generation setup + AI chatbot.
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">How We Work</div>
            <h2 className="section-title">
              From idea to <span>impact.</span>
            </h2>
            <p className="section-sub">
              A clear, structured process so you know what is happening, why it matters and what comes next.
            </p>
          </div>

          <div className="process-wrap reveal">
            <div className="process-line"></div>
            <div className="process-grid">
              <div className="process-node">
                <div className="process-circle pc1">
                  <span className="num">01</span>
                  <strong>Discover</strong>
                </div>
                <h4>Understand</h4>
                <p>Goals, audience, offer &amp; current challenges.</p>
              </div>
              <div className="process-node">
                <div className="process-circle pc2">
                  <span className="num">02</span>
                  <strong>Strategize</strong>
                </div>
                <h4>Plan</h4>
                <p>The right roadmap for your business.</p>
              </div>
              <div className="process-node">
                <div className="process-circle pc3">
                  <span className="num">03</span>
                  <strong>Build</strong>
                </div>
                <h4>Create</h4>
                <p>Design, content, technology &amp; systems.</p>
              </div>
              <div className="process-node">
                <div className="process-circle pc4">
                  <span className="num">04</span>
                  <strong>Launch</strong>
                </div>
                <h4>Activate</h4>
                <p>Connect tools, publish assets &amp; go live.</p>
              </div>
              <div className="process-node">
                <div className="process-circle pc5">
                  <span className="num">05</span>
                  <strong>Optimize</strong>
                </div>
                <h4>Improve</h4>
                <p>Review performance and refine what matters.</p>
              </div>
              <div className="process-node">
                <div className="process-circle pc6">
                  <span className="num">06</span>
                  <strong>Grow</strong>
                </div>
                <h4>Move onward</h4>
                <p>Keep improving your digital engine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SMARTONWARD */}
      <section className="why-section">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">Why SmartOnward</div>
            <h2 className="section-title">
              More than a collection of <span>services.</span>
            </h2>
            <p className="section-sub">
              We bring strategy, creative, technology and marketing together so the pieces of your digital presence work toward the same business goal.
            </p>
          </div>

          <div className="why-grid reveal">
            <div className="why-card">
              <div className="why-icon">01</div>
              <div>
                <h3>One team. Multiple capabilities.</h3>
                <p>
                  No need to coordinate separate web, design, marketing and automation vendors for every project.
                </p>
              </div>
            </div>
            <div className="why-card">
              <div className="why-icon">02</div>
              <div>
                <h3>Strategy before execution.</h3>
                <p>
                  We start with what you are trying to achieve, then decide what should be built, marketed or automated.
                </p>
              </div>
            </div>
            <div className="why-card">
              <div className="why-icon">03</div>
              <div>
                <h3>Built around your business.</h3>
                <p>
                  Your audience, offer, workflow and goals shape the solution — not a generic template.
                </p>
              </div>
            </div>
            <div className="why-card">
              <div className="why-icon">04</div>
              <div>
                <h3>Creative + technology.</h3>
                <p>
                  We combine design and content with modern web technology and practical AI automation.
                </p>
              </div>
            </div>
            <div className="why-card">
              <div className="why-icon">05</div>
              <div>
                <h3>Clear communication.</h3>
                <p>
                  You should always know what is being built, why it matters and what happens next.
                </p>
              </div>
            </div>
            <div className="why-card">
              <div className="why-icon">06</div>
              <div>
                <h3>Designed to scale.</h3>
                <p>
                  Start with what your business needs today and add capabilities as your goals and operations grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">By The Numbers</div>
            <h2 className="section-title">
              Results we&apos;re <span style={{ color: "var(--green)" }}>proud of.</span>
            </h2>
            <p className="section-sub" style={{ color: "#94A3B8" }}>
              The numbers below reflect SmartOnward&apos;s current track record and delivery model.
            </p>
          </div>

          <div className="stats-grid reveal">
            <div className="stat-box">
              <div className="stat-num">
                50<span>+</span>
              </div>
              <div className="stat-desc">Projects delivered</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">
                95<span>%</span>
              </div>
              <div className="stat-desc">Client satisfaction rate</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">
                6<span>+</span>
              </div>
              <div className="stat-desc">Service categories</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">
                5<span>–15</span>
              </div>
              <div className="stat-desc">Days to go live</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI AUTOMATION */}
      <section className="ai-section">
        <div className="section-inner">
          <div className="ai-grid reveal">
            <div>
              <div className="section-eyebrow">AI &amp; Automation</div>
              <h2 className="section-title">
                Make your business <span>work smarter.</span>
              </h2>
              <p className="section-sub">
                AI automation is not about adding a chatbot for the sake of it. We identify repetitive tasks and customer interactions where automation can create practical value.
              </p>

              <div className="ai-list">
                <div className="ai-item">
                  AI Chatbots<span>Answer common customer questions.</span>
                </div>
                <div className="ai-item">
                  AI Agents<span>Handle defined tasks and workflows.</span>
                </div>
                <div className="ai-item">
                  WhatsApp Automation<span>Respond and follow up faster.</span>
                </div>
                <div className="ai-item">
                  Lead Qualification<span>Capture and organize enquiries.</span>
                </div>
                <div className="ai-item">
                  Automated Follow-ups<span>Reduce missed opportunities.</span>
                </div>
                <div className="ai-item">
                  Business Workflows<span>Connect repetitive steps automatically.</span>
                </div>
              </div>
            </div>

            <div className="ai-visual">
              <div className="chat-head">
                <div className="chat-brand">
                  <span className="chat-dot"></span> SmartOnward AI Assistant
                </div>
                <span className="chat-status">● Online</span>
              </div>
              <div className="chat-body">
                <div className="bubble bot">
                  Hi! I can help answer questions, collect lead details and route enquiries to your team.
                </div>
                <div className="bubble user">
                  I&apos;d like to know more about your services.
                </div>
                <div className="bubble bot">
                  Absolutely. I can show you our website, marketing and AI automation options. I can also collect your requirements for a project consultation.
                </div>
              </div>
              <div className="chat-actions">
                <div className="chat-action">View Services</div>
                <div className="chat-action">Start a Project</div>
                <div className="chat-action">Talk to Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">Client Stories</div>
            <h2 className="section-title">
              What our clients <span>say.</span>
            </h2>
          </div>

          <div className="testimonials-grid reveal">
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">
                &quot;SmartOnward built our website in just 6 days. The design was clean, professional and exactly what we wanted. Already getting enquiries through the contact form!&quot;
              </p>
              <div className="testi-author">
                <div className="testi-avatar">R</div>
                <div>
                  <div className="testi-name">Rahul Sharma</div>
                  <div className="testi-role">Owner, RS Traders</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">
                &quot;Our Instagram following grew 3x in 2 months after SmartOnward took over our social media. The reels they create are genuinely creative and get real engagement.&quot;
              </p>
              <div className="testi-author">
                <div className="testi-avatar">P</div>
                <div>
                  <div className="testi-name">Priya Joshi</div>
                  <div className="testi-role">Founder, Bloom Boutique</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">
                &quot;The WhatsApp automation they set up saves us 3 hours every day. Customers get instant replies and our booking rate has gone up significantly.&quot;
              </p>
              <div className="testi-author">
                <div className="testi-avatar">A</div>
                <div>
                  <div className="testi-name">Amit Kulkarni</div>
                  <div className="testi-role">Director, AK Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAGLINE */}
      <section className="tagline-section">
        <div className="tagline-card">
          <blockquote>
            &quot;We don&apos;t just market your brand.
            <br />
            We <em>move it onward.</em>&quot;
          </blockquote>
          <p>
            SmartOnward — digital growth, creative execution and practical automation for businesses ready for the next step.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="section-inner">
          <div className="section-eyebrow">Let&apos;s Work Together</div>
          <h2 className="section-title">
            Ready to move your
            <br />
            <span style={{ color: "var(--green)" }}>business onward?</span>
          </h2>
          <p className="section-sub">
            Tell us what you&apos;re building, improving or trying to automate. We&apos;ll help you identify the right digital solution and next steps.
          </p>
          <div className="cta-btns">
            <a href="mailto:hello@smartonward.com" className="btn-primary">
              Start a Project →
            </a>
            <a href="https://wa.me/91XXXXXXXXXX" className="cta-secondary">
              💬 Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo" style={{ marginBottom: 0 }}>
                <img
                  src="/logo.png"
                  alt="SmartOnward Logo"
                  className="logo-img"
                  height={28}
                  style={{ height: "28px", width: "auto", maxHeight: "28px", objectFit: "contain" }}
                />
                <div className="logo-text" style={{ color: "#fff" }}>
                  <span style={{ color: "#60A5FA" }}>Smart</span>Onward
                </div>
              </div>
              <p>
                SmartOnward is a digital growth and automation agency helping businesses build their presence, grow their reach and automate everyday work.
              </p>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link href="/website-development">Website Development</Link>
                </li>
                <li>
                  <Link href="/branding-and-visual-design">Branding &amp; Design</Link>
                </li>
                <li>
                  <Link href="/video-and-reels">Video &amp; Reels</Link>
                </li>
                <li>
                  <Link href="/social-media-management">Social Media</Link>
                </li>
                <li>
                  <Link href="/digital-marketing">Digital Marketing</Link>
                </li>
                <li>
                  <Link href="/ai-automation">AI Automation</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About SmartOnward</a>
                </li>
                <li>
                  <a href="#work">What We Build</a>
                </li>
                <li>
                  <a href="#process">Our Process</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="https://wa.me/91XXXXXXXXXX">WhatsApp</a>
                </li>
                <li>
                  <a href="mailto:hello@smartonward.com">
                    hello@smartonward.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 SmartOnward. All rights reserved. Built with ❤️ in India.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                f
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                ig
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="social-link"
                aria-label="WhatsApp"
              >
                wa
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
