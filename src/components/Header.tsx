import React from 'react';
import { Palette, Github, Star } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center">
              <Palette className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">RejuvaNet</h1>
              <p className="text-sm text-gray-400">Deep Learning Image Colorization</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Star className="w-4 h-4" />
              <span className="text-sm">Star on GitHub</span>
            </button>
            
            <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              <Github className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;