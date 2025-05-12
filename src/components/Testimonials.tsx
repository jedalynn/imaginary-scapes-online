
import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
      <div className="mb-6 text-edp-magenta">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6">{quote}</p>
      <div>
        <p className="font-semibold text-edp-purple">{name}</p>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our past participants who have transformed their businesses through the EDP program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="The EDP program gave me the confidence and skills to scale my business by 300% in just one year. The mentorship was invaluable."
            name="Sarah Johnson"
            title="Founder, Tech Innovations"
          />
          
          <Testimonial 
            quote="What sets EDP apart is the practical approach. Every lesson could be immediately applied to my business with real results."
            name="Michael Williams"
            title="CEO, Growth Solutions"
          />
          
          <Testimonial 
            quote="The network I built during the program continues to support my business growth. EDP creates a true community of entrepreneurs."
            name="Aisha Mohammed"
            title="Founder, Sustainable Fashion"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
