import { useState } from "react";
import front from "../images/shop/one.png";
import specs from "../images/shop/two.png";
import imageHand from "../images/backgroundHand.png";
import hinduLogo from "../images/HinduLogo.png";
import imageScience from "../images/ScienceImage.png"
import Footer from "../components/Footer";

const styles = {
  introText: {
    fontSize: "15px",
    lineHeight: 1.8,
    color: "#4a4540",
    fontWeight: 300,
    margin: 0,
  },
  sectionLabel: {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.13em",
    textTransform: "uppercase",
    color: "#9b8e7e",
    margin: "22px 0 10px",
  },
  featList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  featItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    fontSize: "14px",
    color: "#4a4540",
    lineHeight: 1.7,
    fontWeight: 300,
  },
  dot: {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: "#c8b89a",
    flexShrink: 0,
    marginTop: "8px",
  },
  boxGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "10px",
    marginTop: "4px",
  },
  boxCard: {
    background: "#f3efe9",
    borderRadius: "6px",
    padding: "12px 14px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "13px",
    color: "#4a4540",
    fontWeight: 300,
  },
  boxIcon: {
    fontSize: "16px",
    color: "#9b8e7e",
  },
  noteBlock: {
    background: "#f3efe9",
    borderLeft: "2px solid #c8b89a",
    borderRadius: "0 6px 6px 0",
    padding: "14px 16px",
    fontSize: "13.5px",
    color: "#4a4540",
    lineHeight: 1.75,
    fontWeight: 300,
  },
  accLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    color: "#b87333",
    textDecoration: "none",
    width: "fit-content",
  },
};

const HOW_TO_STEPS = [
  { bold: "Skye vibrates. Breathe in.", sub: "Feel the pulse in your hand." },
  { bold: "Skye stops. Hold.", sub: "Pause for a moment." },
  { bold: "Skye vibrates again. Breathe out.", sub: "Let your body relax." },
  { bold: "Skye stops. Hold.", sub: "Feel calmer with each breath." },
];

