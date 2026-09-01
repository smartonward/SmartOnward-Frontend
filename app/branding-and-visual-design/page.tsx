"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BrandingAndVisualDesignPage() {
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
          <Link href="/" className="logo" aria-label="SmartOnward home">
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
          </Link>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
            <li>
              <Link href="/#services" onClick={closeMenu}>
                All Services
              </Link>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#system" onClick={closeMenu}>
                Brand System
              </a>
            </li>
            <li>
              <a href="#deliverables" onClick={closeMenu}>
                Deliverables
              </a>
            </li>
            <li>
              <a href="#process" onClick={closeMenu}>
                Process
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
      <section className="hero-web" id="hero">
        <div className="hero-web-grid reveal is-visible">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot"></span> Branding &amp; Visual Design
            </div>
            <h1>
              Build a brand people <span>recognize</span> and{" "}
              <em>remember.</em>
            </h1>
            <p className="hero-copy">
              We turn ideas into distinctive brand identities that look
              professional, feel consistent and give your business a visual
              presence built for growth.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">
                Build My Brand →
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </div>
            <div className="hero-web-notes">
              <div className="hero-web-note">
                <b>✓</b> Strategy-led
              </div>
              <div className="hero-web-note">
                <b>✓</b> Consistent identity
              </div>
              <div className="hero-web-note">
                <b>✓</b> Ready to use
              </div>
            </div>
          </div>

          <div className="brand-board">
            <div className="board-top">
              <span className="board-dot"></span>
              <span className="board-dot"></span>
              <span className="board-dot"></span>
              <div className="board-title">brand-system / visual-identity</div>
            </div>
            <div className="brand-canvas">
              <div className="brand-header">
                <div className="brand-label">Brand Identity Board</div>
                <div className="brand-palette">
                  <span className="swatch" style={{ background: "#2563EB" }}></span>
                  <span className="swatch" style={{ background: "#0F172A" }}></span>
                  <span className="swatch" style={{ background: "#22C55E" }}></span>
                  <span className="swatch" style={{ background: "#EFF6FF" }}></span>
                </div>
              </div>
              <div className="brand-main">
                <div className="brand-poster">
                  <div className="poster-logo">
                    <span>Smart</span>Brand
                  </div>
                  <div className="poster-title">
                    Make your
                    <br />
                    brand <em>stand out.</em>
                  </div>
                  <div className="poster-small">
                    A visual identity designed to be clear, confident and
                    memorable.
                  </div>
                </div>
                <div className="brand-side">
                  <div className="identity-card">
                    <div className="identity-title">Typography</div>
                    <div className="identity-word">
                      Aa<span>.</span>
                    </div>
                    <div className="identity-line"></div>
                    <div
                      className="identity-line"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                  <div className="palette-card">
                    <div className="identity-title">Core Palette</div>
                    <div className="palette-row">
                      <div
                        className="palette-dot"
                        style={{ background: "#2563EB" }}
                      ></div>
                      <div
                        className="palette-dot"
                        style={{ background: "#0F172A" }}
                      ></div>
                      <div
                        className="palette-dot"
                        style={{ background: "#22C55E" }}
                      ></div>
                    </div>
                    <div className="palette-caption">Blue · Navy · Green</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="strip">
        <div className="strip-inner">
          <div className="strip-item">
            <strong>360°</strong>
            <span>Brand identity approach</span>
          </div>
          <div className="strip-item">
            <strong>100%</strong>
            <span>Custom design</span>
          </div>
          <div className="strip-item">
            <strong>Ready</strong>
            <span>For digital &amp; print</span>
          </div>
          <div className="strip-item">
            <strong>One</strong>
            <span>Consistent brand system</span>
          </div>
        </div>
      </div>

      {/* SERVICES - WHAT WE CREATE */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">What We Create</div>
            <h2 className="section-title">
              More than a logo. <span>A complete brand.</span>
            </h2>
            <p className="section-sub">
              We create the visual building blocks your business needs to look
              credible everywhere — online, offline and across every customer
              touchpoint.
            </p>
          </div>

          <div className="service-web-grid reveal">
            <div className="service-web-card">
              <div className="web-icon">✦</div>
              <h3>Logo Design</h3>
              <p>
                Distinctive logo concepts built around your business, audience
                and positioning.
              </p>
              <div className="web-tags">
                <span className="web-tag">Concepts</span>
                <span className="web-tag">Logo Suite</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">🎨</div>
              <h3>Brand Identity</h3>
              <p>
                Colors, typography, visual direction and rules that make your
                brand instantly recognizable.
              </p>
              <div className="web-tags">
                <span className="web-tag">Color</span>
                <span className="web-tag">Typography</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">📘</div>
              <h3>Brand Guidelines</h3>
              <p>
                A practical guide showing exactly how your logo and visual
                identity should be used.
              </p>
              <div className="web-tags">
                <span className="web-tag">Brand Book</span>
                <span className="web-tag">Usage Rules</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">💼</div>
              <h3>Business Collateral</h3>
              <p>
                Professional visiting cards, letterheads, invoices, profiles and
                other business essentials.
              </p>
              <div className="web-tags">
                <span className="web-tag">Print</span>
                <span className="web-tag">Office</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">📱</div>
              <h3>Social Media Design</h3>
              <p>
                Templates and visual systems that keep your Instagram, LinkedIn
                and other channels consistent.
              </p>
              <div className="web-tags">
                <span className="web-tag">Posts</span>
                <span className="web-tag">Templates</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">🚀</div>
              <h3>Launch &amp; Campaign Design</h3>
              <p>
                Creative assets for launches, promotions, events, ads and
                campaigns that need attention.
              </p>
              <div className="web-tags">
                <span className="web-tag">Campaigns</span>
                <span className="web-tag">Ads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND SYSTEM */}
      <section className="value-sec" id="system">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">Visual Identity System</div>
            <h2 className="section-title">
              A brand system that stays <span>consistent.</span>
            </h2>
            <p className="section-sub">
              Your identity should work as one connected system — not a
              collection of random designs.
            </p>
          </div>

          <div className="system-grid reveal">
            <div className="system-card">
              <h3>Typography Direction</h3>
              <p>
                Clear type hierarchy creates personality while keeping every
                communication easy to read.
              </p>
              <div className="type-demo">
                <div className="big">
                  Your brand, <span>your voice.</span>
                </div>
                <div className="small">
                  Headlines, supporting text and calls-to-action designed to work
                  together.
                </div>
              </div>
            </div>

            <div className="system-card">
              <h3>Color Language</h3>
              <p>
                A focused palette gives your business a recognizable visual
                signature across every platform.
              </p>
              <div className="color-demo">
                <div className="color-box blue">
                  PRIMARY
                  <br />
                  #2563EB
                </div>
                <div className="color-box navy">
                  DARK
                  <br />
                  #0F172A
                </div>
                <div className="color-box green">
                  ACCENT
                  <br />
                  #22C55E
                </div>
                <div className="color-box light">
                  LIGHT
                  <br />
                  #EFF6FF
                </div>
              </div>
            </div>

            <div className="system-card">
              <h3>Logo System</h3>
              <p>
                Primary, secondary and compact logo variations help your brand
                adapt to different spaces.
              </p>
              <div className="logo-demo">
                <div className="logo-sample">
                  <span>Smart</span>Brand
                </div>
                <div className="logo-shape"></div>
              </div>
            </div>

            <div className="system-card">
              <h3>Visual Consistency</h3>
              <p>
                We define the design language for social posts, presentations,
                websites, print material and campaigns.
              </p>
              <div className="web-tags" style={{ marginTop: "24px" }}>
                <span className="web-tag">Website</span>
                <span className="web-tag">Instagram</span>
                <span className="web-tag">LinkedIn</span>
                <span className="web-tag">PPT</span>
                <span className="web-tag">Brochure</span>
                <span className="web-tag">Ads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="services" id="deliverables">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">Typical Deliverables</div>
            <h2 className="section-title">
              Everything you need to <span>show up professionally.</span>
            </h2>
            <p className="section-sub">
              The final package can be tailored to your business and stage — from
              a focused logo project to a complete visual identity.
            </p>
          </div>

          <div className="deliverable-grid reveal">
            <div className="deliverable">
              <div className="deliverable-num">01</div>
              <h4>Logo Suite</h4>
              <p>Primary, secondary, icon and usable file formats.</p>
            </div>
            <div className="deliverable">
              <div className="deliverable-num">02</div>
              <h4>Brand Colors</h4>
              <p>Primary, secondary and supporting color palette.</p>
            </div>
            <div className="deliverable">
              <div className="deliverable-num">03</div>
              <h4>Typography</h4>
              <p>Font choices and hierarchy for communication.</p>
            </div>
            <div className="deliverable">
              <div className="deliverable-num">04</div>
              <h4>Brand Guidelines</h4>
              <p>Clear rules for using the identity consistently.</p>
            </div>
            <div className="deliverable">
              <div className="deliverable-num">05</div>
              <h4>Business Cards</h4>
              <p>Professional print-ready business stationery.</p>
            </div>
            <div className="deliverable">
              <div className="deliverable-num">06</div>
              <h4>Social Templates</h4>
              <p>Reusable designs for regular content creation.</p>
            </div>
            <div className="deliverable">
              <div className="deliverable-num">07</div>
              <h4>Presentation Design</h4>
              <p>Branded pitch decks and business presentations.</p>
            </div>
            <div className="deliverable">
              <div className="deliverable-num">08</div>
              <h4>Marketing Assets</h4>
              <p>Creative collateral for campaigns and promotions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="value-sec" id="process">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">Our Process</div>
            <h2 className="section-title">
              From idea to a <span>brand you own.</span>
            </h2>
            <p className="section-sub">
              A structured creative process that balances strategy, design and
              practical business use.
            </p>
          </div>

          <div className="process-web-grid reveal">
            <div className="step-web">
              <div className="step-web-num">01 / DISCOVER</div>
              <h4>Understand</h4>
              <p>Business, audience, competitors and brand goals.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">02 / STRATEGY</div>
              <h4>Position</h4>
              <p>Define the visual direction and creative territory.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">03 / CREATE</div>
              <h4>Design</h4>
              <p>Develop concepts, identity and visual assets.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">04 / REFINE</div>
              <h4>Perfect</h4>
              <p>Review, feedback and final design refinements.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">05 / DELIVER</div>
              <h4>Launch</h4>
              <p>Organized files and brand assets ready to use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="section-inner">
          <div className="cta-box reveal">
            <div className="section-eyebrow">Let&apos;s Build Your Brand</div>
            <h2>
              Ready to make your business <span>look the part?</span>
            </h2>
            <p>
              Tell us where your brand is today and where you want it to go.
              We&apos;ll create a visual identity that is clear, credible and
              built to grow with you.
            </p>
            <div className="cta-btns">
              <a href="mailto:hello@smartonward.com" className="btn-primary">
                📧 Start a Branding Project
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="cta-secondary"
              >
                💬 WhatsApp Us
              </a>
            </div>
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
                We move brands onward — through smart websites, content,
                marketing and AI automation.
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
                  <Link href="/#about">About Us</Link>
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
