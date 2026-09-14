/* Reusable skeleton shimmer blocks */

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
}

export function Skeleton({ width = "100%", height = "16px", borderRadius = "6px", style }: SkeletonProps) {
  return (
    <div style={{
      width, height, borderRadius,
      background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.5s infinite",
      ...style,
    }} />
  );
}

export function BlogCardSkeleton() {
  return (
    <div style={{
      borderRadius: "16px", overflow: "hidden",
      border: "1px solid #e2e8f0", background: "#fff",
    }}>
      <Skeleton height="200px" borderRadius="0" />
      <div style={{ padding: "18px 18px 22px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Skeleton width="80px" height="22px" borderRadius="20px" />
          <Skeleton width="70px" height="14px" />
        </div>
        <Skeleton height="18px" />
        <Skeleton height="18px" width="80%" />
        <Skeleton height="14px" width="60%" />
        <Skeleton height="13px" width="40%" style={{ marginTop: "6px" }} />
      </div>
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div style={{
      borderRadius: "16px", padding: "28px",
      border: "1px solid #e2e8f0", background: "#fff",
      display: "flex", flexDirection: "column", gap: "12px",
    }}>
      <Skeleton width="48px" height="48px" borderRadius="50%" />
      <Skeleton height="20px" width="70%" />
      <Skeleton height="14px" />
      <Skeleton height="14px" width="85%" />
      <Skeleton height="14px" width="60%" />
    </div>
  );
}

export function BlogPostSkeleton() {
  return (
    <div style={{ maxWidth: "760px" }}>
      <Skeleton height="340px" borderRadius="16px" style={{ marginBottom: "32px" }} />
      <Skeleton height="14px" width="30%" style={{ marginBottom: "20px" }} />
      <Skeleton height="32px" style={{ marginBottom: "8px" }} />
      <Skeleton height="32px" width="75%" style={{ marginBottom: "32px" }} />
      {[1,2,3,4,5].map(i => (
        <div key={i} style={{ marginBottom: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <Skeleton height="15px" />
          <Skeleton height="15px" />
          <Skeleton height="15px" width="88%" />
        </div>
      ))}
    </div>
  );
}

export default function SkeletonStyles() {
  return (
    <style>{`
      @keyframes shimmer {
        0%   { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
    `}</style>
  );
}
