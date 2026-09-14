"use client";
import { useModal } from "@/lib/modal";

interface Props {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function QuoteButton({
  label = "Get a Free Quote",
  className = "btn-primary",
  style,
}: Props) {
  const { openModal } = useModal();
  return (
    <button onClick={openModal} className={className} style={style}>
      {label}
    </button>
  );
}
