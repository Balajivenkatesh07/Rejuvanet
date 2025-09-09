import React from 'react';
import { Brain, Zap, Palette, CheckCircle } from 'lucide-react';

const ProcessingView = () => {
  const steps = [
    { icon: Brain, label: 'Analyzing Image Structure', delay: '0s' },
    { icon: Zap, label: 'Applying Deep Learning Model', delay: '0.5s' },
    { icon: Palette, label: 'Generating Color Palette', delay: '1s' },
    { icon: CheckCircle, label: 'Finalizing Results', delay: '1.5s' },
  ];

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <div className="inline-block p-6 bg-gradient-to-r from-white to-gray-300 rounded-full mb-6 animate-pulse">
          <Brain className="w-12 h-12 text-black" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Deep Learning is Working Its Magic</h2>
        <p className="text-gray-300 text-lg">
          Our deep learning model is analyzing and colorizing your image...
        </p>
      </div>

      {/* Progress Steps */}
      <div className="space-y-6 mb-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: step.delay }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-white to-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-black" />
              </div>
              <span className="text-white font-medium">{step.label}</span>
              <div className="ml-auto">
                <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="bg-white/10 rounded-full h-2 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full animate-progress" />
      </div>
      
      <p className="text-gray-400 text-sm mt-4">
        This usually takes 2-5 seconds
      </p>
    </div>
  );
};

export default ProcessingView;