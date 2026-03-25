import React, { useEffect, useRef } from "react";
import katex from "katex";

interface KaTeXRendererProps {
  latex: string;
}

const KaTeXRenderer: React.FC<KaTeXRendererProps> = ({ latex }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      katex.render(latex, containerRef.current, {
        throwOnError: false,
        displayMode: true,
      });
    } catch (error) {
      console.error("KaTeX rendering error:", error);
      containerRef.current.textContent = "Equation unavailable.";
    }
  }, [latex]);

  return <div ref={containerRef} className="equation-block" />;
};

export default KaTeXRenderer;
