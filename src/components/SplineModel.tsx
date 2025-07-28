import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineModelProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
  onError?: (error: any) => void;
  fallback?: React.ReactNode;
}

const SplineModel: React.FC<SplineModelProps> = ({ 
  scene, 
  className = "w-full h-full", 
  onLoad,
  onError,
  fallback
}) => {
  const defaultFallback = (
    <div className="flex items-center justify-center w-full h-full bg-black/20 backdrop-blur-sm rounded-lg">
      <div className="text-center">
        <div className="w-8 h-8 mx-auto mb-3 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"></div>
        <p className="text-white/70 text-sm font-sans">Loading 3D Model...</p>
      </div>
    </div>
  );

  return (
    <div className={`relative ${className}`}>
      <Suspense fallback={fallback || defaultFallback}>
        <Spline 
          scene={scene}
          onLoad={onLoad}
          onError={onError}
          style={{ 
            width: '100%', 
            height: '100%',
            borderRadius: 'inherit'
          }}
        />
      </Suspense>
    </div>
  );
};

export default SplineModel;
