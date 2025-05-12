
import React from 'react';

interface BenefitProps {
  number: string;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ number, title, description }) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 bg-edp-magenta text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-edp-purple mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-edp-yellow/20 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-edp-magenta/20 rounded-full -z-10"></div>
              <div className="bg-edp-purple text-white p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">Why Join EDP Cohort 4?</h2>
                <p className="text-lg mb-6">
                  Our program has helped hundreds of entrepreneurs scale their businesses and achieve sustainable growth.
                </p>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-4xl font-bold mb-1">85%</p>
                    <p className="text-sm">Revenue Growth</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-1">300+</p>
                    <p className="text-sm">Entrepreneurs Trained</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-1">90%</p>
                    <p className="text-sm">Success Rate</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-1">6</p>
                    <p className="text-sm">Weeks To Transform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-edp-purple">Program Benefits</h2>
            
            <Benefit 
              number="1" 
              title="Accelerate Business Growth" 
              description="Learn proven strategies to scale your business and increase profitability in a sustainable way."
            />
            
            <Benefit 
              number="2" 
              title="Expert Mentorship" 
              description="Get personalized guidance from industry leaders who have built successful businesses."
            />
            
            <Benefit 
              number="3" 
              title="Practical Skill Development" 
              description="Acquire hands-on skills in marketing, finance, operations, and leadership through our workshops."
            />
            
            <Benefit 
              number="4" 
              title="Supportive Community" 
              description="Join a network of like-minded entrepreneurs for collaboration, support, and potential partnerships."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
