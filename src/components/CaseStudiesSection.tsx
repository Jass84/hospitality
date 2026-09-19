import React from 'react';
import { Quote, Building2, Star, CheckCircle, ArrowRight } from 'lucide-react';
import restaurantArtImage from '../assets/images/restaurant_art_space_1789809360366.jpg';
import suiteArtImage from '../assets/images/hotel_suite_art_1789809346468.jpg';

interface CaseStudiesSectionProps {
  onRequestAdvisory: () => void;
  onExploreSpaces: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onRequestAdvisory,
  onExploreSpaces
}) => {
  const caseStudies = [
    {
      hotel: 'The Luminary Grand Hotel & Residences',
      location: 'Zurich, Switzerland',
      scale: '180 Luxury Keys & Public Atrium',
      curationStory: 'Curated 240 custom pieces including a monumental 12-foot impasto linen canvas for the arrival lounge. Integrated Class-A acoustic backing reduced reverberation time by 38% in the double-height atrium.',
      architectQuote: 'Saatchi Art’s hospitality advisors acted as a true extension of our design studio. They translated our architectural narrative into tactile, museum-grade artworks delivered on schedule.',
      leadDesigner: 'Markus Keller, Principal, Keller & Vogt Interior Architecture',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800&auto=format&fit=crop'
    },
    {
      hotel: 'Aura Bay Penthouse Suites',
      location: 'Miami Beach, Florida',
      scale: '84 Oceanfront Suites & Sky Lounge',
      curationStory: 'Engineered a bespoke brass-framed diptych collection reflecting coastal dawn light. Produced with archival pigments and anti-theft security hardware, achieving 25% volume savings under hotel budget.',
      architectQuote: 'Managing art procurement across 84 luxury keys usually invites logistical headaches. Saatchi Art consolidated shipping from 14 international artists into a single flawless delivery.',
      leadDesigner: 'Elena Soriano, Design Director, Horizon Hospitality Group',
      image: suiteArtImage
    }
  ];

  return (
    <section className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C827A] uppercase">
            Proven Hospitality Impact
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] tracking-tight">
            Case Studies in Hospitality Art
          </h2>
          <p className="text-sm sm:text-base text-[#5E574E] leading-relaxed">
            See how custom curations have defined hotel brand identity, improved guest satisfaction scores, and resolved real acoustic and spatial challenges.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {caseStudies.map((study, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#DDD6CB] shadow-2xs hover:border-[#111111] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/9 overflow-hidden bg-[#EAE4DA]">
                  <img
                    src={study.image}
                    alt={study.hotel}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-xs text-white text-[11px] font-medium px-3 py-1">
                    {study.scale}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-[#8C827A] uppercase tracking-wider">
                      {study.location}
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-[#111111] mt-1">
                      {study.hotel}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C554D] leading-relaxed">
                    {study.curationStory}
                  </p>

                  {/* Quote Block */}
                  <div className="p-4 bg-[#F8F6F1] border-l-2 border-[#111111] space-y-2">
                    <Quote className="w-5 h-5 text-[#8C827A] stroke-1" />
                    <p className="text-xs sm:text-sm text-[#2C2723] italic leading-relaxed">
                      "{study.architectQuote}"
                    </p>
                    <div className="text-[11px] text-[#7A7268] font-medium">
                      — {study.leadDesigner}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#F0ECE4] text-xs">
                <span className="text-[#8C827A]">Full turnkey advisory & installation</span>
                <button
                  onClick={onExploreSpaces}
                  className="font-medium text-[#111111] hover:underline flex items-center space-x-1 cursor-pointer"
                >
                  <span>Explore Similar Spaces</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
