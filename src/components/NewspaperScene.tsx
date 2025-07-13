import React, { useEffect, useRef } from 'react'

interface NewspaperSceneProps {
  className?: string
}

const NewspaperScene: React.FC<NewspaperSceneProps> = ({ className = '' }) => {
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return

    // Add floating newspaper effect
    const papers = scene.querySelectorAll('.newspaper-item')
    papers.forEach((paper, index) => {
      const element = paper as HTMLElement
      element.style.animationDelay = `${index * 0.5}s`
    })
  }, [])

  return (
    <div ref={sceneRef} className={`relative overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"></div>
      
      {/* Floating newspaper elements */}
      <div className="newspaper-item absolute top-10 left-10 w-32 h-24 bg-white dark:bg-gray-700 rounded shadow-lg transform rotate-12 opacity-20 animate-pulse"></div>
      <div className="newspaper-item absolute top-32 right-20 w-28 h-20 bg-white dark:bg-gray-700 rounded shadow-lg transform -rotate-6 opacity-15 animate-pulse"></div>
      <div className="newspaper-item absolute bottom-20 left-1/4 w-36 h-28 bg-white dark:bg-gray-700 rounded shadow-lg transform rotate-3 opacity-25 animate-pulse"></div>
      <div className="newspaper-item absolute bottom-32 right-16 w-24 h-18 bg-white dark:bg-gray-700 rounded shadow-lg transform -rotate-12 opacity-20 animate-pulse"></div>
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Latest News & Updates
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Stay informed with the latest developments
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewspaperScene
