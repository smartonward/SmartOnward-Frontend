"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DigitalMarketingPage() {
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
                Services
              </a>
            </li>
            <li>
              <a href="#channels" onClick={closeMenu}>
                Channels
              </a>
            </li>
            <li>
              <a href="#results" onClick={closeMenu}>
                Results
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
              <span className="hero-badge-dot"></span> Digital Marketing
            </div>
            <h1>
              Turn attention into <span>traffic</span>, leads and{" "}
              <em>growth.</em>
            </h1>
            <p className="hero-copy">
              We build digital marketing campaigns that connect the right
              audience with the right message — across search, social, paid
              advertising and content.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">
                Grow My Business →
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </div>
            <div className="hero-web-notes">
              <div className="hero-web-note">
                <b>✓</b> Data-driven
              </div>
              <div className="hero-web-note">
                <b>✓</b> Conversion focused
              </div>
              <div className="hero-web-note">
                <b>✓</b> Full-funnel
              </div>
            </div>
          </div>

          <div className="marketing-board">
            <div className="dash-top">
              <div className="dash-title">Campaign Performance</div>
              <div className="live">● Campaigns Active</div>
            </div>
            <div className="funnel">
              <div className="funnel-row f1">
                <span>REACH</span>
                <span>128K</span>
              </div>
              <div className="funnel-row f2">
                <span>VISITS</span>
                <span>18.4K</span>
              </div>
              <div className="funnel-row f3">
                <span>LEADS</span>
                <span>2.8K</span>
              </div>
              <div className="funnel-row f4">
                <span>CONVERSIONS</span>
                <span>684</span>
              </div>
            </div>
            <div className="campaign-stats">
              <div className="stat">
                <strong>4.7×</strong>
                <span className="up">ROAS ↗</span>
              </div>
              <div className="stat">
                <strong>−31%</strong>
                <span className="up">CPL ↗</span>
              </div>
              <div className="stat">
                <strong>+82%</strong>
                <span className="up">Leads ↗</span>
              </div>
            </div>
            <div className="channel-row">
              <div className="channel">
                <b>G</b>Search
              </div>
              <div className="channel">
                <b>◎</b>Meta
              </div>
              <div className="channel">
                <b>in</b>LinkedIn
              </div>
              <div className="channel">
                <b>✦</b>SEO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="strip">
        <div className="strip-inner">
          <div className="strip-item">
            <strong>SEO</strong>
            <span>Organic growth</span>
          </div>
          <div className="strip-item">
            <strong>Paid Ads</strong>
            <span>Targeted acquisition</span>
          </div>
          <div className="strip-item">
            <strong>Content</strong>
            <span>Audience building</span>
          </div>
          <div className="strip-item">
            <strong>Analytics</strong>
            <span>Measure &amp; improve</span>
          </div>
        </div>
      </div>

      {/* SERVICES - WHAT WE DO */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">What We Do</div>
            <h2 className="section-title">
              A complete digital marketing <span>engine.</span>
            </h2>
            <p className="section-sub">
              We combine strategy, creative, acquisition and analytics so your
              marketing works as one connected system instead of isolated
              activities.
            </p>
          </div>

          <div className="service-web-grid reveal">
            <div className="service-web-card">
              <div className="web-icon">🔎</div>
              <h3>Search Engine Optimization</h3>
              <p>
                Improve your organic visibility with technical, on-page and
                content-focused SEO strategies.
              </p>
              <div className="web-tags">
                <span className="web-tag">SEO</span>
                <span className="web-tag">Keywords</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">🎯</div>
              <h3>Google &amp; Meta Ads</h3>
              <p>
                Performance-focused paid campaigns designed around audiences,
                offers, landing pages and conversions.
              </p>
              <div className="web-tags">
                <span className="web-tag">PPC</span>
                <span className="web-tag">Meta Ads</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">📣</div>
              <h3>Social Media Marketing</h3>
              <p>
                Connect your social content and campaigns to broader marketing
                goals, audiences and offers.
              </p>
              <div className="web-tags">
                <span className="web-tag">Social</span>
                <span className="web-tag">Campaigns</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">✍️</div>
              <h3>Content Marketing</h3>
              <p>
                Useful, persuasive content that builds authority, attracts the
                right audience and supports conversion.
              </p>
              <div className="web-tags">
                <span className="web-tag">Blogs</span>
                <span className="web-tag">Content</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">🧲</div>
              <h3>Lead Generation</h3>
              <p>
                Build acquisition journeys that turn clicks and attention into
                enquiries, calls, bookings and opportunities.
              </p>
              <div className="web-tags">
                <span className="web-tag">Leads</span>
                <span className="web-tag">Funnels</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">📊</div>
              <h3>Analytics &amp; CRO</h3>
              <p>
                Track what matters, identify drop-offs and continuously improve
                campaigns and conversion paths.
              </p>
              <div className="web-tags">
                <span className="web-tag">Analytics</span>
                <span className="web-tag">CRO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY / WHY US */}
      <section className="value-sec" id="strategy">
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
                We don&apos;t just run ads. We build the{" "}
                <span>whole growth journey.</span>
              </h3>
              <p>
                Your marketing works better when your website, brand, content,
                social media, ads and AI automation work together. That&apos;s
                the advantage of a full-fledged agency.
              </p>
            </div>

            <div className="value-list">
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Full-funnel thinking</h4>
                  <p>
                    Awareness, consideration, leads and conversion connected
                    together.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Audience targeting</h4>
                  <p>Reach the people most relevant to your business and offer.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Creative + performance</h4>
                  <p>
                    Strong visuals and messaging backed by measurable outcomes.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Landing page alignment</h4>
                  <p>Campaign traffic sent to experiences designed to convert.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Transparent reporting</h4>
                  <p>
                    Clear performance metrics and practical next-step
                    recommendations.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Continuous optimization</h4>
                  <p>
                    Test, learn and improve instead of setting campaigns and
                    forgetting them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="services" id="channels">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">Marketing Channels</div>
            <h2 className="section-title">
              Meet your customers <span>where they are.</span>
            </h2>
            <p className="section-sub">
              The right mix depends on your business, audience and goals. We
              build channel strategies around what can actually move the needle.
            </p>
          </div>

          <div className="channel-grid reveal">
            <div className="channel-card">
              <div className="channel-icon">G</div>
              <h4>Google Search</h4>
              <p>
                Capture high-intent users actively looking for your products or
                services.
              </p>
            </div>
            <div className="channel-card">
              <div className="channel-icon">◎</div>
              <h4>Meta Ads</h4>
              <p>
                Reach targeted audiences across Facebook and Instagram with
                creative campaigns.
              </p>
            </div>
            <div className="channel-card">
              <div className="channel-icon">in</div>
              <h4>LinkedIn</h4>
              <p>
                Build B2B awareness, authority and targeted professional lead
                generation.
              </p>
            </div>
            <div className="channel-card">
              <div className="channel-icon">✦</div>
              <h4>Organic Search</h4>
              <p>
                Build sustainable visibility through SEO, content and useful
                search experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="results" id="results">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">What We Measure</div>
            <h2 className="section-title">
              Marketing should be <span>measurable.</span>
            </h2>
            <p className="section-sub">
              We focus on metrics that help you understand whether your marketing
              is creating business value — not just generating activity.
            </p>
          </div>

          <div className="result-grid reveal">
            <div className="result">
              <div className="result-top">
                <span className="result-label">Qualified Leads</span>
                <span className="result-badge">Growth</span>
              </div>
              <strong>+82%</strong>
              <p>
                Improve the volume and quality of enquiries generated through your
                digital channels.
              </p>
              <div className="bar">
                <span className="r1"></span>
              </div>
            </div>

            <div className="result">
              <div className="result-top">
                <span className="result-label">Cost Per Lead</span>
                <span className="result-badge">Efficiency</span>
              </div>
              <strong>−31%</strong>
              <p>
                Optimize targeting, creative and conversion journeys to reduce
                wasted acquisition spend.
              </p>
              <div className="bar">
                <span className="r2"></span>
              </div>
            </div>

            <div className="result">
              <div className="result-top">
                <span className="result-label">Conversion Rate</span>
                <span className="result-badge">Performance</span>
              </div>
              <strong>+54%</strong>
              <p>
                Improve the percentage of visitors who take meaningful actions on
                your website.
              </p>
              <div className="bar">
                <span className="r3"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="services" id="process">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">Our Process</div>
            <h2 className="section-title">
              From strategy to <span>measurable growth.</span>
            </h2>
            <p className="section-sub">
              A structured process that keeps campaigns focused, transparent and
              continuously improving.
            </p>
          </div>

          <div className="process-web-grid reveal">
            <div className="step-web">
              <div className="step-web-num">01 / DISCOVER</div>
              <h4>Understand</h4>
              <p>Business, audience, competitors and growth goals.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">02 / STRATEGY</div>
              <h4>Plan</h4>
              <p>Channels, offers, messaging and acquisition journey.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">03 / LAUNCH</div>
              <h4>Execute</h4>
              <p>Creative, campaigns, landing pages and tracking.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">04 / MEASURE</div>
              <h4>Analyze</h4>
              <p>Review traffic, leads, conversions and costs.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">05 / OPTIMIZE</div>
              <h4>Grow</h4>
              <p>Test, improve and scale what is working.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="section-inner">
          <div className="cta-box reveal">
            <div className="section-eyebrow">Let&apos;s Grow</div>
            <h2>
              Ready to turn digital attention into{" "}
              <span>real business?</span>
            </h2>
            <p>
              Tell us about your business, audience and goals. We&apos;ll help
              you build a practical digital marketing system designed around
              measurable growth.
            </p>
            <div className="cta-btns">
              <a href="mailto:hello@smartonward.com" className="btn-primary">
                📧 Start a Marketing Project
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
                  <Link href="/branding-and-visual-design">
                    Branding &amp; Design
                  </Link>
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
