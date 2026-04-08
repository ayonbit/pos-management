"use client";

import { TooltipPosition, TooltipProps } from "@/types/ToolTips.types";
import clsx from "clsx";
import { useState } from "react";

const Tooltip = ({ content, children, position = "top" }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const positionStyles: Record<TooltipPosition, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible((prev) => !prev)} // mobile support
    >
      {children}

      <div
        className={clsx(
          "absolute z-50 whitespace-nowrap  bg-black text-white text-xs px-2 py-1 shadow-md transition-all duration-200",
          positionStyles[position],
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none",
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
