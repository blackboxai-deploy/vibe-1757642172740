"use client";

import { useState } from "react";

interface ResponseHandlerProps {
  onResponse: (response: string) => void;
  response: string | null;
}

export default function ResponseHandler({ onResponse, response }: ResponseHandlerProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleYes = () => {
    onResponse("yes");
  };

  const handleNo = () => {
    onResponse("no");
  };

  if (response) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {response === "yes" ? (
            // YES response - celebration
            <div className="animate-fade-in">
              <div className="mb-8">
                <div className="text-8xl mb-6 animate-bounce">🎉</div>
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ce496dd6-89ef-48e1-b9ba-9368c324eac2.png"
                  alt="Happy engaged couple celebrating with joy and tears of happiness"
                  className="rounded-3xl shadow-2xl mx-auto mb-6 transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <h1 className="text-6xl md:text-8xl font-playfair font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
                YES!!!
              </h1>
              
              <p className="text-3xl md:text-4xl text-gray-700 mb-6 font-light">
                You said YES! 
              </p>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                I am the luckiest person in the world! I can't wait to spend forever with you, my beautiful fiancée. 
                Our greatest adventure is just beginning! ✨
              </p>

              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto border border-pink-100">
                <div className="text-4xl mb-4">💍💕</div>
                <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4">
                  We're Engaged!
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This moment will forever be etched in my heart. Thank you for choosing to build a life with me. 
                  I love you more than words can express, and I promise to love you more each day for the rest of our lives.
                </p>
              </div>

              <div className="mt-12 text-6xl space-x-4">
                <span className="animate-bounce inline-block" style={{ animationDelay: '0s' }}>🎊</span>
                <span className="animate-bounce inline-block" style={{ animationDelay: '0.2s' }}>❤️</span>
                <span className="animate-bounce inline-block" style={{ animationDelay: '0.4s' }}>💕</span>
                <span className="animate-bounce inline-block" style={{ animationDelay: '0.6s' }}>✨</span>
                <span className="animate-bounce inline-block" style={{ animationDelay: '0.8s' }}>🎉</span>
              </div>
            </div>
          ) : (
            // NO response - understanding and hope
            <div className="animate-fade-in">
              <div className="mb-8">
                <div className="text-6xl mb-6">💙</div>
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/643438da-e2b2-49fe-8862-2c6fd22d8237.png"
                  alt="Supportive understanding couple having gentle conversation in caring moment"
                  className="rounded-3xl shadow-2xl mx-auto mb-6 transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gray-700 mb-6">
                I Understand
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Thank you for being honest with me. I respect your feelings, and I want you to know that my love for you doesn't change.
              </p>

              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto border border-blue-100">
                <div className="text-3xl mb-4">🤗</div>
                <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4">
                  You Mean Everything to Me
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Whatever your reasons, I respect them completely. You are still the most important person in my life, 
                  and I'm grateful for every moment we've shared together.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I hope we can talk about this and see what the future holds for us. I'll always be here for you. 💙
                </p>
              </div>

              <div className="mt-12 text-4xl space-x-4">
                <span className="animate-pulse inline-block">💙</span>
                <span className="animate-pulse inline-block" style={{ animationDelay: '0.5s' }}>🤗</span>
                <span className="animate-pulse inline-block" style={{ animationDelay: '1s' }}>✨</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Initial response buttons
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="text-8xl mb-6 animate-bounce">💍</div>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Your Answer?
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-light max-w-3xl mx-auto">
            This is the most important question I'll ever ask...
          </p>
        </div>

        {/* Beautiful proposal recap */}
        <div className="mb-16">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b448b683-ad0c-491d-9985-277621e603fd.png"
            alt="Romantic proposal moment with anticipation and love in beautiful dreamy scene"
            className="rounded-3xl shadow-2xl mx-auto mb-8 transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Response buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up">
          {/* YES button */}
          <button
            onClick={handleYes}
            onMouseEnter={() => setHoveredButton("yes")}
            onMouseLeave={() => setHoveredButton(null)}
            className="group relative px-16 py-8 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 text-white font-bold text-3xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <span>YES</span>
              <span className="text-4xl">💕</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-green-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Yes button effects */}
            {hoveredButton === "yes" && (
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-2xl animate-ping opacity-75"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  >
                    ✨
                  </div>
                ))}
              </div>
            )}
          </button>

          {/* NO button */}
          <button
            onClick={handleNo}
            onMouseEnter={() => setHoveredButton("no")}
            onMouseLeave={() => setHoveredButton(null)}
            className="group relative px-16 py-8 bg-gradient-to-r from-slate-400 via-gray-500 to-slate-500 text-white font-bold text-3xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <span>NO</span>
              <span className="text-3xl">💙</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-500 via-gray-500 to-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Encouraging message */}
        <div className="mt-12 animate-fade-in-delayed">
          <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
            Take all the time you need, my love. Whatever your answer, you mean the world to me. 💕
          </p>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fade-in 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}