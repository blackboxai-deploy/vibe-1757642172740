"use client";

import { useEffect, useState } from "react";

export default function CelebrationEffects() {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; color: string; emoji: string }>>([]);

  useEffect(() => {
    const colors = ["#f43f5e", "#ec4899", "#a855f7", "#8b5cf6", "#06b6d4", "#10b981"];
    const emojis = ["🎉", "🎊", "💕", "❤️", "✨", "🌟", "💖", "🎈"];

    // Create initial confetti burst
    const initialConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -10,
      color: colors[Math.floor(Math.random() * colors.length)],
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    }));

    setConfetti(initialConfetti);

    // Add more confetti periodically
    const interval = setInterval(() => {
      const newConfetti = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth,
        y: -10,
        color: colors[Math.floor(Math.random() * colors.length)],
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
      }));

      setConfetti(prev => [...prev.slice(-30), ...newConfetti]);
    }, 2000);

    // Clean up after 10 seconds
    const cleanup = setTimeout(() => {
      clearInterval(interval);
      setConfetti([]);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(cleanup);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Confetti particles */}
      {confetti.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-3xl animate-fall opacity-90"
          style={{
            left: `${particle.x}px`,
            color: particle.color,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {particle.emoji}
        </div>
      ))}

      {/* Celebration overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-rose-400/20 animate-pulse"></div>

      {/* Heart shower from top */}
      <div className="absolute top-0 left-0 w-full">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute text-4xl animate-heart-fall opacity-80 text-pink-500"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Sparkle effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating celebration text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center animate-celebration-text">
          <div className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-rose-500 bg-clip-text animate-pulse mb-4">
            CONGRATULATIONS!
          </div>
          <div className="text-3xl md:text-4xl text-white font-bold animate-bounce">
            🎉 WE'RE ENGAGED! 🎉
          </div>
        </div>
      </div>

      {/* Custom celebration animations */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes heart-fall {
          0% {
            transform: translateY(-50px) rotate(0deg) scale(0.5);
            opacity: 1;
          }
          50% {
            opacity: 1;
            transform: rotate(180deg) scale(1);
          }
          100% {
            transform: translateY(100vh) rotate(360deg) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }

        @keyframes celebration-text {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-heart-fall {
          animation: heart-fall linear infinite;
        }

        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }

        .animate-celebration-text {
          animation: celebration-text 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}