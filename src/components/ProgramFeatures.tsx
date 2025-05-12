
import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn("bg-white p-6 rounded-xl shadow-lg", className)}>
      <div className="w-12 h-12 bg-edp-magenta/10 rounded-full flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-edp-purple mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ProgramFeatures: React.FC = () => {
  return (
    <section id="program" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive 6-week program is designed to transform your entrepreneurial journey with expert guidance and practical skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature 
            icon="🎓" 
            title="Business Masterclasses" 
            description="Expert-led sessions on business strategy, marketing, finance, and operations."
            className="border-t-4 border-edp-purple"
          />
          <Feature 
            icon="👥" 
            title="1:1 Mentoring" 
            description="Personalized guidance from successful entrepreneurs in your industry."
            className="border-t-4 border-edp-magenta"
          />
          <Feature 
            icon="🛠️" 
            title="Hands-on Training" 
            description="Practical workshops to apply business concepts to your specific venture."
            className="border-t-4 border-edp-yellow"
          />
          <Feature 
            icon="🌐" 
            title="Networking & Community" 
            description="Connect with fellow entrepreneurs and build valuable business relationships."
            className="border-t-4 border-edp-purple"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramFeatures;
