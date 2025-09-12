"use client";

import { useState, useEffect } from "react";

interface PhotoGalleryProps {
  onNext: () => void;
}

const photos = [
  {
    src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/462c5b8a-5db6-474b-992f-915336d8fd6f.png",
    caption: "You make me laugh like nobody else can ❤️",
    title: "Pure Joy"
  },
  {
    src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/94e97e73-bfb6-48d6-92c8-c48d44f51b58.png",
    caption: "Every sunset is more beautiful with you by my side",
    title: "Golden Moments"
  },
  {
    src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1550f9ea-5232-4602-8d00-119ca48d3a95.png",
    caption: "You keep me warm in every season of life",
    title: "Winter Warmth"
  },
  {
    src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2c97da47-23e1-4ea1-bb10-9dac3e7d0022.png",
    caption: "With you, every journey becomes an adventure",
    title: "Our Adventures"
  },
  {
    src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ec1096ff-8420-435e-b536-43344d691e37.png",
    caption: "Dancing through life with my perfect partner",
    title: "Dance of Love"
  },
  {
    src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c959caff-a93a-4503-9578-abce15ebb350.png",
    caption: "Home is wherever you are",
    title: "Home Together"
  }
];

export default function PhotoGallery({ onNext }: PhotoGalleryProps) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentPhoto((prev) => {
          if (prev === photos.length - 1) {
            setIsAutoPlaying(false);
            setTimeout(() => setShowContinue(true), 1000);
            return prev;
          }
          return prev + 1;
        });
      }, 3000);
      
      return () => clearInterval(timer);
    }
    return undefined;
  }, [isAutoPlaying]);

  const goToPhoto = (index: number) => {
    setCurrentPhoto(index);
    setIsAutoPlaying(false);
    setShowContinue(true);
  };

  const nextPhoto = () => {
    if (currentPhoto < photos.length - 1) {
      setCurrentPhoto(currentPhoto + 1);
    }
  };

  const prevPhoto = () => {
    if (currentPhoto > 0) {
      setCurrentPhoto(currentPhoto - 1);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Beautiful Moments
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Every picture tells a story of our love...
          </p>
          <p className="text-sm text-gray-500 italic">
            {isAutoPlaying ? "Watch our memories unfold ✨" : "Navigate through our memories 💕"}
          </p>
        </div>

        {/* Main photo display */}
        <div className="relative mb-8">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            {/* Photo container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src={photos[currentPhoto].src}
                alt={photos[currentPhoto].caption}
                className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
              />
              
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Photo caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-playfair font-bold mb-2">
                  {photos[currentPhoto].title}
                </h3>
                <p className="text-lg opacity-95">
                  {photos[currentPhoto].caption}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevPhoto}
              disabled={currentPhoto === 0}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-rose-500"
            >
              ❮
            </button>
            
            <button
              onClick={nextPhoto}
              disabled={currentPhoto === photos.length - 1}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-rose-500"
            >
              ❯
            </button>

            {/* Photo counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentPhoto + 1} / {photos.length}
            </div>
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-3 overflow-x-auto pb-4 px-4">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => goToPhoto(index)}
                className={`flex-shrink-0 relative transition-all duration-300 ${
                  currentPhoto === index 
                    ? 'ring-4 ring-rose-400 scale-110' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={photo.src}
                  alt={photo.title}
                  className="w-16 h-12 object-cover rounded-lg shadow-md"
                />
                {currentPhoto === index && (
                  <div className="absolute inset-0 bg-rose-400/20 rounded-lg"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Photo indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {photos.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === currentPhoto ? 'bg-rose-400 scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Continue button */}
        {showContinue && (
          <div className="text-center animate-fade-in-up">
            <button
              onClick={onNext}
              className="group relative px-10 py-4 bg-gradient-to-r from-rose-400 to-purple-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Read My Heart 💕</span>
            </button>
            <p className="text-sm text-gray-500 mt-4">
              There's something I need to tell you...
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
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}