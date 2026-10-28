import React from 'react';
import { Quote, Building2, Star, CheckCircle, ArrowRight, Palette } from 'lucide-react';
import hospitalityPortraitSuiteImage from '../assets/images/hospitality_portrait_suite.jpg';
import grandPortraitGalleryHallImage from '../assets/images/grand_portrait_gallery_hall.jpg';
import portraitBedheadSuiteImage from '../assets/images/portrait_bedhead_suite.jpg';
import { BRAND_NAME } from '../data/hospitalityData';

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
      hotel: 'The St. Regis Grand Library & Salon',
      location: 'Paris, France',
      scale: 'Heritage Suites & Private Reading Salons',
      curationStory: 'Commissioned bespoke Old Master chiaroscuro portraiture with hand-applied 24k gold leaf on Belgian linen. Mounted on fluted dark walnut boiserie with dedicated brass picture lighting to create an intimate sanctuary for presidential guests.',
      architectQuote: `${BRAND_NAME} acted as an extension of our design studio. They translated our historical narrative into museum-grade portraits that guests genuinely pause to admire.`,
      leadDesigner: 'Margaux de Villeneuf, Creative Director, Studio Haussmann Paris',
      image: hospitalityPortraitSuiteImage
    },
    {
      hotel: 'The Balmoral Historic Grand Hotel',
      location: 'Edinburgh, Scotland',
      scale: '120-Foot Arrival Promenade & Ballroom Foyer',
      curationStory: 'Engineered a suite of 6 monumental ancestral portrait paintings in hand-carved gilded frames. Provided seismic 4-point security cleats and custom raking illumination that dramatically enhanced guest arrival impressions.',
      architectQuote: `Curating monumental portrait art across high-traffic historic corridors usually invites security and lighting complexities. ${BRAND_NAME} executed the entire 6-piece promenade flawlessly.`,
      leadDesigner: 'Alistair MacLeod, Principal Architect, Royal Heritage Design Group',
      image: grandPortraitGalleryHallImage
    }
  ];

  return (
    <section className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C827A] uppercase">
            Proven Fine Art & Portraiture Impact
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] tracking-tight">
            Case Studies in Bespoke Art Curation
          </h2>
          <p className="text-sm sm:text-base text-[#5E574E] leading-relaxed">
            See how custom portraits and curated painting collections have defined luxury hotel identities, elevated guest engagement, and enriched iconic architectural spaces.
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
                <span className="text-[#8C827A]">Full turnkey atelier curation & mounting</span>
                <button
                  onClick={onExploreSpaces}
                  className="font-medium text-[#111111] hover:underline flex items-center space-x-1 cursor-pointer"
                >
                  <span>Explore Similar Suites</span>
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