const ACCORDION_ITEMS = [
  {
    id: "specs",
    title: "Product specifications",
    content: (
      <div>
        <p style={styles.introText}>
          Skye is a simple, screen-free way to relax, reset, and feel calmer wherever you are.
          Using gentle haptic guidance, Skye helps guide your breathing naturally for focused
          mornings, less stressful days, and better sleep. Feel a lasting difference in as little
          as 30 days with guided breathing that fits effortlessly into your daily routine — from
          the first thing you do in the morning to the last thing before sleep, and anytime in between.
        </p>

        <p style={styles.sectionLabel}>Why Skye</p>
        <div style={styles.featList}>
          {[
            "Screen-free, haptic breathing guide",
            "Guided 5 to 12 minute breathing sessions",
            "Four breathing modes for calm, focus, relaxation, and sleep",
            "Minimal Scandinavian-inspired design",
            "Up to 14 days of battery life",
            "USB-C rechargeable, no disposable batteries needed",
          ].map((item, i) => (
            <div key={i} style={styles.featItem}>
              <span style={styles.dot} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p style={styles.sectionLabel}>What's in the box</p>
        <div style={styles.boxGrid}>
          {["1 × Skye breathing guide", "1 × Quick start guide"].map((item, i) => (
            <div key={i} style={styles.boxCard}>
              <span style={styles.boxIcon}>□</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "how",
    title: "How does it work?",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <p style={styles.introText}>
          Slow breathing at around 6 breaths per minute helps activate the body's natural
          relaxation response. Skye is a handheld, screen-free breathing companion designed to
          guide you through calming breathing exercises that support focused mornings, less
          stressful days, quiet the mind, and better sleep.
        </p>
        <p style={styles.introText}>
          Simply hold Skye in your hand and breathe along with its gentle haptic guidance. Inhale
          as the device vibrates, hold when the vibration pauses, and exhale as the vibration
          returns. No screens, no notifications, no distractions. Just your breath.
        </p>
        <p style={styles.introText}>
          When you inhale, your heart rate naturally rises, and when you exhale, it slows down.
          This effect becomes more noticeable during slow, intentional breathing exercises. With
          regular practice, your overall Heart Rate Variability (HRV) can improve, helping support
          better stress resilience and nervous system balance.
        </p>
        <p style={styles.introText}>
          Skye is designed to fit naturally into everyday life — the first thing you do in the
          morning, the last thing before sleep, and anytime in between. Use it between meetings,
          during traffic jams, in bed before sleep, or right after waking up. Wherever you are,
          whenever you need a moment to slow down, Skye is there to help you reset and reconnect
          with your breath.
        </p>
        <div style={styles.noteBlock}>
          <strong style={{ fontWeight: 500, color: "#1a1814" }}>NOTE: </strong>
          For best results, we recommend using Skye daily during the first 2 to 3 weeks. Start
          with a 5-minute Morning Focus session <strong style={{ fontWeight: 500 }}>(Mode 1)</strong> soon
          after waking up, while still in bed, to help you begin the day feeling calm, clear, and
          focused. Before sleep, use a 7-minute Sleep One session{" "}
          <strong style={{ fontWeight: 500 }}>(Mode 3)</strong> as soon as you get into bed to
          help your body slow down, unwind, and prepare for better rest.
        </div>
      </div>
    ),
  },
  {
    id: "warranty",
    title: "Warranty",
    content: (
      <div>
        <p style={styles.introText}>
          Skye is covered by a limited warranty against defects in materials and workmanship for
          one year from the date of original purchase. This warranty applies only to products
          purchased directly from{" "}
          <span style={{ color: "#b87333" }}>www.skyedevices.com</span>.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "18px" }}>
          {[
            { label: "Cancellation & Refund Policy", href: "https://www.skyedevices.com/cancellation-refund-policy" },
            { label: "Warranty Policy", href: "https://www.skyedevices.com/warranty-policy" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.accLink}
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    ),
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: "0.5px solid #ddd8d0", fontFamily: "'DM Sans', sans-serif" }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          background: "none",
          border: "none",
          padding: "22px 0",
          cursor: "pointer",
          textAlign: "left",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(18px, 1.6vw, 22px)",
            fontWeight: 400,
            color: "#1a1814",
            lineHeight: 1.2,
          }}
        >
          {item.title}
        </span>
        <span
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: "0.5px solid #ddd8d0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: "16px",
            color: "#9b8e7e",
          }}
        >
          <span
            style={{
              display: "inline-block",
              transition: "transform 0.3s",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              lineHeight: 1,
            }}
          >
            ↓
          </span>
        </span>
      </button>
      <div style={{ display: isOpen ? "block" : "none", paddingBottom: "28px" }}>
        {item.content}
      </div>
    </div>
  );
}

export default function ShopPage() {
  const images = [front, front, front, front];
  const [activeImage, setActiveImage] = useState(images[0]);
  const [openAccordion, setOpenAccordion] = useState("specs");

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .shop-page { font-family: 'DM Sans', sans-serif; background: #f9f7f4; }
        .shop-page * { box-sizing: border-box; }
        .thumb-btn { background: none; border: none; padding: 0; cursor: pointer; border-radius: 8px; overflow: hidden; transition: all 0.2s; }
        .thumb-btn:hover { opacity: 0.85; }
        .buy-btn { display: inline-block; background: #1a1814; color: #f9f7f4 !important; padding: 14px 36px; border-radius: 100px; font-size: 14px; font-weight: 500; letter-spacing: 0.04em; text-decoration: none; transition: background 0.2s, transform 0.15s; font-family: 'DM Sans', sans-serif; }
        .buy-btn:hover { background: #2e2a25; transform: translateY(-1px); }

        /* ── How To Use ── */
        .how-section {
          position: relative;
          width: 100%;
          min-height: 85vh;
          display: flex;
          align-items: stretch;
          overflow: hidden;
        }
        .how-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center center;
          z-index: 0;
        }
        .how-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(10, 6, 2, 0.86) 0%,
            rgba(10, 6, 2, 0.22) 36%,
            rgba(10, 6, 2, 0.08) 58%,
            rgba(10, 6, 2, 0.50) 100%
          );
        }
        .how-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(48px, 7vh, 80px) clamp(36px, 6vw, 120px);
          display: grid;
          grid-template-columns: 30% 40% 30%;
          grid-template-rows: auto 1fr;
          row-gap: 0;
          column-gap: 0;
        }
        .how-heading-cell {
          grid-column: 1 / -1;
          grid-row: 1;
          text-align: center;
          padding-bottom: clamp(40px, 6vh, 72px);
        }
        .how-steps-col {
          grid-column: 1 / 2;
          grid-row: 2;
          display: flex;
          flex-direction: column;
          gap: clamp(28px, 4vh, 44px);
          justify-content: center;
          padding-right: 24px;
        }
        .how-center-col {
          grid-column: 2 / 3;
          grid-row: 2;
        }
        .how-right-col {
          grid-column: 3 / 4;
          grid-row: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding-left: 24px;
        }
        @media (max-width: 860px) {
          .how-section { min-height: unset; }
          .how-inner {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            padding: 56px 28px 64px;
            row-gap: 0;
          }
          .how-heading-cell {
            grid-column: 1;
            grid-row: 1;
            text-align: left;
            padding-bottom: 36px;
          }
          .how-steps-col {
            grid-column: 1;
            grid-row: 2;
            padding-right: 0;
            gap: 28px;
          }
          .how-center-col { display: none; }
          .how-right-col {
            grid-column: 1;
            grid-row: 3;
            align-items: flex-start;
            padding-left: 0;
            padding-top: 48px;
          }
        }
      `}</style>

      <section className="shop-page">
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "clamp(80px,10vh,140px) clamp(24px,5vw,100px)",
          }}
        >
          {/* ── Product Hero ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(40px,6vw,100px)",
              alignItems: "start",
            }}
          >
            {/* Image Gallery */}
            <div>
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "0.5px solid #ddd8d0",
                  background: "#fff",
                }}
              >
                <img
                  src={activeImage}
                  alt="Skye Device"
                  style={{ width: "100%", objectFit: "cover", display: "block", transition: "opacity 0.3s" }}
                />
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className="thumb-btn"
                    style={{
                      border: activeImage === img ? "1.5px solid #b87333" : "0.5px solid #ddd8d0",
                      borderRadius: "8px",
                      outline: activeImage === img ? "3px solid #b8733320" : "none",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Product view ${index + 1}`}
                      style={{ width: "68px", height: "68px", objectFit: "cover", display: "block" }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div style={{ maxWidth: "500px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#9b8e7e",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                Skye Devices
              </span>

              <h1
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "clamp(28px, 2.4vw, 40px)",
                  fontWeight: 400,
                  color: "#1a1814",
                  lineHeight: 1.15,
                  margin: "0 0 20px",
                  letterSpacing: "-0.01em",
                }}
              >
                The Nudge
              </h1>

              <div style={{ width: "36px", height: "1px", background: "#c8b89a", marginBottom: "20px" }} />

              <p
                style={{
                  fontSize: "clamp(14px, 1vw, 16px)",
                  color: "#4a4540",
                  lineHeight: 1.8,
                  fontWeight: 300,
                  margin: "0 0 32px",
                }}
              >
                Skye is a small, portable timer made for micro-meditation. Up to 30 days on a
                single charge. Built for meditation on the go, Skye gently reminds you to pause,
                breathe, and reset throughout your day. Choose from four modes to match your rhythm.
              </p>

              <div style={{ marginBottom: "28px" }}>
                <p
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "clamp(24px, 2vw, 32px)",
                    fontWeight: 400,
                    color: "#1a1814",
                    margin: "0 0 6px",
                  }}
                >
                  ₹4,900
                </p>
                <p style={{ fontSize: "13px", color: "#9b8e7e", fontWeight: 300 }}>
                  ₹4,100 +{" "}
                  <span style={{ color: "#c0614a", fontWeight: 400 }}>18% GST</span>
                </p>
              </div>

              <a
                href="https://rzp.io/rzp/skyeone"
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn"
              >
                Buy now
              </a>

              <p style={{ fontSize: "13px", color: "#9b8e7e", marginTop: "16px", fontWeight: 300 }}>
                Current delivery time: 12–18 working days.
              </p>
            </div>
          </div>

          {/* ── Product Schematic ── */}
          <div style={{ marginTop: "clamp(100px,12vh,160px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#9b8e7e",
                }}
              >
                Technical
              </span>
              <div style={{ flex: 1, height: "0.5px", background: "#ddd8d0" }} />
            </div>

            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(20px, 1.8vw, 28px)",
                fontWeight: 400,
                color: "#1a1814",
                margin: "0 0 36px",
                letterSpacing: "-0.01em",
              }}
            >
              Product Schematic
            </h2>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={specs}
                alt="Product specifications schematic"
                style={{ width: "100%", maxWidth: "800px", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* ── How To Use — full-width background section ── */}
        <section className="how-section">
          <div
            className="how-bg"
            style={{ backgroundImage: `url(${imageHand})` }}
          />
          <div className="how-inner">

            {/* Heading — full width, top center */}
            <div className="how-heading-cell">
              <h2
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "clamp(32px, 3.5vw, 54px)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                How to use Skye
              </h2>
            </div>

            {/* Steps — left col */}
            <div className="how-steps-col">
              {HOW_TO_STEPS.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "clamp(13px, 1.1vw, 16px)",
                      color: "rgba(255,255,255,0.38)",
                      fontStyle: "italic",
                      minWidth: "22px",
                      paddingTop: "3px",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}.
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: "clamp(16px, 1.4vw, 22px)",
                        fontWeight: 600,
                        color: "#fff",
                        margin: "0 0 6px",
                        lineHeight: 1.3,
                      }}
                    >
                      {step.bold}
                    </p>
                    <p
                      style={{
                        fontSize: "clamp(14px, 1.1vw, 18px)",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.62)",
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {step.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Centre spacer row 2 — hand shows through bg */}
            <div className="how-center-col" />

            {/* Right — press badge, spans both rows */}
            <div className="how-right-col">
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                As featured in
              </span>
              <div
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "0.5px solid rgba(255,255,255,0.22)",
                  borderRadius: "14px",
                  padding: "clamp(16px,2vw,28px) clamp(20px,2.5vw,36px)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={hinduLogo}
                  alt="The Hindu"
                  style={{
                    width: "clamp(120px, 11vw, 172px)",
                    filter: "brightness(0) invert(1)",
                    opacity: 1,
                    display: "block",
                  }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── Accordion Sections ── */}
        <div style={{ background: "#f9f7f4" }}>
          <div
            style={{
              maxWidth: "1160px",
              margin: "0 auto",
              padding: "clamp(80px,10vh,120px) clamp(24px,5vw,100px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#9b8e7e",
                }}
              >
                Details
              </span>
              <div style={{ flex: 1, height: "0.5px", background: "#ddd8d0" }} />
            </div>

            <div style={{ borderTop: "0.5px solid #ddd8d0" }}>
              {ACCORDION_ITEMS.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openAccordion === item.id}
                  onToggle={() => toggleAccordion(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}