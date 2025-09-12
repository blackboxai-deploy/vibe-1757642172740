"use client";

import { useState, useEffect } from "react";
import ProposalHero from "@/components/ProposalHero";
import MemoryTimeline from "@/components/MemoryTimeline";
import PhotoGallery from "@/components/PhotoGallery";
import LoveMessage from "@/components/LoveMessage";
import ProposalMoment from "@/components/ProposalMoment";
import ResponseHandler from "@/components/ResponseHandler";
import CelebrationEffects from "@/components/CelebrationEffects";

export default function ProposalPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [proposalResponse, setProposalResponse] = useState<string | null>(null);

  const steps = [
    "welcome",
    "memories",
    "photos", 
    "love-message",
    "proposal",
    "response"
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleProposalResponse = (response: string) => {
    setProposalResponse(response);
    if (response === "yes") {
      setShowCelebration(true);
    }
  };

  useEffect(() => {
    // Auto-advance welcome step after 3 seconds
    if (currentStep === 0) {
      const timer = setTimeout(() => {
        nextStep();
      }, 4000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [currentStep]);

  return (
    <div className="relative min-h-screen">
      {/* Background particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 via-pink-100/20 to-purple-100/30"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Main content */}
      <main className="relative z-10">
        {steps[currentStep] === "welcome" && (
          <ProposalHero onNext={nextStep} />
        )}
        
        {steps[currentStep] === "memories" && (
          <MemoryTimeline onNext={nextStep} />
        )}
        
        {steps[currentStep] === "photos" && (
          <PhotoGallery onNext={nextStep} />
        )}
        
        {steps[currentStep] === "love-message" && (
          <LoveMessage onNext={nextStep} />
        )}
        
        {steps[currentStep] === "proposal" && (
          <ProposalMoment onNext={nextStep} />
        )}
        
        {steps[currentStep] === "response" && (
          <ResponseHandler 
            onResponse={handleProposalResponse}
            response={proposalResponse}
          />
        )}
      </main>

      {/* Celebration effects */}
      {showCelebration && <CelebrationEffects />}

      {/* Progress indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index <= currentStep ? "bg-rose-400" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}