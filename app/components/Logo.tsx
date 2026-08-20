import React from "react";

export function LogoIcon({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="SmartOnward Logo"
      style={{ height: `${size}px`, width: "auto", objectFit: "contain", display: "block" }}
      className={`logo-img ${className}`}
    />
  );
}

export default function Logo({
  size = 34,
  showText = true,
  textColor,
  smartColor,
  className = "",
}: {
  size?: number;
  showText?: boolean;
  textColor?: string;
  smartColor?: string;
  className?: string;
}) {
  return (
    <div className={`logo ${className}`}>
      <LogoIcon size={size} />
      {showText && (
        <div className="logo-text" style={textColor ? { color: textColor } : undefined}>
          <span style={smartColor ? { color: smartColor } : undefined}>Smart</span>Onward
        </div>
      )}
    </div>
  );
}
