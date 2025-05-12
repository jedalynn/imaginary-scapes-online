
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/103df8a3-e5ba-41f5-b449-188c353b624b.png" 
            alt="EDP Logo" 
            className="h-12 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-edp-purple font-medium hover:text-edp-magenta transition-colors">Home</Link>
          <Link to="#program" className="text-edp-purple font-medium hover:text-edp-magenta transition-colors">Program</Link>
          <Link to="#benefits" className="text-edp-purple font-medium hover:text-edp-magenta transition-colors">Benefits</Link>
          <Link to="#apply" className="text-edp-purple font-medium hover:text-edp-magenta transition-colors">Apply</Link>
        </nav>
        <Button className="bg-edp-magenta hover:bg-edp-magenta/90 text-white">
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};

export default Header;
