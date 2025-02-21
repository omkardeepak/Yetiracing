import React from "react";
import { cn } from "@/lib/utils"; // Assuming `cn` utility function exists for class concatenation

const AnimatedGrid = ({ className = "" }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute h-full w-full  opacity-50 [perspective:200px]",
        className
      )}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(45deg)]">
      <div
  className={cn(
    "animate-grid",
    "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]",
    // Light Styles (White Grid Lines, Transparent Background)
    // "[background-image:linear-gradient(to_right,rgba(255,255,255,0.7)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_0)]",
    // Dark Styles (White Grid Lines on Dark Mode, Transparent Background)
    "[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]"
  )}
/>

      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-transparent" />
    </div>
  );
};

export default AnimatedGrid;
