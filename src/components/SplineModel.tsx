import React, { Suspense, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineModelProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
  onError?: (error: any) => void;
  fallback?: React.ReactNode;
  colorFilter?: 'none' | 'warm' | 'cool' | 'sepia' | 'saturated' | 'custom';
  customFilter?: string;
}

const SplineModel: React.FC<SplineModelProps> = ({ 
  scene, 
  className = "w-full h-full", 
  onLoad,
  onError,
  fallback,
  colorFilter = 'none',
  customFilter
}) => {
  // Define color filter presets
  const getFilterStyle = () => {
    switch (colorFilter) {
      case 'warm':
        return 'sepia(0.3) saturate(1.2) hue-rotate(15deg) brightness(1.1)';
      case 'cool':
        return 'hue-rotate(200deg) saturate(1.1) brightness(0.95)';
      case 'sepia':
        return 'sepia(0.8) contrast(1.1) brightness(1.05)';
      case 'saturated':
        return 'saturate(1.5) contrast(1.1) brightness(1.05)';
      case 'custom':
        return customFilter || 'none';
      default:
        return 'none';
    }
  };

  // Add CSS to hide watermark
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Hide Spline watermark */
      [data-spline-watermark],
      .spline-watermark,
      a[href*="spline.design"],
      div[style*="position: absolute"][style*="bottom"] a[href*="spline"],
      div[style*="position: fixed"][style*="bottom"] a[href*="spline"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      
      /* Hide common watermark containers */
      div[style*="position: absolute"][style*="z-index"][style*="bottom: 16px"] {
        display: none !important;
      }
      
      div[style*="position: fixed"][style*="z-index"][style*="bottom: 16px"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const defaultFallback = (
    <div className="flex items-center justify-center w-full h-full bg-black/20 backdrop-blur-sm rounded-lg">
      <div className="text-center">
        <div className="w-8 h-8 mx-auto mb-3 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"></div>
        <p className="text-white/70 text-sm font-sans">Loading 3D Model...</p>
      </div>
    </div>
  );

  return (
    <div 
      className={`relative ${className}`} 
      style={{ 
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Suspense fallback={fallback || defaultFallback}>
        <Spline 
          scene={scene}
          onLoad={onLoad}
          onError={onError}
          style={{ 
            width: '100%', 
            height: '100%',
            borderRadius: 'inherit',
            filter: getFilterStyle()
          }}
        />
      </Suspense>
      
      {/* Overlay to cover watermark area */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
          backdropFilter: 'blur(4px)',
          zIndex: 1000
        }}
      />
      
      {/* Additional overlay for corner watermarks */}
      <div 
        className="absolute bottom-0 right-0 w-32 h-12 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.4) 70%)',
          backdropFilter: 'blur(6px)',
          zIndex: 1001
        }}
      />
    </div>
  );
};

export default SplineModel;
