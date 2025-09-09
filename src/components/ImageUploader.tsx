import React, { useRef, useState } from 'react';
import { Upload, Image as ImageIcon, X } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (imageDataUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewImage(result);
      onImageUpload(result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 backdrop-blur-sm
          ${isDragOver 
            ? 'border-purple-400 bg-purple-500/10 scale-105' 
            : 'border-white/20 bg-white/5 hover:border-purple-400 hover:bg-purple-500/5'
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          className="hidden"
        />
        
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-300 rounded-2xl flex items-center justify-center">
            <Upload className="w-8 h-8 text-black" />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Upload Your Black & White Photo
            </h3>
            <p className="text-gray-400 mb-4">
              Drag and drop your image here, or click to browse
            </p>
            <p className="text-sm text-gray-500">
              Supports JPG, PNG, WebP • Max file size: 10MB
            </p>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-white/25">
            <ImageIcon className="w-5 h-5" />
            Choose Image
          </div>
        </div>
      </div>
      
      {/* Upload Tips */}
      <div className="mt-8 grid sm:grid-cols-3 gap-4">
        <div className="text-center p-4">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <span className="text-white font-semibold">1</span>
          </div>
          <h4 className="text-white font-medium mb-1">Upload Image</h4>
          <p className="text-gray-400 text-sm">Choose your black & white photo</p>
        </div>
        
        <div className="text-center p-4">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <span className="text-white font-semibold">2</span>
          </div>
          <h4 className="text-white font-medium mb-1">AI Processing</h4>
          <p className="text-gray-400 text-sm">Watch the magic happen</p>
        </div>
        
        <div className="text-center p-4">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <span className="text-white font-semibold">3</span>
          </div>
          <h4 className="text-white font-medium mb-1">Download</h4>
          <p className="text-gray-400 text-sm">Get your colorized image</p>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;