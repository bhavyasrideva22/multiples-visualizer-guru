
import React from 'react';
import { Calculator } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-primary/80 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Calculator className="mr-2" size={24} />
            <span className="text-xl font-semibold">Multiples Visualizer Guru</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="/" className="hover:text-accent transition-colors">Calculators</a>
              </li>
              <li>
                <a href="/" className="hover:text-accent transition-colors">About</a>
              </li>
              <li>
                <a href="/" className="hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
