"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import GrowthAuditCTA from "../components/GrowthAuditCTA";
import Footer from "../components/Footer";

export default function AIAutomationPage() {
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
              <a href="#usecases" onClick={closeMenu}>
                Use Cases
              </a>
            </li>
            <li>
              <a href="#workflow" onClick={closeMenu}>
                Workflow
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
              <span className="hero-badge-dot"></span> AI Automation
            </div>
            <h1>
              Work smarter with <span>AI-powered</span> systems that{" "}
              <em>run for you.</em>
            </h1>
            <p className="hero-copy">
              We automate repetitive work, connect your tools and build
              AI-powered workflows that help your team respond faster, save time
              and focus on higher-value work.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">
                Automate My Business →
              </a>
              <a href="#services" className="btn-secondary">
                Explore Solutions
              </a>
            </div>
            <div className="hero-web-notes">
              <div className="hero-web-note">
                <b>✓</b> Custom workflows
              </div>
              <div className="hero-web-note">
                <b>✓</b> AI integrated
              </div>
              <div className="hero-web-note">
                <b>✓</b> Built around your process
              </div>
            </div>
          </div>

          <div className="automation-board">
            <div className="dash-top">
              <div className="dash-title">AI Automation Workflow</div>
              <div className="live">● Running</div>
            </div>
            <div className="flow">
              <div className="flow-step">
                <div className="flow-icon trigger">⚡</div>
                <div className="flow-card">
                  <strong>New Lead Received</strong>
                  <span>Website / WhatsApp / Form</span>
                </div>
              </div>
              <div className="flow-step">
                <div className="flow-icon ai">AI</div>
                <div className="flow-card">
                  <strong>AI Qualifies Lead</strong>
                  <span>Understands intent &amp; captures details</span>
                </div>
              </div>
              <div className="flow-step">
                <div className="flow-icon action">↗</div>
                <div className="flow-card">
                  <strong>CRM Updated</strong>
                  <span>Lead routed to the right pipeline</span>
                </div>
              </div>
              <div className="flow-step">
                <div className="flow-icon result">✓</div>
                <div className="flow-card">
                  <strong>Instant Follow-up</strong>
                  <span>Personalized response sent automatically</span>
                </div>
              </div>
            </div>
            <div className="automation-stats">
              <div className="stat">
                <strong>24/7</strong>
                <span>Automation</span>
              </div>
              <div className="stat">
                <strong>−70%</strong>
                <span className="up">Manual work ↗</span>
              </div>
              <div className="stat">
                <strong>+3.4×</strong>
                <span className="up">Faster response ↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="strip">
        <div className="strip-inner">
          <div className="strip-item">
            <strong>AI Agents</strong>
            <span>Intelligent workflows</span>
          </div>
          <div className="strip-item">
            <strong>Automation</strong>
            <span>Less manual work</span>
          </div>
          <div className="strip-item">
            <strong>Integrations</strong>
            <span>Connected tools</span>
          </div>
          <div className="strip-item">
            <strong>24/7</strong>
            <span>Always-on systems</span>
          </div>
        </div>
      </div>

      {/* SERVICES - WHAT WE AUTOMATE */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">What We Automate</div>
            <h2 className="section-title">
              Turn repetitive work into <span>smart systems.</span>
            </h2>
            <p className="section-sub">
              We identify where time is being lost and design practical AI and
              automation workflows around the way your business actually operates.
            </p>
          </div>

          <div className="service-web-grid reveal">
            <div className="service-web-card">
              <div className="web-icon">🤖</div>
              <h3>AI Agents &amp; Assistants</h3>
              <p>
                Custom AI agents that answer questions, qualify leads, retrieve
                information and support your team.
              </p>
              <div className="web-tags">
                <span className="web-tag">AI Agent</span>
                <span className="web-tag">LLM</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">💬</div>
              <h3>AI Chatbots</h3>
              <p>
                Website and messaging assistants that engage visitors, answer
                FAQs and capture opportunities 24/7.
              </p>
              <div className="web-tags">
                <span className="web-tag">Website</span>
                <span className="web-tag">WhatsApp</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">⚙️</div>
              <h3>Business Process Automation</h3>
              <p>
                Automate repetitive tasks across leads, operations,
                notifications, approvals and internal workflows.
              </p>
              <div className="web-tags">
                <span className="web-tag">Workflows</span>
                <span className="web-tag">Operations</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">🔗</div>
              <h3>API &amp; Tool Integration</h3>
              <p>
                Connect your CRM, website, forms, spreadsheets, communication
                tools and business software.
              </p>
              <div className="web-tags">
                <span className="web-tag">API</span>
                <span className="web-tag">Integrations</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">📩</div>
              <h3>Lead Automation</h3>
              <p>
                Capture, qualify, route and follow up with leads automatically so
                opportunities don&apos;t sit unanswered.
              </p>
              <div className="web-tags">
                <span className="web-tag">CRM</span>
                <span className="web-tag">Follow-up</span>
              </div>
            </div>

            <div className="service-web-card">
              <div className="web-icon">📊</div>
              <h3>Reporting Automation</h3>
              <p>
                Collect data and generate recurring reports, summaries and
                alerts without manual spreadsheet work.
              </p>
              <div className="web-tags">
                <span className="web-tag">Reports</span>
                <span className="web-tag">Dashboards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US / LEVERAGE */}
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
                We don&apos;t add AI because it&apos;s trendy. We use it where it
                can create <span>real leverage.</span>
              </h3>
              <p>
                As a full-fledged agency, we can connect your automation with your
                website, marketing, social media, CRM and customer journey —
                creating one connected digital system.
              </p>
            </div>

            <div className="value-list">
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Business-first approach</h4>
                  <p>
                    We start with your process and pain points, not a technology
                    checklist.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Human + AI workflows</h4>
                  <p>
                    Automate the repetitive parts while keeping people in
                    control of important decisions.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Connected systems</h4>
                  <p>
                    Move information between tools without repetitive copy-paste
                    work.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Scalable setup</h4>
                  <p>
                    Build a foundation that can grow as your team and processes
                    evolve.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Clear handover</h4>
                  <p>
                    Documented workflows and understandable systems instead of
                    black boxes.
                  </p>
                </div>
              </div>
              <div className="value-item">
                <div className="val-check">✓</div>
                <div>
                  <h4>Ongoing optimization</h4>
                  <p>
                    Review workflows and improve them as your business learns
                    what works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="services" id="usecases">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">Use Cases</div>
            <h2 className="section-title">
              AI that works across your <span>business.</span>
            </h2>
            <p className="section-sub">
              From front-office customer interactions to back-office operations,
              automation can remove friction from many parts of your workflow.
            </p>
          </div>

          <div className="use-grid reveal">
            <div className="use">
              <div className="use-icon">🧲</div>
              <h4>Lead Qualification</h4>
              <p>
                AI asks the right questions, identifies intent and routes
                qualified leads automatically.
              </p>
            </div>
            <div className="use">
              <div className="use-icon">📞</div>
              <h4>Customer Support</h4>
              <p>
                Answer common questions instantly and escalate complex requests
                when needed.
              </p>
            </div>
            <div className="use">
              <div className="use-icon">📝</div>
              <h4>Content Operations</h4>
              <p>
                Repurpose information, draft content and streamline recurring
                publishing workflows.
              </p>
            </div>
            <div className="use">
              <div className="use-icon">📋</div>
              <h4>Admin Work</h4>
              <p>
                Automate repetitive data entry, notifications, approvals and
                document workflows.
              </p>
            </div>
            <div className="use">
              <div className="use-icon">💰</div>
              <h4>Sales Follow-up</h4>
              <p>
                Trigger personalized follow-ups based on lead activity and
                pipeline stage.
              </p>
            </div>
            <div className="use">
              <div className="use-icon">📊</div>
              <h4>Business Reporting</h4>
              <p>
                Turn data from multiple tools into useful summaries and recurring
                reports.
              </p>
            </div>
            <div className="use">
              <div className="use-icon">🔍</div>
              <h4>Knowledge Search</h4>
              <p>
                Help teams find answers across internal documents and approved
                business information.
              </p>
            </div>
            <div className="use">
              <div className="use-icon">🔔</div>
              <h4>Smart Alerts</h4>
              <p>
                Notify the right person when important events, thresholds or
                exceptions occur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="workflow" id="workflow">
        <div className="section-inner">
          <div className="center services-headline">
            <div className="section-eyebrow">Example Workflow</div>
            <h2 className="section-title">
              One process. <span>Fully connected.</span>
            </h2>
            <p className="section-sub">
              A typical lead automation system can connect your website, AI
              assistant, CRM and follow-up into one continuous flow.
            </p>
          </div>

          <div className="workflow-box reveal">
            <div className="workflow-row">
              <div className="node">
                <div className="node-top">
                  <div className="node-icon">1</div>
                  <h4>Website Lead</h4>
                </div>
                <p>Visitor submits a form or starts a conversation.</p>
              </div>
              <div className="arrow"></div>
              <div className="node">
                <div className="node-top">
                  <div className="node-icon">AI</div>
                  <h4>AI Qualification</h4>
                </div>
                <p>AI understands the request and collects key details.</p>
              </div>
              <div className="arrow"></div>
              <div className="node">
                <div className="node-top">
                  <div className="node-icon">✓</div>
                  <h4>CRM + Follow-up</h4>
                </div>
                <p>Lead is stored, assigned and followed up automatically.</p>
              </div>
            </div>
            <div className="workflow-note">
              The exact workflow is customized around your tools, team and
              business rules.
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
              From manual task to <span>smart system.</span>
            </h2>
            <p className="section-sub">
              We focus on practical automation that is understandable, testable
              and connected to a real business outcome.
            </p>
          </div>

          <div className="process-web-grid reveal">
            <div className="step-web">
              <div className="step-web-num">01 / DISCOVER</div>
              <h4>Map</h4>
              <p>Understand your process, tools, bottlenecks and goals.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">02 / DESIGN</div>
              <h4>Architect</h4>
              <p>Choose the right AI, automation and integration approach.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">03 / BUILD</div>
              <h4>Develop</h4>
              <p>Create workflows, agents, integrations and business logic.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">04 / TEST</div>
              <h4>Validate</h4>
              <p>Test edge cases, outputs, permissions and human handoffs.</p>
            </div>
            <div className="step-web">
              <div className="step-web-num">05 / OPTIMIZE</div>
              <h4>Improve</h4>
              <p>Monitor results and refine the system as usage grows.</p>
            </div>
          </div>
        </div>
      </section>

            <GrowthAuditCTA />
      <Footer />
    </>
  );
}
