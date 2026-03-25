import React, { ReactNode } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "", id }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal-section ${isVisible ? "is-visible" : "is-hidden"} ${className}`.trim()}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
