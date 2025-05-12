
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ApplicationForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    experience: '',
    goals: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Application Submitted!",
        description: "You've been added to the waitlist for EDP Cohort 4.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        experience: '',
        goals: ''
      });
    }, 1500);
  };

  return (
    <section id="apply" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-edp-purple">Join the Waitlist</h2>
            <p className="text-xl text-gray-600">
              Apply now to secure your spot in our upcoming EDP Cohort 4. Limited seats available!
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                  <Input
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    required
                    placeholder="Your business name"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Business Experience</label>
                <Textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your business and entrepreneurial experience"
                  className="w-full h-24"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">Business Goals</label>
                <Textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  required
                  placeholder="What are your main business goals for the next 12 months?"
                  className="w-full h-24"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-edp-magenta hover:bg-edp-magenta/90 text-white py-6 text-lg"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Have questions? Contact us at <a href="mailto:info@edp.org" className="text-edp-purple font-medium hover:underline">info@edp.org</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
