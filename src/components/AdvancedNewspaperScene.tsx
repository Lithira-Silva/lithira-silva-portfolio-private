import React, { useEffect, useRef, useState } from 'react'

interface AdvancedNewspaperSceneProps {
  className?: string
  articles?: Array<{
    title: string
    excerpt: string
    date: string
  }>
}

const AdvancedNewspaperScene: React.FC<AdvancedNewspaperSceneProps> = ({ 
  className = '',
  articles = [
    {
      title: "Revolutionary Web Development Techniques",
      excerpt: "Discover the latest trends in modern web development...",
      date: "2025-01-15"
    },
    {
      title: "AI Integration in Frontend Development",
      excerpt: "How artificial intelligence is changing the way we build...",
      date: "2025-01-10"
    },
    {
      title: "The Future of React and TypeScript",
      excerpt: "Exploring upcoming features and best practices...",
      date: "2025-01-05"
    }
  ]
}) => {
  const [currentArticle, setCurrentArticle] = useState(0)
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticle((prev) => (prev + 1) % articles.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [articles.length])

  return (
    <div ref={sceneRef} className={`relative overflow-hidden min-h-96 ${className}`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full animate-pulse"></div>
        </div>
      </div>

      {/* Floating newspaper pages */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`absolute bg-white dark:bg-gray-700 rounded-lg shadow-xl transform transition-all duration-1000 opacity-20 hover:opacity-40`}
            style={{
              width: `${80 + index * 10}px`,
              height: `${60 + index * 8}px`,
              top: `${10 + index * 15}%`,
              left: `${5 + index * 12}%`,
              transform: `rotate(${-15 + index * 6}deg)`,
              animationDelay: `${index * 0.3}s`
            }}
          >
            <div className="p-2">
              <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
              <div className="h-1 bg-gray-200 dark:bg-gray-500 rounded mb-1"></div>
              <div className="h-1 bg-gray-200 dark:bg-gray-500 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center justify-center p-8">
        <div className="max-w-2xl text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 border border-white/20">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
                Featured Article {currentArticle + 1}/{articles.length}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                {articles[currentArticle].title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {articles[currentArticle].excerpt}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Published: {new Date(articles[currentArticle].date).toLocaleDateString()}
              </p>
            </div>

            {/* Article indicators */}
            <div className="flex justify-center space-x-2">
              {articles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentArticle(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentArticle
                      ? 'bg-primary-500'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvancedNewspaperScene
