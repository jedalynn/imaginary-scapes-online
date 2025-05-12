
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-edp-magenta/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-edp-yellow/10 rounded-full blur-2xl -z-10"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 z-10">
          <div className="mb-8 animate-float">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-edp-purple">EDP</span>
              <span className="block text-edp-magenta">COHORT 4</span>
            </h1>
            <p className="text-xl text-edp-magenta font-semibold mb-2">JOIN THE WAITLIST!</p>
            <p className="text-lg text-gray-700 max-w-lg">
              The Entrepreneurial Development Program (EDP) is designed to equip you with the skills and tools to take your business to the next level!
            </p>
          </div>
          
          <div className="bg-edp-yellow/20 p-4 rounded-lg mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-edp-yellow text-white px-3 py-1 rounded-full text-sm font-bold">6 WEEKS DURATION</span>
              <span className="font-medium">STARTING: JUNE 2025</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-edp-purple hover:bg-edp-purple/90 text-white px-8 py-6 rounded-md text-lg">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-edp-magenta text-edp-magenta hover:bg-edp-magenta/10 px-8 py-6 rounded-md text-lg">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/lovable-uploads/a2193abd-31ed-4020-bd6e-e7eb8a66523b.png" 
            alt="EDP Program" 
            className="max-w-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
