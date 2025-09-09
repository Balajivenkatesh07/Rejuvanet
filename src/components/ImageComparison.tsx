import React, { useState } from 'react';
import { Download, RotateCcw, Eye, EyeOff } from 'lucide-react';

interface ImageComparisonProps {
  originalImage: string;
  colorizedImage: string;
  onReset: () => void;
}

export default function ImageComparison({ originalImage, colorizedImage, onReset }: ImageComparisonProps) {
  const [showOriginal, setShowOriginal] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = colorizedImage;
    link.download = 'colorized-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Deep Learning Colorization Complete
          </h2>
          <p className="text-gray-400">
            Your image has been successfully colorized using advanced deep learning algorithms
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowOriginal(!showOriginal)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            {showOriginal ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showOriginal ? 'Show Colorized' : 'Show Original'}
          </button>
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Try Another
          </button>
        </div>
      </div>

      {/* Image Comparison */}
      <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
        {/* Slider Comparison */}
        <div className="relative aspect-video">
          <img
            src={originalImage}
            alt="Original"
            className="absolute inset-0 w-full h-full object-contain"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={showOriginal ? originalImage : colorizedImage}
              alt={showOriginal ? "Original" : "Colorized"}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Slider Control */}
          <div className="absolute inset-0 flex items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute w-full h-full opacity-0 cursor-col-resize"
            />
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between">
          <span className="px-3 py-1 bg-black bg-opacity-50 text-white text-sm rounded-full">
            Original
          </span>
          <span className="px-3 py-1 bg-black bg-opacity-50 text-white text-sm rounded-full">
            {showOriginal ? 'Original' : 'Colorized'}
          </span>
        </div>
      </div>

      {/* Download Section */}
      <div className="mt-6 p-6 bg-gradient-to-r from-white to-gray-100 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Ready to Download
            </h3>
            <p className="text-gray-600">
              Your deep learning-processed result is ready for download
            </p>
          </div>
          <button
            onClick={downloadImage}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 text-black font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200"
          >
            <Download className="w-5 h-5" />
            Download Colorized Image
          </button>
        </div>
      </div>
    </div>
  );
}