
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Multiples Visualizer Guru</h3>
            <p className="text-sm text-white/80">
              Professional financial tools for business valuation and investment analysis. Making complex financial calculations accessible to everyone.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/" className="hover:text-accent transition-colors">Valuation Multiples Calculator</a></li>
              <li><a href="/" className="hover:text-accent transition-colors">DCF Calculator</a></li>
              <li><a href="/" className="hover:text-accent transition-colors">CAPM Calculator</a></li>
              <li><a href="/" className="hover:text-accent transition-colors">Financial Glossary</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Email: info@multiplesvisualizer.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Multiples Visualizer Guru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
