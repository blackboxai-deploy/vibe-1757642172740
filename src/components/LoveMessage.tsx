"use client";

import { useState, useEffect } from "react";

interface LoveMessageProps {
  onNext: () => void;
}

const loveMessages = [
  "From the very first moment I saw you, I knew you were special...",
  "You have this incredible way of making everything better just by being there.",
  "Your laugh is my favorite sound in the world.",
  "You make me want to be the best version of myself every single day.",
  "With you, I've learned what true love really means.",
  "You are my best friend, my greatest love, and my whole world.",
  "I can't imagine my future without you in it.",
  "You complete me in ways I never knew I needed.",
  "Every day with you feels like a beautiful dream I never want to wake up from.",
  "And that's why I have something very important to ask you..."
];

export default function LoveMessage({ onNext }: LoveMessageProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    if (currentMessage < loveMessages.length) {
      const message = loveMessages[currentMessage];
      setDisplayText("");
      setIsTyping(true);

      // Typewriter effect
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < message.length) {
          setDisplayText((prev) => prev + message[index]);
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
          
          // Wait before showing next message
          setTimeout(() => {
            if (currentMessage < loveMessages.length - 1) {
              setCurrentMessage(prev => prev + 1);
            } else {
              // All messages shown, show continue button
              setTimeout(() => setShowContinue(true), 1000);
            }
          }, 2000);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
    return undefined;
  }, [currentMessage]);

  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="mb-8">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/faefe4cf-7785-4989-9956-80010c5f2969.png"
              alt="Romantic love letter with rose petals and handwritten vintage paper"
              className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent mb-4">
            My Heart's Truth
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let me share what's been in my heart all this time...
          </p>
        </div>

        {/* Love message container */}
        <div className="relative mb-16">
          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 text-6xl opacity-20 font-playfair text-rose-300">
            "
          </div>
          <div className="absolute -bottom-8 -right-8 text-6xl opacity-20 font-playfair text-rose-300">
            "
          </div>

          {/* Message card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-100 max-w-3xl mx-auto min-h-[300px] flex items-center justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-purple-50/50"></div>
            
            {/* Message text */}
            <div className="relative z-10 w-full">
              <p className="text-2xl md:text-3xl font-playfair text-gray-800 leading-relaxed mb-4">
                {displayText}
                {isTyping && (
                  <span className="animate-pulse text-rose-500">|</span>
                )}
              </p>
              
              {/* Progress indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {loveMessages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index <= currentMessage ? 'bg-rose-400' : 'bg-gray-300'
                    } ${index === currentMessage ? 'scale-150' : ''}`}
                  />
                ))}
              </div>

              {/* Message counter */}
              <p className="text-sm text-gray-500 mt-4">
                {currentMessage + 1} of {loveMessages.length}
              </p>
            </div>

            {/* Floating hearts */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl opacity-30 animate-float text-pink-400"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 2) * 60}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${3 + i * 0.5}s`,
                }}
              >
                💕
              </div>
            ))}
          </div>
        </div>

        {/* Continue button */}
        {showContinue && (
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <div className="text-4xl mb-4 animate-bounce">💍</div>
              <p className="text-lg text-gray-600 mb-6 italic">
                Are you ready for the most important question of our lives?
              </p>
            </div>
            
            <button
              onClick={onNext}
              className="group relative px-12 py-5 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Yes, I'm Ready ✨</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <p className="text-sm text-gray-500 mt-4 animate-pulse">
              This is it, my love... 💕
            </p>
          </div>
        )}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}