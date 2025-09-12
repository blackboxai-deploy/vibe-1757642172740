"use client";

import { useState, useEffect } from "react";

interface ProposalMomentProps {
  onNext: () => void;
}

export default function ProposalMoment({ onNext }: ProposalMomentProps) {
  const [showRing, setShowRing] = useState(false);
  const [showProposal, setShowProposal] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [ringPulse, setRingPulse] = useState(false);

  useEffect(() => {
    // Animation sequence
    const ringTimer = setTimeout(() => setShowRing(true), 1000);
    const pulseTimer = setTimeout(() => setRingPulse(true), 2000);
    const proposalTimer = setTimeout(() => setShowProposal(true), 3000);
    const buttonTimer = setTimeout(() => setShowButton(true), 5000);
    
    return () => {
      clearTimeout(ringTimer);
      clearTimeout(pulseTimer);
      clearTimeout(proposalTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Romantic background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-20 animate-float text-rose-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main romantic image */}
        <div className="mb-12 animate-fade-in">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cf5e8fcc-c559-40af-a987-2259c7052800.png"
            alt="Romantic proposal scene with couple in dreamy atmosphere at sunset"
            className="rounded-3xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-700"
            style={{ filter: 'drop-shadow(0 30px 30px rgba(244, 114, 182, 0.3))' }}
          />
        </div>

        {/* Ring reveal animation */}
        <div className="mb-12">
          <div className={`transition-all duration-2000 ${showRing ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className={`relative inline-block ${ringPulse ? 'ring-pulse' : ''}`}>
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6 relative overflow-hidden">
                {/* Ring sparkle effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-full"></div>
                <div className="text-6xl transform rotate-12 animate-spin-slow">💍</div>
                
                {/* Sparkle animations */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The proposal text */}
        {showProposal && (
          <div className="animate-fade-in-up mb-12">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              Will You Marry Me?
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 mb-6 font-light leading-relaxed">
                You are the love of my life, my best friend, and my soulmate. 
              </p>
              
              <p className="text-lg md:text-xl text-gray-600 mb-6 italic">
                I want to spend forever making you happy, sharing adventures, and building a beautiful life together.
              </p>
              
              <p className="text-2xl md:text-3xl font-playfair font-bold text-gray-800 mb-8">
                Will you make me the happiest person in the world?
              </p>

              <div className="text-6xl mb-6 animate-bounce">❤️</div>
            </div>
          </div>
        )}

        {/* Continue to response button */}
        {showButton && (
          <div className="animate-fade-in-up">
            <button
              onClick={onNext}
              className="group relative px-16 py-6 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 text-white font-bold text-2xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Give Me Your Answer 💕</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <p className="text-lg text-gray-600 mt-6 animate-pulse font-playfair italic">
              This is the moment that will change everything...
            </p>
          </div>
        )}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(10deg); }
        }
        @keyframes ring-pulse-animation {
          0%, 100% { transform: scale(1) rotate(0deg); box-shadow: 0 0 0 0 rgba(244, 114, 182, 0.7); }
          50% { transform: scale(1.1) rotate(5deg); box-shadow: 0 0 0 20px rgba(244, 114, 182, 0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease-out forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .ring-pulse {
          animation: ring-pulse-animation 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}