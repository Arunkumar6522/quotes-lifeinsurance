"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPath) {
      // New route — show loader
      setLoading(true);
      setProgress(20);
      const t1 = setTimeout(() => setProgress(60), 150);
      const t2 = setTimeout(() => setProgress(90), 400);
      const t3 = setTimeout(() => {
        setProgress(100);
        setTimeout(() => { setLoading(false); setProgress(0); }, 200);
      }, 600);
      setPrevPath(pathname);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, [pathname, prevPath]);

  if (!loading && progress === 0) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0,
      height: "3px", zIndex: 9999,
      background: "#e0e0e0",
      pointerEvents: "none",
    }}>
      <div style={{
        height: "100%",
        width: `${progress}%`,
        background: "var(--green)",
        transition: "width 0.3s ease",
        borderRadius: "0 2px 2px 0",
        boxShadow: "0 0 10px rgba(99,160,102,0.6)",
      }} />
    </div>
  );
}
