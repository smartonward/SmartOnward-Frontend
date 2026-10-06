"use client";

import { useEffect } from "react";

export default function AmbientBackground() {
  // Mouse-following Blue Glow Spotlight effect
  useEffect(() => {
    const glow = document.getElementById("cursor-blue-glow");
    if (!glow) return;

    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;
    let isMoving = false;
    let animationFrameId: number;

    const handlePointerMove = (e: PointerEvent) => {
      // Account for CSS zoom on the html element
      const zoomStr = getComputedStyle(document.documentElement).zoom;
      const zoom = zoomStr && zoomStr !== "normal" ? parseFloat(zoomStr) : 1;

      targetX = e.clientX / zoom;
      targetY = e.clientY / zoom;

      if (!isMoving) {
        isMoving = true;
        animationFrameId = requestAnimationFrame(renderCursor);
      }
    };

    function renderCursor() {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      if (glow) {
        glow.style.left = `${currentX}px`;
        glow.style.top = `${currentY}px`;
      }

      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        animationFrameId = requestAnimationFrame(renderCursor);
      } else {
        isMoving = false;
      }
    }

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        id="cursor-blue-glow"
        className="fixed pointer-events-none rounded-full blur-3xl -z-5 transition-transform duration-75 ease-out"
        style={{
          width: "480px",
          height: "480px",
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.22) 0%, rgba(147, 210, 253, 0.18) 45%, rgba(255, 255, 255, 0) 70%)",
          transform: "translate(-50%, -50%)",
          left: "-500px",
          top: "-500px",
        }}
      />
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Sky Blue Orb 1 */}
        <div className="absolute -top-24 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#60A5FA]/35 via-[#38BDF8]/25 to-transparent blur-3xl animate-drift-1" />
        {/* Sky Blue Orb 2 */}
        <div className="absolute top-1/2 -right-32 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#38BDF8]/30 via-[#93C5FD]/25 to-transparent blur-3xl animate-drift-2" />
        {/* Sky Blue Orb 3 */}
        <div className="absolute -bottom-32 left-10 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#93C5FD]/35 via-[#60A5FA]/25 to-transparent blur-3xl animate-drift-3" />
      </div>
    </>
  );
}
