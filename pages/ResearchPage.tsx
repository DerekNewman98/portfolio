import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { researchTopics, publications, academicBackground, oralPresentations, posterPresentations, awards } from '../data/portfolioData';
import { ResearchTopic, Publication, AcademicItem, Presentation, Award } from '../types';
import LinkIcon from '../components/icons/LinkIcon';

const ResearchTopicCard: React.FC<{ topic: ResearchTopic }> = ({ topic }) => (
    <div className="bg-background-secondary p-6 rounded-lg border border-transparent hover:border-accent/50 transition-colors duration-300 shadow-lg">
      <h3 className="text-xl font-bold text-text-primary mb-3">{topic.title}</h3>
      <p className="text-text-secondary mb-3">{topic.description}</p>
      {topic.details && (
        <ul className="space-y-2 list-disc list-inside text-text-secondary font-mono text-sm">
          {topic.details.map((detail, i) => <li key={i}><span className="text-accent mr-2">›</span>{detail}</li>)}
        </ul>
      )}
    </div>
);

const PublicationCard: React.FC<{ pub: Publication }> = ({ pub }) => (
    <div className="bg-background-secondary p-6 rounded-lg border border-transparent hover:border-accent/50 transition-colors duration-300 shadow-lg flex flex-col">
        <div className="flex-grow">
            <p className="text-accent font-mono text-sm mb-2">{pub.journal}, {pub.year}</p>
            <h3 className="text-lg font-bold text-text-primary mb-2">{pub.title}</h3>
            <p className="text-text-secondary text-sm">{pub.authors}</p>
        </div>
        <div className="flex items-center space-x-4 mt-4">
            {pub.links.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors duration-300">
                    <LinkIcon />
                    <span>{link.name}</span>
                </a>
            ))}
        </div>
    </div>
);

const AcademicItemCard: React.FC<{ item: AcademicItem }> = ({ item }) => (
    <div className="bg-background-secondary p-6 rounded-lg shadow-lg">
        <p className="text-accent font-mono text-sm mb-2">{item.tenure}</p>
        <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
        <p className="text-text-secondary font-semibold mb-3">{item.institution}</p>
        <p className="text-text-secondary">{item.description}</p>
    </div>
);

const AwardCard: React.FC<{ award: Award }> = ({ award }) => (
    <div className="bg-background-secondary p-6 rounded-lg shadow-lg">
        <p className="text-accent font-mono text-sm mb-2">{award.year}</p>
        <h3 className="text-xl font-bold text-text-primary">{award.name}</h3>
        <p className="text-text-secondary font-semibold">{award.awardedBy}</p>
    </div>
);


const PresentationCard: React.FC<{ item: Presentation }> = ({ item }) => (
    <div className="bg-background-secondary p-6 rounded-lg shadow-lg flex flex-col justify-between">
        <div>
            <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
            <p className="text-text-secondary text-sm mb-2">{item.authors}</p>
            <p className="text-text-secondary text-sm">{item.event} - {item.year}</p>
            <p className="text-text-secondary text-sm font-mono">{item.location}</p>
        </div>
        {item.link && (
            <div className="mt-4">
                <a href={item.link.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-accent hover:text-accent-hover transition-colors duration-300">
                    <LinkIcon />
                    <span>{item.link.name}</span>
                </a>
            </div>
        )}
    </div>
);


const ResearchPage: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen bg-background">
            <AnimatedSection className="py-16">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">Research</h1>
                    <p className="text-lg text-text-secondary mb-16">An overview of my academic and research activities.</p>
                    
                    {/* Academic Background */}
                    <section id="academic-background" className="mb-20">
                        <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center">
                            Academic & Professional Background
                            <span className="flex-grow h-px bg-background-secondary ml-4"></span>
                        </h2>
                        <div className="space-y-8">
                            {academicBackground.map((item, index) => (
                                <AcademicItemCard key={index} item={item} />
                            ))}
                        </div>
                    </section>
                    
                    {/* Awards & Honors */}
                    <section id="awards" className="mb-20">
                        <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center">
                            Awards & Honors
                            <span className="flex-grow h-px bg-background-secondary ml-4"></span>
                        </h2>
                        <div className="space-y-8">
                            {awards.map((item, index) => (
                                <AwardCard key={index} award={item} />
                            ))}
                        </div>
                    </section>

                    {/* Research Overview */}
                    <section id="research-overview" className="mb-20">
                         <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center">
                            Research Overview
                            <span className="flex-grow h-px bg-background-secondary ml-4"></span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {researchTopics.map((topic, index) => (
                                <ResearchTopicCard key={index} topic={topic} />
                            ))}
                        </div>
                    </section>

                    {/* Publications */}
                    <section id="publications" className="mb-20">
                        <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center">
                            Selected Publications
                            <span className="flex-grow h-px bg-background-secondary ml-4"></span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {publications.map((pub, index) => (
                                <PublicationCard key={index} pub={pub} />
                            ))}
                        </div>
                    </section>

                    {/* Presentations */}
                    <section id="presentations">
                        <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center">
                            Presentations
                            <span className="flex-grow h-px bg-background-secondary ml-4"></span>
                        </h2>
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-semibold text-text-primary mb-6">Oral Presentations</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {oralPresentations.map((p, i) => <PresentationCard key={i} item={p} />)}
                                </div>
                            </div>
                             <div>
                                <h3 className="text-2xl font-semibold text-text-primary mb-6">Poster Presentations</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {posterPresentations.map((p, i) => <PresentationCard key={i} item={p} />)}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default ResearchPage;