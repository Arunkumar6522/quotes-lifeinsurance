import Image from "next/image";
import Animate from "@/components/Animate";

const logos = [
  { file: "assumption.png",        name: "Assumption Life" },
  { file: "canada protection.png", name: "Canada Protection Plan" },
  { file: "desjardins.png",        name: "Desjardins" },
  { file: "edgebenefits.png",      name: "Edge Benefits" },
  { file: "empire life.png",       name: "Empire Life" },
  { file: "foresters.png",         name: "Foresters" },
  { file: "humania.png",           name: "Humania Assurance" },
  { file: "ivari.png",             name: "Ivari" },
  { file: "manulife.png",          name: "Manulife" },
  { file: "uv insurance.png",      name: "UV Insurance" },
];

// Triple for seamless fast loop
const allLogos = [...logos, ...logos, ...logos];

export default function PartnersSection() {
  return (
    <section style={{ padding: "72px 0 80px", background: "#fff" }}>

      {/* Heading — with bottom spacing */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <Animate>
          <span className="section-label">Our Carriers</span>
          <h2 style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 800, marginTop: "8px",
            color: "var(--dark)",
          }}>
            Insurance Companies We Represent
          </h2>
        </Animate>
      </div>

      {/* Marquee track — edge fades */}
      <div style={{
        overflow: "hidden",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
        maskImage: "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
      }}>
        <div className="marquee-track">
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              style={{
                flexShrink: 0,
                width: "168px",
                height: "88px",
                padding: "14px 20px",
                borderRadius: "16px",
                background: "#fff",
                border: "1.5px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            >
              <Image
                src={`/company/${logo.file}`}
                alt={logo.name}
                width={120}
                height={52}
                style={{
                  maxHeight: "52px",
                  width: "auto",
                  objectFit: "contain",
                  opacity: 0.8,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacing block */}
      <div style={{ height: "48px" }} />
    </section>
  );
}
