import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import KaTeXRenderer from "../components/KaTeXRenderer";
import { demos } from "../data/portfolioData";
import { Demo } from "../types";

const DemoCard: React.FC<{ demo: Demo }> = ({ demo }) => (
  <article className="glass-card glass-card--hover">
    <p className="section-kicker">{demo.tags.join(" • ")}</p>
    <h3 className="item-title">{demo.title}</h3>
    <p className="item-description">{demo.description}</p>
    {demo.latexEquation && <KaTeXRenderer latex={demo.latexEquation} />}
    {demo.codeSnippet && (
      <div className="code-block">
        <pre>
          <code>{demo.codeSnippet.trim()}</code>
        </pre>
      </div>
    )}
  </article>
);

const DemosPage: React.FC = () => (
  <AnimatedSection className="section-shell">
    <div className="section-card">
      <div className="section-intro">
        <p className="eyebrow">Demos</p>
        <h1 className="section-title">A place for technical explainers, computational experiments, and theory-driven visual modules.</h1>
        <p className="section-description">
          This page stays lightweight and page-based, but the layout is now
          ready for future interactive demos, embedded canvases, and conceptual
          explainers instead of only static text cards.
        </p>
      </div>

      <div className="list-stack">
        {demos.map((demo) => (
          <DemoCard key={demo.title} demo={demo} />
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default DemosPage;
