"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function VideoAndReelsPage() {
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
              <a href="#formats" onClick={closeMenu}>
                Formats
              </a>
            </li>
            <li>
              <a href="#why" onClick={closeMenu}>
                Why Us
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
              <span className="hero-badge-dot"></span> Video &amp; Reels
            </div>
            <h1>
              Content that makes people <span>stop</span>, <em>watch</em> and
              remember.
            </h1>
            <p className="hero-copy">
              We create scroll-stopping videos, Reels and short-form content
              that bring your brand to life, communicate your message and keep
              your audience engaged.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">
                Create My Content →
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </div>
            <div className="hero-web-notes">
              <div className="hero-web-note">
                <b>✓</b> Short-form focused
              </div>
              <div className="hero-web-note">
                <b>✓</b> Brand aligned
              </div>
              <div className="hero-web-note">
                <b>✓</b> Platform ready
              </div>
            </div>
          </div>

          <div className="video-board">
            <div className="video-top">
              <span className="video-dot"></span>
              <span className="video-dot"></span>
              <span className="video-dot"></span>
              <div className="video-title">
                smartonward / content-studio / reel-preview
              </div>
            </div>
            <div className="video-canvas">
              <div className="reel">
                <div className="reel-brand">
                  <span>Smart</span>Onward
                </div>
                <div className="play-btn">▶</div>
                <div className="reel-copy">
                  <h3>
                    Make your
                    <br />
                    <span>brand impossible</span>
                    <br />
                    to ignore.
                  </h3>
                  <p>
                    Short-form creative built for attention, engagement and
                    growth.
                  </p>
                </div>
                <div className="side-stats">
                  <i>♡ 12.8K</i>
                  <i>↗ 4.2K</i>
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
            <strong>Reels</strong>
            <span>Short-form content</span>
          </div>
          <div className="strip-item">
            <strong>UGC</strong>
            <span>Authentic creative</span>
          </div>
          <div className="strip-item">
            <strong>AI</strong>
            <span>AI-powered production</span>
          </div>
          <div className="strip-item">
            <strong>Multi</strong>
            <span>Platform ready</span>
          </div>
        </div>
      </div>

      {/* SERVICES - WHAT WE CREATE */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">What We Create</div>
            <h2 className="section-title">
              From one Reel to a <span>complete content system.</span>
            </h2>
            <p className="section-sub">
              As a full-fledged digital agency, we connect video with your
              branding, social media and marketing goals — not just random
              content.
            </p>
          </div>

          <div className="service-web-grid reveal">
            <div className="service-web-card">
              <div className="web-icon">🎬</div>
              <h3>Reels &amp; Short Videos</h3>
              <p>
                Fast-paced, engaging vertical videos designed for Instagram,
                YouTube Shorts and other short-form platforms.
              </p>
              <div className="web-tags">
                <span className="web-tag">Reels</span>
                <span className="web-tag">Shorts</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">🤳</div>
              <h3>UGC Content</h3>
              <p>
                Natural, relatable product and service videos designed to feel
                authentic while staying aligned with your brand.
              </p>
              <div className="web-tags">
                <span className="web-tag">UGC</span>
                <span className="web-tag">Product</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">🤖</div>
              <h3>AI Video Creation</h3>
              <p>
                AI-assisted visuals, avatars, voiceovers and creative concepts
                that help you produce content faster.
              </p>
              <div className="web-tags">
                <span className="web-tag">AI</span>
                <span className="web-tag">Voiceover</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">✂️</div>
              <h3>Video Editing</h3>
              <p>
                Professional cuts, captions, transitions, sound design, pacing
                and visual polish for your existing footage.
              </p>
              <div className="web-tags">
                <span className="web-tag">Editing</span>
                <span className="web-tag">Captions</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">📦</div>
              <h3>Product Videos</h3>
              <p>
                Creative demonstrations, product showcases and promotional videos
                that make your offering easier to understand.
              </p>
              <div className="web-tags">
                <span className="web-tag">Products</span>
                <span className="web-tag">Ads</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">📣</div>
              <h3>Ad Creatives</h3>
              <p>
                Performance-minded video creatives built around hooks, offers and
                calls-to-action for digital campaigns.
              </p>
              <div className="web-tags">
                <span className="web-tag">Meta Ads</span>
                <span className="web-tag">Campaigns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US / VALUE */}
      <section className="value-sec" id="why">
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
                We don&apos;t create videos just to{" "}
                <span>fill your feed.</span>
              </h3>
              <p>
                We create content with a purpose — attention, awareness,
                engagement, leads or sales. And because we&apos;re a full-service
                agency, your video can work with your website, brand identity,
                social strategy and campaigns.
              </p>
            </div>

            <div className="value-list">
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Strong hooks</h4>
                  <p>Openings designed to earn attention in the first seconds.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Brand consistency</h4>
                  <p>
                    Visual style, colors and messaging aligned with your
                    identity.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Platform-native</h4>
                  <p>
                    Formats and pacing adapted for where the content is
                    published.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Clear storytelling</h4>
                  <p>
                    Ideas simplified into content people can understand quickly.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Repurposable</h4>
                  <p>One core idea can become multiple useful content assets.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Marketing ready</h4>
                  <p>
                    Creative built to support campaigns, launches and
                    promotions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT FORMATS */}
      <section className="services" id="formats">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">Content Formats</div>
            <h2 className="section-title">
              One idea. <span>Multiple ways to show it.</span>
            </h2>
            <p className="section-sub">
              We can create content in the formats your audience already consumes
              — while keeping your visual identity consistent.
            </p>
          </div>

          <div className="format-grid reveal">
            <div className="format-card">
              <div className="format-shape vertical">
                9:16
                <br />
                REEL
              </div>
              <h4>Instagram Reels</h4>
              <p>
                Vertical short-form videos built for fast attention and
                engagement.
              </p>
            </div>
            <div className="format-card">
              <div className="format-shape square">1:1</div>
              <h4>Social Video</h4>
              <p>
                Square creative for feeds, product communication and social
                campaigns.
              </p>
            </div>
            <div className="format-card">
              <div className="format-shape landscape">16:9 VIDEO</div>
              <h4>YouTube &amp; Web</h4>
              <p>
                Landscape content for YouTube, websites, presentations and
                longer stories.
              </p>
            </div>
            <div className="format-card">
              <div className="format-shape story">
                9:16
                <br />
                STORY
              </div>
              <h4>Stories &amp; Ads</h4>
              <p>
                Quick vertical creatives for stories, promotions and paid
                campaigns.
              </p>
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
              From concept to <span>content live.</span>
            </h2>
            <p className="section-sub">
              A simple production workflow designed to keep creative quality
              high and execution smooth.
            </p>
          </div>

          <div className="process-web-grid reveal">
            <div className="step-web">
              <div className="step-web-num">01 / BRIEF</div>
              <h4>Understand</h4>
              <p>Goals, audience, offer and content requirements.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">02 / CONCEPT</div>
              <h4>Plan</h4>
              <p>Hooks, scripts, references and creative direction.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">03 / CREATE</div>
              <h4>Produce</h4>
              <p>Shooting, AI generation, assets and editing.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">04 / REFINE</div>
              <h4>Polish</h4>
              <p>Captions, sound, pacing and final revisions.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">05 / PUBLISH</div>
              <h4>Launch</h4>
              <p>Export platform-ready assets and support posting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="section-inner">
          <div className="cta-box reveal">
            <div className="section-eyebrow">Let&apos;s Create</div>
            <h2>
              Ready to make your brand <span>worth watching?</span>
            </h2>
            <p>
              Tell us what you want to promote, explain or grow. We&apos;ll turn
              the idea into content designed for attention and action.
            </p>
            <div className="cta-btns">
              <a href="mailto:hello@smartonward.com" className="btn-primary">
                📧 Start a Content Project
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
