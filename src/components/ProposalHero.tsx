"use client";

import { useEffect, useState } from "react";

interface ProposalHeroProps {
  onNext: () => void;
}

export default function ProposalHero({ onNext }: ProposalHeroProps) {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 1000);
    const buttonTimer = setTimeout(() => setShowButton(true), 3000);
    
    return () => {
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Main romantic image */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/64b50911-7434-4ffb-ab8c-e7192c06fab7.png"
              alt="Beautiful romantic couple silhouette against sunset sky with heart shapes floating"
              className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-700"
              style={{ filter: 'drop-shadow(0 25px 25px rgba(244, 114, 182, 0.2))' }}
            />
            <div className="absolute -top-4 -right-4 text-4xl animate-bounce">💕</div>
            <div className="absolute -bottom-4 -left-4 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>✨</div>
          </div>
        </div>

        {/* Welcome text with typewriter effect */}
        <div className={`transition-all duration-2000 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-8xl font-playfair font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
            Hello, Beautiful
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light leading-relaxed max-w-2xl mx-auto">
            I have something very special to share with you today...
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 font-light italic">
            A journey through our love story ❤️
          </p>
        </div>

        {/* Continue button */}
        {showButton && (
          <div className="animate-fade-in-up">
            <button
              onClick={onNext}
              className="group relative px-12 py-4 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Begin Our Journey ✨</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <p className="text-sm text-gray-500 mt-4 animate-pulse">
              Click when you're ready, my love 💕
            </p>
          </div>
        )}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}