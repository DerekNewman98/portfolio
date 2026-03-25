import React from "react";
import LinkIcon from "../components/icons/LinkIcon";
import AnimatedSection from "../components/AnimatedSection";
import {
  academicBackground,
  awards,
  oralPresentations,
  posterPresentations,
  publications,
  researchTopics,
} from "../data/portfolioData";
import {
  AcademicItem,
  Award,
  Presentation,
  Publication,
  ResearchTopic,
} from "../types";

const ResearchTopicCard: React.FC<{ topic: ResearchTopic }> = ({ topic }) => (
  <article className="glass-card glass-card--hover">
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
);

const PublicationCard: React.FC<{ publication: Publication }> = ({ publication }) => (
  <article className="glass-card glass-card--hover">
    <p className="item-meta">
      {publication.journal} • {publication.year}
    </p>
    <h3 className="item-title">{publication.title}</h3>
    <p className="item-description">{publication.authors}</p>
    {publication.summary && <p className="item-description">{publication.summary}</p>}
    <div className="link-row">
      {publication.links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="inline-link"
        >
          <LinkIcon />
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  </article>
);

const TimelineCard: React.FC<{ item: AcademicItem | Award }> = ({ item }) => (
  <article className="glass-card">
    <p className="item-meta">{"tenure" in item ? item.tenure : item.year}</p>
    <h3 className="item-title">{item.name ?? item.title}</h3>
    <p className="item-description">
      {"institution" in item ? item.institution : item.awardedBy}
    </p>
    {"description" in item && <p className="item-description">{item.description}</p>}
  </article>
);

const PresentationCard: React.FC<{ item: Presentation }> = ({ item }) => (
  <article className="glass-card">
    <h3 className="item-title">{item.title}</h3>
    <p className="item-description">{item.authors}</p>
    <p className="item-meta">
      {item.event} • {item.year}
    </p>
    <p className="item-description">{item.location}</p>
  </article>
);

const ResearchPage: React.FC = () => (
  <AnimatedSection className="section-shell">
    <div className="section-card">
      <div className="section-intro">
        <p className="eyebrow">Research</p>
        <h1 className="section-title">An academic portfolio built for depth, clarity, and future scientific demos.</h1>
        <p className="section-description">
          This section keeps the page-based architecture you already use, but
          tightens the rhythm, density, and visual language so publications,
          theory threads, and clinical work feel cohesive.
        </p>
      </div>

      <section className="list-stack">
        <div className="section-kicker">Academic background</div>
        <div className="card-grid">
          {academicBackground.map((item) => (
            <TimelineCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="section-shell" style={{ width: "100%", paddingTop: 36 }}>
        <div className="section-intro">
          <div className="section-kicker">Awards and honors</div>
        </div>
        <div className="card-grid card-grid--3">
          {awards.map((award) => (
            <TimelineCard key={`${award.year}-${award.name}`} item={award} />
          ))}
        </div>
      </section>

      <section className="section-shell" style={{ width: "100%", paddingTop: 36 }}>
        <div className="section-intro">
          <div className="section-kicker">Research overview</div>
        </div>
        <div className="card-grid card-grid--2">
          {researchTopics.map((topic) => (
            <ResearchTopicCard key={topic.title} topic={topic} />
          ))}
        </div>
      </section>

      <section className="section-shell" style={{ width: "100%", paddingTop: 36 }}>
        <div className="section-intro">
          <div className="section-kicker">Selected publications</div>
        </div>
        <div className="card-grid card-grid--2">
          {publications.map((publication) => (
            <PublicationCard key={publication.title} publication={publication} />
          ))}
        </div>
      </section>

      <section className="section-shell" style={{ width: "100%", paddingTop: 36 }}>
        <div className="two-column">
          <div>
            <div className="section-kicker">Oral presentations</div>
            <div className="list-stack">
              {oralPresentations.map((item) => (
                <PresentationCard key={item.title} item={item} />
              ))}
            </div>
          </div>
          <div>
            <div className="section-kicker">Poster presentations</div>
            <div className="list-stack">
              {posterPresentations.map((item) => (
                <PresentationCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  </AnimatedSection>
);

export default ResearchPage;
