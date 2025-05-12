
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProgramFeatures from '@/components/ProgramFeatures';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProgramFeatures />
        <Benefits />
        <Testimonials />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
