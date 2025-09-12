"use client";

import { useState, useEffect } from "react";

interface MemoryTimelineProps {
  onNext: () => void;
}

interface Memory {
  date: string;
  title: string;
  description: string;
  image: string;
  emoji: string;
}

const memories: Memory[] = [
  {
    date: "The Beginning",
    title: "When We First Met",
    description: "That magical moment when our eyes first met and I knew my life would never be the same. You smiled, and suddenly the whole world felt brighter.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c592a85-278f-404a-a108-638187cbdb27.png",
    emoji: "✨"
  },
  {
    date: "First Date", 
    title: "Our Perfect First Date",
    description: "I was so nervous, but you made everything feel so natural and easy. We talked for hours and I never wanted it to end.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/afe8eebc-503d-4334-82d6-3039b7d976d9.png",
    emoji: "💕"
  },
  {
    date: "First Kiss",
    title: "The Kiss That Started Forever",
    description: "Under the stars, time stopped. In that moment, I knew I wanted to spend the rest of my life making you happy.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2ef2033e-994e-42ed-beef-62cca89644bf.png",
    emoji: "💋"
  },
  {
    date: "Our Adventures",
    title: "All Our Beautiful Memories",
    description: "Every trip, every laugh, every moment we've shared has been building toward something beautiful. You're my greatest adventure.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/86f4b84e-e1f4-4e05-9d99-aa3b33b46e4a.png",
    emoji: "🌟"
  },
  {
    date: "Today",
    title: "This Very Moment",
    description: "Right here, right now, I want to ask you something that will change our lives forever...",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/84d5ba6b-1dd8-4f6e-9746-0add91470915.png",
    emoji: "❤️"
  }
];

export default function MemoryTimeline({ onNext }: MemoryTimelineProps) {
  const [visibleMemories, setVisibleMemories] = useState<number[]>([]);
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    // Animate memories appearing one by one
    memories.forEach((_, index) => {
      setTimeout(() => {
        setVisibleMemories(prev => [...prev, index]);
      }, (index + 1) * 1000);
    });

    // Show continue button after all memories are visible
    setTimeout(() => {
      setShowContinue(true);
    }, (memories.length + 1) * 1000);
  }, []);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Love Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let me take you on a journey through the moments that brought us here...
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-300 to-purple-400 h-full rounded-full opacity-60"></div>

          {/* Memory items */}
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`relative mb-16 transition-all duration-1000 ${
                visibleMemories.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Memory content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
                    <div className="text-3xl mb-2">{memory.emoji}</div>
                    <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-2">
                      {memory.title}
                    </h3>
                    <p className="text-sm font-semibold text-rose-500 mb-3">
                      {memory.date}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {memory.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full border-4 border-white shadow-lg z-10 pulse-heart"></div>
                </div>

                {/* Memory image */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="relative group">
                    <img 
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue button */}
        {showContinue && (
          <div className="text-center mt-16 animate-fade-in-up">
            <button
              onClick={onNext}
              className="group relative px-10 py-4 bg-gradient-to-r from-rose-400 to-purple-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">See Our Photos Together 📸</span>
            </button>
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
        @keyframes pulse-heart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .pulse-heart {
          animation: pulse-heart 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}