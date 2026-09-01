"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function WebsiteDevelopmentPage() {
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
            <img src="/logo.png" alt="SmartOnward Logo" className="logo-img" />
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
                What We Build
              </a>
            </li>
            <li>
              <a href="#value" onClick={closeMenu}>
                Why Us
              </a>
            </li>
            <li>
              <a href="#process" onClick={closeMenu}>
                Process
              </a>
            </li>
            <li>
              <a href="#technology" onClick={closeMenu}>
                Technology
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
              <span className="hero-badge-dot"></span> Website Development
            </div>
            <h1>
              Websites built to <span>look great</span> and{" "}
              <em>grow your business.</em>
            </h1>
            <p className="hero-copy">
              We design and develop fast, modern, conversion-focused websites
              that make your brand look credible, communicate your value and turn
              visitors into customers.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">
                Build My Website →
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </div>
            <div className="hero-web-notes">
              <div className="hero-web-note">
                <b>✓</b> Mobile-first
              </div>
              <div className="hero-web-note">
                <b>✓</b> SEO-ready
              </div>
              <div className="hero-web-note">
                <b>✓</b> Fast &amp; secure
              </div>
            </div>
          </div>

          <div className="browser">
            <div className="browser-top">
              <span className="browser-dot"></span>
              <span className="browser-dot"></span>
              <span className="browser-dot"></span>
              <div className="address-bar">yourbusiness.com</div>
            </div>
            <div className="site-preview">
              <div className="preview-nav">
                <div className="preview-logo">
                  <span>Smart</span>Brand
                </div>
                <div className="preview-links">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
              <div className="preview-content">
                <div>
                  <div className="preview-title">
                    Your brand.
                    <br />
                    <span>Better online.</span>
                  </div>
                  <div className="preview-line"></div>
                  <div className="preview-line short"></div>
                  <div className="preview-button"></div>
                </div>
                <div className="preview-card">
                  <div className="preview-image"></div>
                  <div className="preview-mini">
                    <i></i>
                    <i></i>
                  </div>
                  <div className="preview-mini">
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="strip">
        <div className="strip-inner">
          <div className="strip-item">
            <strong>5–15 Days</strong>
            <span>Typical delivery</span>
          </div>
          <div className="strip-item">
            <strong>100%</strong>
            <span>Responsive layouts</span>
          </div>
          <div className="strip-item">
            <strong>SEO</strong>
            <span>Ready foundations</span>
          </div>
          <div className="strip-item">
            <strong>24/7</strong>
            <span>Support available</span>
          </div>
        </div>
      </div>

      {/* SERVICES - WHAT WE BUILD */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">What We Build</div>
            <h2 className="section-title">
              Everything your <span>website needs</span>
            </h2>
            <p className="section-sub">
              From a professional business presence to a complete digital
              experience, our full-service approach covers strategy, design,
              development and launch.
            </p>
          </div>

          <div className="service-web-grid reveal">
            <div className="service-web-card">
              <div className="web-icon">🌐</div>
              <h3>Business Websites</h3>
              <p>
                Professional websites designed to establish trust, explain your
                services and generate enquiries.
              </p>
              <div className="web-tags">
                <span className="web-tag">3–5 Pages</span>
                <span className="web-tag">Responsive</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">🛍️</div>
              <h3>E-Commerce Websites</h3>
              <p>
                Product-focused online stores with clean shopping experiences and
                conversion-friendly layouts.
              </p>
              <div className="web-tags">
                <span className="web-tag">Products</span>
                <span className="web-tag">Checkout</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">🎯</div>
              <h3>Landing Pages</h3>
              <p>
                Focused campaign pages built around one goal — leads, bookings,
                sales or registrations.
              </p>
              <div className="web-tags">
                <span className="web-tag">High Conversion</span>
                <span className="web-tag">Ads Ready</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>
                Modern interfaces with thoughtful layouts, hierarchy and user
                journeys that make websites easier to use.
              </p>
              <div className="web-tags">
                <span className="web-tag">Figma</span>
                <span className="web-tag">UX Flow</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">🤖</div>
              <h3>AI &amp; Chatbot Integration</h3>
              <p>
                Connect your website with AI assistants, lead capture, WhatsApp
                and automated customer support.
              </p>
              <div className="web-tags">
                <span className="web-tag">AI</span>
                <span className="web-tag">Chatbot</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">📈</div>
              <h3>SEO &amp; Analytics</h3>
              <p>
                Technical foundations, Search Console, Analytics and on-page
                essentials so your website is ready to grow.
              </p>
              <div className="web-tags">
                <span className="web-tag">SEO</span>
                <span className="web-tag">Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="value-sec" id="value">
        <div className="section-inner">
          <div className="value-grid reveal">
            <div className="value-panel">
              <div
                className="hero-badge"
                style={{
                  background: "rgba(96,165,250,.15)",
                  color: "#93C5FD",
                  marginBottom: "8px",
                }}
              >
                Why SmartOnward
              </div>
              <h3>
                We don&apos;t just build a website.
                <br />
                We build your <span>digital presence.</span>
              </h3>
              <p>
                As a full-fledged digital agency, we can connect your website
                with branding, content, social media, digital marketing and AI
                automation — so everything works together.
              </p>
            </div>

            <div className="value-list">
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Conversion-focused</h4>
                  <p>
                    Clear calls-to-action and journeys designed around business
                    goals.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Mobile-first</h4>
                  <p>Clean experiences across phones, tablets and desktops.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Performance-minded</h4>
                  <p>Lightweight layouts and optimized assets for faster loading.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Brand consistent</h4>
                  <p>Your colors, voice and identity carried throughout the site.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Easy to scale</h4>
                  <p>Built with room for new pages, integrations and campaigns.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Launch support</h4>
                  <p>Testing, deployment and post-launch assistance when needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">Our Process</div>
            <h2 className="section-title">
              From idea to <span>online</span>
            </h2>
            <p className="section-sub">
              A simple, transparent workflow designed to keep your project
              moving without unnecessary complexity.
            </p>
          </div>

          <div className="process-web-grid reveal">
            <div className="step-web">
              <div className="step-web-num">01 / DISCOVER</div>
              <h4>Understand</h4>
              <p>Goals, audience, competitors and project scope.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">02 / PLAN</div>
              <h4>Structure</h4>
              <p>Sitemap, content direction and conversion journey.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">03 / DESIGN</div>
              <h4>Visualize</h4>
              <p>UI/UX, branding and responsive page designs.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">04 / BUILD</div>
              <h4>Develop</h4>
              <p>Responsive development, integrations and testing.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">05 / LAUNCH</div>
              <h4>Grow</h4>
              <p>Deploy, optimize and support your next phase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="tech-sec" id="technology">
        <div className="section-inner center">
          <div className="section-eyebrow">Technology</div>
          <h2 className="section-title">
            Built with the <span>right tools</span>
          </h2>
          <p className="section-sub">
            We choose the technology based on your business, budget, timeline and
            future requirements.
          </p>
          <div className="tech-list reveal">
            <span className="tech-pill">HTML5</span>
            <span className="tech-pill">CSS3</span>
            <span className="tech-pill">JavaScript</span>
            <span className="tech-pill">React</span>
            <span className="tech-pill">Next.js</span>
            <span className="tech-pill">WordPress</span>
            <span className="tech-pill">Shopify</span>
            <span className="tech-pill">Webflow</span>
            <span className="tech-pill">Node.js</span>
            <span className="tech-pill">PHP</span>
            <span className="tech-pill">API Integration</span>
            <span className="tech-pill">AI Integration</span>
            <span className="tech-pill">WhatsApp</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="section-inner">
          <div className="cta-box reveal">
            <div className="section-eyebrow">Let&apos;s Build</div>
            <h2>
              Ready for a website that{" "}
              <span>moves your business onward?</span>
            </h2>
            <p>
              Tell us what you&apos;re building. We&apos;ll help you choose the
              right website, design and digital setup for your business.
            </p>
            <div className="cta-btns">
              <a href="mailto:hello@smartonward.com" className="btn-primary">
                📧 Start a Project
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
                <img src="/logo.png" alt="SmartOnward Logo" className="logo-img" />
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
