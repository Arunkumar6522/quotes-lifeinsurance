import { ServiceCardSkeleton } from "@/components/Skeleton";
import SkeletonStyles from "@/components/Skeleton";

export default function ServicesLoading() {
  return (
    <>
      <SkeletonStyles />
      <div style={{ background: "var(--dark)", padding: "56px 0 48px", textAlign: "center" }}>
        <div className="container">
          <div style={{ width: "100px", height: "12px", borderRadius: "6px", margin: "0 auto 16px", background: "rgba(255,255,255,0.15)" }} />
          <div style={{ width: "280px", height: "36px", borderRadius: "8px", margin: "0 auto 12px", background: "rgba(255,255,255,0.2)" }} />
          <div style={{ width: "360px", height: "14px", borderRadius: "6px", margin: "0 auto", background: "rgba(255,255,255,0.1)" }} />
        </div>
      </div>
      <section style={{ padding: "72px 0", background: "#fff" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
              <ServiceCardSkeleton />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ height: "16px", background: "#f0f0f0", borderRadius: "6px" }} />
                <div style={{ height: "16px", background: "#f0f0f0", borderRadius: "6px", width: "85%" }} />
                <div style={{ height: "16px", background: "#f0f0f0", borderRadius: "6px", width: "70%" }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
