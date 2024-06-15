// TesteRadio.tsx (or .jsx if not using TypeScript)

import React, { useState, useRef, forwardRef } from "react";
import { DOMHelper, RadioTile } from "rsuite";

interface TesteRadioProps {
  label: string; // Renamed for consistency with React conventions
  value: string;
  children?: React.ReactNode; // Optional children prop
}

export const TesteRadio = forwardRef<HTMLDivElement, TesteRadioProps>(
  ({ label, value, children }, ref) => {
    const [html, setHtml] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const viewRef = useRef<HTMLDivElement>(null);

    const viewHtmlCode = () => {
      if (containerRef.current) {
        setHtml(containerRef.current.innerHTML);
      }
    };

    return (
      <div ref={ref}>
        <RadioTile
          label={label}
          value={value}
          ref={viewRef}
          onClick={() => {
            if (viewRef.current) {
              DOMHelper.toggleClass(viewRef.current, "rs-radio-tile-checked");
              DOMHelper.removeClass(viewRef.current, "rs-radio-tile-mark-icon");
              viewHtmlCode();
            }
          }}
        >
          {children}
        </RadioTile>
        <div ref={containerRef} />
      </div>
    );
  }
);

// TesteRadio; // Export the component as default
