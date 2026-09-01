"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SocialMediaManagementPage() {
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
              <a href="#platforms" onClick={closeMenu}>
                Platforms
              </a>
            </li>
            <li>
              <a href="#calendar" onClick={closeMenu}>
                Calendar
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
              <span className="hero-badge-dot"></span> Social Media Management
            </div>
            <h1>
              Don&apos;t just <span>post.</span> Build a social presence people{" "}
              <em>remember.</em>
            </h1>
            <p className="hero-copy">
              We plan, create, publish and optimize social content that keeps your
              brand visible, consistent and connected with the people you want to
              reach.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">
                Grow My Social Media →
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
                <b>✓</b> Consistent content
              </div>
              <div className="hero-web-note">
                <b>✓</b> Monthly planning
              </div>
            </div>
          </div>

          <div className="social-board">
            <div className="dashboard-top">
              <div className="dash-title">Social Media Command Center</div>
              <div className="dash-live">● Active</div>
            </div>
            <div className="profile">
              <div className="avatar">S</div>
              <div>
                <h4>SmartBrand</h4>
                <p>@smartbrand • Growing every week</p>
              </div>
            </div>
            <div className="post-grid">
              <div className="post">
                <b>01</b>
              </div>
              <div className="post">
                <b>02</b>
              </div>
              <div className="post">
                <b>03</b>
              </div>
              <div className="post">
                <b>04</b>
              </div>
              <div className="post">
                <b>05</b>
              </div>
              <div className="post">
                <b>06</b>
              </div>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>+187%</strong>
                <span className="up">Reach ↗</span>
              </div>
              <div className="metric">
                <strong>+64%</strong>
                <span className="up">Engagement ↗</span>
              </div>
              <div className="metric">
                <strong>+42%</strong>
                <span className="up">Leads ↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="strip">
        <div className="strip-inner">
          <div className="strip-item">
            <strong>Strategy</strong>
            <span>Content direction</span>
          </div>
          <div className="strip-item">
            <strong>Content</strong>
            <span>Posts, Reels &amp; Stories</span>
          </div>
          <div className="strip-item">
            <strong>Community</strong>
            <span>Audience engagement</span>
          </div>
          <div className="strip-item">
            <strong>Insights</strong>
            <span>Monthly reporting</span>
          </div>
        </div>
      </div>

      {/* SERVICES - WHAT WE MANAGE */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">What We Manage</div>
            <h2 className="section-title">
              Your social media, <span>handled end-to-end.</span>
            </h2>
            <p className="section-sub">
              From strategy and content creation to publishing and reporting, we
              take care of the work required to build a professional and active
              social presence.
            </p>
          </div>

          <div className="service-web-grid reveal">
            <div className="service-web-card">
              <div className="web-icon">🧭</div>
              <h3>Social Media Strategy</h3>
              <p>
                Clear content pillars, audience direction, posting strategy and
                goals designed around your business.
              </p>
              <div className="web-tags">
                <span className="web-tag">Strategy</span>
                <span className="web-tag">Content Pillars</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">🎨</div>
              <h3>Content Creation</h3>
              <p>
                Branded posts, carousels, graphics and creative concepts that
                keep your feed visually consistent.
              </p>
              <div className="web-tags">
                <span className="web-tag">Posts</span>
                <span className="web-tag">Carousels</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">🎬</div>
              <h3>Reels &amp; Short Videos</h3>
              <p>
                Scroll-stopping short-form content designed to increase reach,
                attention and engagement.
              </p>
              <div className="web-tags">
                <span className="web-tag">Reels</span>
                <span className="web-tag">Shorts</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">📅</div>
              <h3>Content Calendar</h3>
              <p>
                Monthly planning so every post has a purpose and your brand stays
                consistently active.
              </p>
              <div className="web-tags">
                <span className="web-tag">Monthly Plan</span>
                <span className="web-tag">Scheduling</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">💬</div>
              <h3>Community Management</h3>
              <p>
                Help manage comments, messages and audience interactions so your
                brand stays responsive.
              </p>
              <div className="web-tags">
                <span className="web-tag">Comments</span>
                <span className="web-tag">DMs</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">📊</div>
              <h3>Analytics &amp; Reporting</h3>
              <p>
                Monthly insights covering content performance, audience growth
                and what to improve next.
              </p>
              <div className="web-tags">
                <span className="web-tag">Insights</span>
                <span className="web-tag">Reports</span>
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
                We don&apos;t chase vanity metrics. We build a social presence that
                supports your <span>business.</span>
              </h3>
              <p>
                Because we&apos;re a full-fledged agency, social media can
                connect directly with your branding, website, video content,
                digital marketing and AI-powered workflows.
              </p>
            </div>

            <div className="value-list">
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Brand consistency</h4>
                  <p>
                    Every visual and caption follows a clear brand direction.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Content with purpose</h4>
                  <p>
                    Posts are planned around awareness, trust, engagement or
                    action.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Audience focused</h4>
                  <p>
                    Content is created for the people you actually want to
                    attract.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Consistent publishing</h4>
                  <p>
                    A reliable calendar keeps your business visible over time.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Creative variety</h4>
                  <p>Mix of posts, Reels, carousels, stories and campaigns.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Continuous improvement</h4>
                  <p>Performance insights guide future content decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="services" id="platforms">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">Platforms</div>
            <h2 className="section-title">
              One strategy, <span>multiple channels.</span>
            </h2>
            <p className="section-sub">
              We adapt your content to the platforms where your audience spends
              time, while keeping your brand recognizable everywhere.
            </p>
          </div>

          <div className="platform-grid reveal">
            <div className="platform">
              <div className="platform-icon">◎</div>
              <h4>Instagram</h4>
              <p>
                Posts, Reels, Stories, carousels and community engagement.
              </p>
            </div>
            <div className="platform">
              <div className="platform-icon">f</div>
              <h4>Facebook</h4>
              <p>
                Business content, campaigns, community and lead-focused posts.
              </p>
            </div>
            <div className="platform">
              <div className="platform-icon">in</div>
              <h4>LinkedIn</h4>
              <p>
                Professional content, founder branding and B2B communication.
              </p>
            </div>
            <div className="platform">
              <div className="platform-icon">▶</div>
              <h4>YouTube</h4>
              <p>Shorts, video content and channel-focused creative assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT CALENDAR */}
      <section className="value-sec" id="calendar">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">Content Planning</div>
            <h2 className="section-title">
              A month of content, <span>planned with purpose.</span>
            </h2>
            <p className="section-sub">
              A visual content calendar keeps your social media organized around
              themes, campaigns and important business moments.
            </p>
          </div>

          <div className="calendar-box reveal">
            <div className="calendar-head">
              <div>MON</div>
              <div>TUE</div>
              <div>WED</div>
              <div>THU</div>
              <div>FRI</div>
              <div>SAT</div>
              <div>SUN</div>
            </div>
            <div className="calendar-grid">
              <div className="day">
                <strong>01</strong>
                <div className="content-pill blue-pill">Brand Story</div>
              </div>
              <div className="day">
                <strong>02</strong>
                <div className="content-pill green-pill">Reel</div>
              </div>
              <div className="day">
                <strong>03</strong>
                <div className="content-pill dark-pill">Tip / Value</div>
              </div>
              <div className="day">
                <strong>04</strong>
              </div>
              <div className="day">
                <strong>05</strong>
                <div className="content-pill blue-pill">Product</div>
              </div>
              <div className="day">
                <strong>06</strong>
                <div className="content-pill green-pill">Behind Scenes</div>
              </div>
              <div className="day">
                <strong>07</strong>
              </div>

              <div className="day">
                <strong>08</strong>
                <div className="content-pill green-pill">Reel</div>
              </div>
              <div className="day">
                <strong>09</strong>
                <div className="content-pill dark-pill">Educational</div>
              </div>
              <div className="day">
                <strong>10</strong>
                <div className="content-pill blue-pill">Testimonial</div>
              </div>
              <div className="day">
                <strong>11</strong>
              </div>
              <div className="day">
                <strong>12</strong>
                <div className="content-pill green-pill">Trend</div>
              </div>
              <div className="day">
                <strong>13</strong>
                <div className="content-pill blue-pill">Offer</div>
              </div>
              <div className="day">
                <strong>14</strong>
              </div>

              <div className="day">
                <strong>15</strong>
                <div className="content-pill dark-pill">Founder</div>
              </div>
              <div className="day">
                <strong>16</strong>
                <div className="content-pill green-pill">Reel</div>
              </div>
              <div className="day">
                <strong>17</strong>
                <div className="content-pill blue-pill">Case Study</div>
              </div>
              <div className="day">
                <strong>18</strong>
              </div>
              <div className="day">
                <strong>19</strong>
                <div className="content-pill dark-pill">Tip / Value</div>
              </div>
              <div className="day">
                <strong>20</strong>
                <div className="content-pill green-pill">Community</div>
              </div>
              <div className="day">
                <strong>21</strong>
              </div>

              <div className="day">
                <strong>22</strong>
                <div className="content-pill blue-pill">Product</div>
              </div>
              <div className="day">
                <strong>23</strong>
                <div className="content-pill green-pill">Reel</div>
              </div>
              <div className="day">
                <strong>24</strong>
                <div className="content-pill dark-pill">FAQ</div>
              </div>
              <div className="day">
                <strong>25</strong>
              </div>
              <div className="day">
                <strong>26</strong>
                <div className="content-pill blue-pill">Campaign</div>
              </div>
              <div className="day">
                <strong>27</strong>
                <div className="content-pill green-pill">Behind Scenes</div>
              </div>
              <div className="day">
                <strong>28</strong>
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
              From strategy to <span>consistent growth.</span>
            </h2>
            <p className="section-sub">
              A structured monthly workflow that keeps your content organized,
              creative and connected to your goals.
            </p>
          </div>

          <div className="process-web-grid reveal">
            <div className="step-web">
              <div className="step-web-num">01 / DISCOVER</div>
              <h4>Understand</h4>
              <p>Business, audience, competitors and objectives.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">02 / STRATEGY</div>
              <h4>Plan</h4>
              <p>Content pillars, themes and monthly calendar.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">03 / CREATE</div>
              <h4>Produce</h4>
              <p>Posts, Reels, captions and creative assets.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">04 / PUBLISH</div>
              <h4>Manage</h4>
              <p>Scheduling, publishing and community support.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">05 / ANALYZE</div>
              <h4>Improve</h4>
              <p>Review results and refine next month&apos;s strategy.</p>
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
              Ready to make your social media{" "}
              <span>work harder?</span>
            </h2>
            <p>
              Tell us about your business, audience and goals. We&apos;ll build a
              social media system that keeps your brand active, consistent and
              moving onward.
            </p>
            <div className="cta-btns">
              <a href="mailto:hello@smartonward.com" className="btn-primary">
                📧 Start a Social Project
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
