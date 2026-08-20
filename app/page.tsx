export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="#" className="logo">
            <img src="/logo.png" alt="SmartOnward Logo" className="logo-img" />
            <div className="logo-text">
              <span>Smart</span>Onward
            </div>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#process">Process</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact" className="nav-cta">
                Get Started →
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Now accepting new clients
            </div>
            <h1>
              We don&apos;t just market
              <br />
              your brand.
              <br />
              We <span className="move">move it onward.</span>
            </h1>
            <p className="hero-sub">
              SmartOnward is a full-service digital agency helping businesses
              grow through websites, content, social media, AI automation and
              smart marketing.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">
                Start Your Project →
              </a>
              <a href="#services" className="btn-secondary">
                See Our Services
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-top">
                <span className="hero-card-label">
                  Client Growth Dashboard
                </span>
                <span className="hero-card-badge">↑ Live</span>
              </div>
              <div className="stat-bars">
                <div className="stat-bar-row">
                  <div className="stat-bar-label">
                    <span>Website Traffic</span>
                    <span>+187%</span>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill bar-blue"
                      style={{ width: "87%" }}
                    ></div>
                  </div>
                </div>
                <div className="stat-bar-row">
                  <div className="stat-bar-label">
                    <span>Lead Generation</span>
                    <span>+143%</span>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill bar-green"
                      style={{ width: "73%" }}
                    ></div>
                  </div>
                </div>
                <div className="stat-bar-row">
                  <div className="stat-bar-label">
                    <span>Social Reach</span>
                    <span>+210%</span>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill bar-blue"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
                <div className="stat-bar-row">
                  <div className="stat-bar-label">
                    <span>Revenue Impact</span>
                    <span>+96%</span>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill bar-green"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-num">
                    50<span>+</span>
                  </div>
                  <div className="hero-stat-label">Projects</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">
                    95<span>%</span>
                  </div>
                  <div className="hero-stat-label">Success Rate</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">
                    2<span>yrs</span>
                  </div>
                  <div className="hero-stat-label">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-inner">
          <div className="trust-item">
            <div className="trust-icon">✓</div>Free SSL Certificate
          </div>
          <div className="trust-item">
            <div className="trust-icon">✓</div>Mobile Responsive
          </div>
          <div className="trust-item">
            <div className="trust-icon">✓</div>Delivery in 5–15 days
          </div>
          <div className="trust-item">
            <div className="trust-icon">✓</div>Custom Email IDs
          </div>
          <div className="trust-item">
            <div className="trust-icon">✓</div>24/7 Support
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">What We Do</div>
            <h2 className="section-title">
              Services that <span>move the needle</span>
            </h2>
            <p className="section-sub">
              From your first website to full-scale digital marketing and AI
              automation — we handle it all under one roof.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Website Development</h3>
              <p>
                Clean, fast, mobile-first websites that turn visitors into
                customers. From 3-page business sites to custom multi-page
                builds.
              </p>
              <div className="service-tags">
                <span className="tag">UI/UX Design</span>
                <span className="tag">Responsive</span>
                <span className="tag">SSL</span>
                <span className="tag">SEO Ready</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Branding &amp; Visual Design</h3>
              <p>
                Logo, brand identity, business cards, letterheads, brochures,
                pitch decks and all official brand collateral.
              </p>
              <div className="service-tags">
                <span className="tag">Logo</span>
                <span className="tag">Brand Kit</span>
                <span className="tag">PPT</span>
                <span className="tag">Print</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">🎬</div>
              <h3>Video &amp; Reels</h3>
              <p>
                AI-powered video content, UGC, promotional shoots, product
                videos and editing for Reels, YouTube and ads.
              </p>
              <div className="service-tags">
                <span className="tag">AI Video</span>
                <span className="tag">Reels</span>
                <span className="tag">Editing</span>
                <span className="tag">YouTube</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Social Media Management</h3>
              <p>
                Monthly content calendars, posts, reels, carousels and full
                account management across Instagram, Facebook and LinkedIn.
              </p>
              <div className="service-tags">
                <span className="tag">Instagram</span>
                <span className="tag">Facebook</span>
                <span className="tag">Content</span>
                <span className="tag">Calendar</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>Digital Marketing</h3>
              <p>
                Google Ads, Meta Ads, SEO, Search Console, GMB profile
                optimization and lead generation funnels that actually
                convert.
              </p>
              <div className="service-tags">
                <span className="tag">Google Ads</span>
                <span className="tag">Meta Ads</span>
                <span className="tag">SEO</span>
                <span className="tag">GMB</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>AI Automation</h3>
              <p>
                Chatbots, WhatsApp automation, email marketing sequences and
                AI-powered workflows that save your team hours every week.
              </p>
              <div className="service-tags">
                <span className="tag">Chatbot</span>
                <span className="tag">WhatsApp</span>
                <span className="tag">Email</span>
                <span className="tag">AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">How We Work</div>
            <h2 className="section-title">
              From brief to <span>live in days</span>
            </h2>
            <p className="section-sub">
              A clear, structured process so you always know what&apos;s
              happening and what&apos;s next.
            </p>
          </div>
          <div className="process-wrap">
            <div className="process-nodes">
              <div className="process-node">
                <div className="process-label">
                  <h4>Discovery</h4>
                  <p>Goals &amp; scope</p>
                </div>
                <div className="process-circle pc1">
                  <span className="num">01</span>
                </div>
              </div>
              <div className="process-node">
                <div className="process-circle pc2">
                  <span className="num">02</span>
                </div>
                <div className="process-label">
                  <h4>Planning</h4>
                  <p>Strategy &amp; sitemap</p>
                </div>
              </div>
              <div className="process-node">
                <div className="process-label">
                  <h4>Design</h4>
                  <p>UI/UX &amp; branding</p>
                </div>
                <div className="process-circle pc3">
                  <span className="num">03</span>
                </div>
              </div>
              <div className="process-node">
                <div className="process-circle pc4">
                  <span className="num">04</span>
                </div>
                <div className="process-label">
                  <h4>Development</h4>
                  <p>Build &amp; integrate</p>
                </div>
              </div>
              <div className="process-node">
                <div className="process-label">
                  <h4>Review</h4>
                  <p>Test &amp; revise</p>
                </div>
                <div className="process-circle pc5">
                  <span className="num">05</span>
                </div>
              </div>
              <div className="process-node">
                <div className="process-circle pc6">
                  <span className="num">06</span>
                </div>
                <div className="process-label">
                  <h4>Launch</h4>
                  <p>Deploy &amp; go live</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow" style={{ color: "#60A5FA" }}>
              By The Numbers
            </div>
            <h2 className="section-title" style={{ color: "#fff" }}>
              Results we&apos;re{" "}
              <span style={{ color: "var(--green)" }}>proud of</span>
            </h2>
          </div>
          <div className="stats-grid">
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

      {/* PRICING */}
      <section id="pricing">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">Website Packages</div>
            <h2 className="section-title">
              Simple, <span>transparent pricing</span>
            </h2>
            <p className="section-sub">
              All plans include domain, hosting, SSL certificate and custom
              email IDs. No hidden charges.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Standard</div>
              <div className="pricing-price">
                ₹3,999<span className="yr">/yr</span>
              </div>
              <div className="pricing-desc">
                Domain + Hosting + 1 custom email
              </div>
              <a href="#contact" className="pricing-btn outline">
                Get Started
              </a>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  3-page website
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  General design
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Responsive (web + mobile)
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Free SSL certificate
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Hosting (1 yr)
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  1 custom email ID
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Basic contact form
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  1 revision round
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Delivery in 5–7 days
                </li>
              </ul>
            </div>

            <div className="pricing-card featured">
              <div className="featured-badge">⭐ Most Popular</div>
              <div className="pricing-tier">Premium</div>
              <div className="pricing-price">
                ₹5,999<span className="yr">/yr</span>
              </div>
              <div className="pricing-desc">
                Domain + Hosting + 2 custom emails
              </div>
              <a href="#contact" className="pricing-btn filled">
                Get Started
              </a>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  5-page website
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Custom UI/UX design
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Responsive (web + mobile)
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Free SSL certificate
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Hosting (1 yr)
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  2 custom email IDs
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Instagram + Facebook integration
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Contact form + WhatsApp button
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Google Maps integration
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Search Console setup
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  2 revision rounds
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Delivery in 7–10 days
                </li>
              </ul>
            </div>

            <div className="pricing-card">
              <div className="pricing-tier">Pro</div>
              <div className="pricing-price">
                ₹9,999<span className="yr">/yr</span>
              </div>
              <div className="pricing-desc">
                Domain + Hosting + 5 custom emails
              </div>
              <a href="#contact" className="pricing-btn outline">
                Get Started
              </a>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  5+ pages (custom scope)
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  High-level UI/UX design
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  5 custom email IDs
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  All social platform integration
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Direct call button
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Up to 2 version revisions
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Limited chatbot widget
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  GMB profile setup
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Google Analytics + Search Console
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  SEO basics (meta, sitemap)
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  1 month post-launch support
                </li>
                <li>
                  <div className="check">
                    <svg viewBox="0 0 12 12">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </div>
                  Delivery in 12–15 days
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TAGLINE */}
      <div className="tagline-section">
        <div className="tagline-card">
          <blockquote>
            &quot;We don&apos;t just market your brand.
            <br />
            We <em>move it onward.</em>&quot;
          </blockquote>
          <div className="tagline-brand">
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "2px",
                height: "18px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "4px",
                  height: "8px",
                  background: "rgba(255,255,255,.5)",
                  borderRadius: "1px 1px 0 0",
                }}
              ></span>
              <span
                style={{
                  display: "block",
                  width: "4px",
                  height: "12px",
                  background: "rgba(255,255,255,.5)",
                  borderRadius: "1px 1px 0 0",
                }}
              ></span>
              <span
                style={{
                  display: "block",
                  width: "4px",
                  height: "16px",
                  background: "#86EFAC",
                  borderRadius: "1px 1px 0 0",
                }}
              ></span>
              <span
                style={{
                  display: "block",
                  width: "4px",
                  height: "12px",
                  background: "#4ade80",
                  borderRadius: "1px 1px 0 0",
                }}
              ></span>
              <span
                style={{
                  display: "block",
                  width: "4px",
                  height: "8px",
                  background: "#22c55e",
                  borderRadius: "1px 1px 0 0",
                }}
              ></span>
            </div>
            SmartOnward
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section-inner">
          <div className="center">
            <div className="section-eyebrow">Client Stories</div>
            <h2 className="section-title">
              What our clients <span>say</span>
            </h2>
          </div>
          <div className="testimonials-grid">
            <div className="testi-card">
              <div className="testi-stars">⭐⭐⭐⭐⭐</div>
              <p className="testi-text">
                &quot;SmartOnward built our website in just 6 days. The
                design was clean, professional and exactly what we wanted.
                Already getting enquiries through the contact form!&quot;
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
              <div className="testi-stars">⭐⭐⭐⭐⭐</div>
              <p className="testi-text">
                &quot;Our Instagram following grew 3x in 2 months after
                SmartOnward took over our social media. The reels they create
                are genuinely creative and get real engagement.&quot;
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
              <div className="testi-stars">⭐⭐⭐⭐⭐</div>
              <p className="testi-text">
                &quot;The WhatsApp automation they set up saves us 3 hours
                every day. Customers get instant replies and our booking rate
                has gone up significantly.&quot;
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

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="section-inner">
          <div className="section-eyebrow" style={{ color: "#86EFAC" }}>
            Let&apos;s Work Together
          </div>
          <h2 className="section-title">
            Ready to move your
            <br />
            brand onward?
          </h2>
          <p className="section-sub">
            Tell us about your project and we&apos;ll get back to you within
            24 hours with a plan and timeline.
          </p>
          <div className="cta-btns">
            <a href="mailto:hello@smartonward.com" className="btn-white">
              📧 Email Us
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="btn-outline-white"
            >
              💬 WhatsApp Us
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
                  <a href="#">Website Development</a>
                </li>
                <li>
                  <a href="#">Branding &amp; Design</a>
                </li>
                <li>
                  <a href="#">Social Media</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">AI Automation</a>
                </li>
                <li>
                  <a href="#">Video &amp; Reels</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Process</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Contact</a>
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
                  <a href="#">WhatsApp</a>
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
              <a href="#" className="social-link">
                in
              </a>
              <a href="#" className="social-link">
                f
              </a>
              <a href="#" className="social-link">
                ig
              </a>
              <a href="#" className="social-link">
                wa
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
