import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// TypedText 컴포넌트
const TypedText: React.FC<{ text: string; speed: number }> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text[i]);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

// Section 컴포넌트
const Section: React.FC<{ children: React.ReactNode; bg: string; id: string }> = ({ children, bg, id }) => (
  <section id={id} className={`h-screen w-full flex flex-col justify-center items-center ${bg}`}>
    {children}
  </section>
);

const PersonalWebsite: React.FC = () => {
  
  const sections = [
    { bg: "bg-gradient-to-br from-[#FFC7A0] to-[#FF799B]", content: "Home" },
    { bg: "bg-gradient-to-br from-[#A0FFC7] to-[#79B8FF]", content: "About" },
    { bg: "bg-gradient-to-br from-[#FFD700] to-[#FFA500]", content: "Projects" },
    { bg: "bg-gradient-to-br from-[#FF69B4] to-[#DA70D6]", content: "Skills" },
    { bg: "bg-gradient-to-br from-[#20B2AA] to-[#48D1CC]", content: "Contact" },
  ];

  return (
    <div className="overflow-hidden">
      <div>
        {sections.map((section, index) => (
          <Section key={index} bg={section.bg} id={`section-${index}`}>
            <h2 className="text-6xl font-bold text-white mb-8">
              {section.content}
            </h2>
            {index === 0 && (
              <div className="text-white">
                <TypedText text="Frontend Developer" speed={150} />
                <button className="bg-white text-[#FF799B] px-6 py-2 rounded-full hover:bg-opacity-90 transition duration-300 mt-4">
                  View Resume
                </button>
              </div>
            )}
            {index === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div 
                    key={item}
                    className="bg-white bg-opacity-20 p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">Project {item}</h3>
                    <p className="text-white">This is a brief description of project {item}.</p>
                  </div>
                ))}
              </div>
            )}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default PersonalWebsite;