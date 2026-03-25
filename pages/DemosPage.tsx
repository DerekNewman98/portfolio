import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { demos } from '../data/portfolioData';
import { Demo } from '../types';
import KaTeXRenderer from '../components/KaTeXRenderer';

const DemoCard: React.FC<{ demo: Demo }> = ({ demo }) => (
    <div className="bg-background-secondary rounded-lg border border-transparent hover:border-accent/50 p-6 md:p-8 transition-colors duration-300 shadow-lg">
        <h3 className="text-2xl font-bold text-accent-hover mb-3">{demo.title}</h3>
        <p className="text-text-secondary mb-4">{demo.description}</p>
        {demo.latexEquation && <KaTeXRenderer latex={demo.latexEquation} />}
        {demo.codeSnippet && (
            <div className="bg-gray-900 p-4 rounded-md mt-4 font-mono text-sm text-gray-200 overflow-x-auto border border-gray-700">
                <pre><code>{demo.codeSnippet.trim()}</code></pre>
            </div>
        )}
    </div>
);

const DemosPage: React.FC = () => {
    return (
      <div className="pt-24 min-h-screen bg-background">
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">Demos</h1>
            <p className="text-lg text-text-secondary mb-12">Showcase of technical concepts and implementations.</p>
            
            <div className="space-y-12 max-w-4xl mx-auto">
              {demos.map((demo, index) => (
                <DemoCard key={index} demo={demo} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    );
  };
  
  export default DemosPage;