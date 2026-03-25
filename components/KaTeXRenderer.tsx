import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface KaTeXRendererProps {
  latex: string;
}

const KaTeXRenderer: React.FC<KaTeXRendererProps> = ({ latex }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(latex, containerRef.current, {
          throwOnError: false,
          displayMode: true,
        });
      } catch (error) {
        console.error("KaTeX rendering error: ", error);
        if (containerRef.current) {
            containerRef.current.textContent = "Error rendering equation.";
        }
      }
    }
  }, [latex]);

  return <div ref={containerRef} className="text-center p-4 text-inherit overflow-x-auto" />;
};

export default KaTeXRenderer;