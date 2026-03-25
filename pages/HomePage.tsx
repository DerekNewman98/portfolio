import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import AnimatedSection from "../components/AnimatedSection";
import BrainCanvas from "../components/BrainCanvas";
import {
  aboutIntro,
  contactLinks,
  heroStatement,
  publications,
  researchTopics,
} from "../data/portfolioData";

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    window.setTimeout(() => {
      scroller.scrollTo(id, {
        duration: 700,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -84,
      });
    }, 120);
  }, [location.hash]);

  return (
    <>
      <section className="hero-section">
        <div className="hero-grid hero-grid--centered">
          <div className="hero-copy hero-copy--centered">
            <p className="eyebrow hero-fade hero-fade--1">{heroStatement.eyebrow}</p>
            <h1 className="hero-title hero-fade hero-fade--2">{heroStatement.title}</h1>
            <div className="hero-visual hero-visual--centered">
              <BrainCanvas />
            </div>
            <p className="hero-subtitle hero-subtitle--centered hero-fade hero-fade--3">
              {heroStatement.subtitle}
            </p>
            <p className="hero-description hero-description--centered hero-fade hero-fade--4">
              {heroStatement.description}
            </p>
            <div className="hero-actions hero-actions--centered hero-fade hero-fade--5">
              <a className="button button--primary" href="#/research">
                Explore research
              </a>
              <a className="button button--ghost" href="#about">
                View overview
              </a>
            </div>
            <div className="metric-row metric-row--centered hero-fade hero-fade--6">
              {heroStatement.metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <div className="metric-card__label">{metric.label}</div>
                  <div className="metric-card__value">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection id="about" className="section-shell">
        <div className="section-card">
          <div className="section-intro">
            <p className="eyebrow">{aboutIntro.eyebrow}</p>
            <h2 className="section-title">{aboutIntro.title}</h2>
            <p className="section-description">{aboutIntro.description}</p>
          </div>
          <div className="two-column">
            <div className="panel-card">
              <div className="section-kicker">Research direction</div>
              <p className="item-description">
                I work at the intersection of neuroimaging, complexity science,
                consciousness research, and machine learning. The goal is not
                just statistical prediction, but building interpretable models of
                how brain dynamics shift across sedation, severe injury, and
                recovery.
              </p>
              <div className="tag-row">
                <span className="tag">EEG and fMRI</span>
                <span className="tag">Clinical translation</span>
                <span className="tag">NeuroAI</span>
              </div>
            </div>
            <div className="panel-card">
              <div className="section-kicker">What this site is for</div>
              <p className="item-description">
                This is not only a CV wrapper. It is the long-term shell for
                publications, scientific demos, theory explanation pages,
                interactive visualizations, and custom research communication
                modules.
              </p>
              <div className="tag-row">
                <span className="tag">Research showcase</span>
                <span className="tag">Visual explainers</span>
                <span className="tag">Future interactive tools</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="section-card">
          <div className="section-intro">
            <p className="eyebrow">Focus Areas</p>
            <h2 className="section-title">Current lines of work</h2>
          </div>
          <div className="card-grid card-grid--2">
            {researchTopics.map((topic) => (
              <article key={topic.title} className="glass-card glass-card--hover">
                <p className="section-kicker">{topic.tags?.join(" • ")}</p>
                <h3 className="item-title">{topic.title}</h3>
                <p className="item-description">{topic.description}</p>
                {topic.details && (
                  <ul className="item-detail-list">
                    {topic.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="section-card">
          <div className="section-intro">
            <p className="eyebrow">Selected Work</p>
            <h2 className="section-title">Recent publication highlights</h2>
          </div>
          <div className="card-grid">
            {publications.map((publication) => (
              <article key={publication.title} className="glass-card glass-card--hover">
                <p className="item-meta">
                  {publication.journal} • {publication.year}
                </p>
                <h3 className="item-title">{publication.title}</h3>
                <p className="item-description">{publication.authors}</p>
                {publication.summary && (
                  <p className="item-description">{publication.summary}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="section-shell">
        <div className="section-card">
          <div className="section-intro">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Open to research, collaboration, and visual systems work.</h2>
            <p className="section-description">
              If you want to discuss consciousness science, EEG criticality,
              scientific visualization, or future interactive demos, get in
              touch.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-list">
              {contactLinks.map((item) => (
                <a key={item.label} className="contact-item" href={item.href}>
                  <div className="contact-item__label">{item.label}</div>
                  <div className="contact-item__value">{item.value}</div>
                </a>
              ))}
            </div>
            <form className="contact-form">
              <input className="input" type="text" placeholder="Your name" />
              <input className="input" type="email" placeholder="Your email" />
              <textarea className="textarea" rows={6} placeholder="What do you want to build or discuss?" />
              <button type="submit" className="button button--primary">
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default HomePage;
