/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Typography System
      fontFamily: {
        'heading': ['Montserrat', 'system-ui', 'sans-serif'],
        'sans': ['Open Sans', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      
      // Complete Color System - Yellow/Amber Only
      colors: {
        // Primary (60% - Background/Base)
        'surface': {
          50: '#0f172a',
          100: '#1e293b',
          200: '#334155',
          300: '#475569',
        },
        
        // Secondary (30% - Accent/Branding) - Dark Yellow/Orange Sophisticated System
        'secondary': {
          DEFAULT: '#d97706',  // Rich dark orange-amber
          'hover': '#ea580c',  // Vibrant dark orange
          'active': '#b45309', // Deep amber-orange
          'light': '#f59e0b',  // Dark yellow-orange
          'muted': '#fed7aa',  // Soft orange tint
          'soft': '#fdba74',   // Medium soft orange
          'gentle': '#fed7aa', // Ultra-soft orange variant
          'warm': '#c2410c',   // Warm dark orange
          'deep': '#92400e',   // Very deep amber
        },
        
        // Accent Colors - Dark Yellow/Orange Sophisticated variants
        'accent': {
          DEFAULT: '#d97706',  // Main accent - dark orange-amber
          'light': '#f59e0b',  // Dark yellow variant
          'dark': '#92400e',   // Very deep amber
          'yellow': '#f59e0b', // Dark yellow-orange
          'amber': '#d97706',  // Rich dark amber
          'gold': '#b45309',   // Deep gold-amber
          'orange': '#ea580c', // Vibrant dark orange
          'warm': '#c2410c',   // Warm dark orange
        },
        
        // Primary Text Colors
        'primary': {
          DEFAULT: '#ffffff',
          'muted': '#f8fafc',
          'dark': '#e2e8f0',
        },
      },
      
      // Animation System
      animation: {
        // Entrance Animations
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'slide-down': 'slideDown 0.7s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-up-delayed': 'slideUp 0.8s ease-out 0.2s both',
        
        // Interactive Animations
        'magnetic': 'magnetic 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'scale-pulse': 'scalePulse 2s ease-in-out infinite',
        
        // Continuous Motion
        'float': 'float 6s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'rotate-gentle': 'rotateGentle 3s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite',
        
        // Special Effects
        'twinkle': 'twinkle 2s ease-in-out infinite alternate',
        'glow': 'glow 2s ease-in-out infinite alternate',
        // Latest Trend Text Carousel Animations
        'text-slide-in': 'textSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'text-slide-out': 'textSlideOut 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'gradient-shine': 'gradientShine 3s linear infinite',
        // Enhanced Typing Animations
        'typing': 'typing 2s steps(40, end)',
        'blink-cursor': 'blinkCursor 1s step-end infinite',
        'typewriter-glow': 'typewriterGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40) 1s 1 normal both',
        'blink': 'blink 1s infinite',
      },
      
      // Keyframes for all animations
      keyframes: {
        // Entrance Animations
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        
        // Interactive Animations
        magnetic: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.05) rotate(1deg)' },
          '100%': { transform: 'scale(1.02) rotate(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(245, 158, 11, 0.5)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        waveRipple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        textGlow: {
          '0%, 100%': { textShadow: '0 0 5px transparent' },
          '50%': { textShadow: '0 0 10px rgba(251, 191, 36, 0.7)' },
        },
        
        // Continuous Motion
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rotateGentle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-2px) rotate(1deg)' },
          '50%': { transform: 'translateY(-4px) rotate(0deg)' },
          '75%': { transform: 'translateY(-2px) rotate(-1deg)' },
        },
        
        // Special Effects
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(217, 119, 6, 0.4)' },
          '50%': { textShadow: '0 0 20px rgba(234, 88, 12, 0.5)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        // Latest Trend Text Carousel Keyframes
        textSlideIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px) scale(0.95)' 
          },
          '50%': { 
            opacity: '0.7', 
            transform: 'translateY(5px) scale(0.98)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)' 
          },
        },
        textSlideOut: {
          '0%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)' 
          },
          '50%': { 
            opacity: '0.3', 
            transform: 'translateY(-5px) scale(1.02)' 
          },
          '100%': { 
            opacity: '0', 
            transform: 'translateY(-20px) scale(1.05)' 
          },
        },
        gradientShine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        // Enhanced Typing Animation Keyframes
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blinkCursor: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        typewriterGlow: {
          '0%, 100%': { 
            textShadow: '0 0 5px rgba(217, 119, 6, 0.3)' 
          },
          '50%': { 
            textShadow: '0 0 15px rgba(217, 119, 6, 0.6), 0 0 25px rgba(234, 88, 12, 0.4)' 
          },
        },
      },
      
      // Shadow System - Dark Yellow/Orange Sophistication
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'elegant-lg': '0 8px 30px rgba(0, 0, 0, 0.25)',
        'glow-sm': '0 0 10px rgba(217, 119, 6, 0.4)',   // Rich dark orange glow
        'glow': '0 0 20px rgba(217, 119, 6, 0.5)',      // Sophisticated glow
        'glow-lg': '0 0 30px rgba(217, 119, 6, 0.6)',   // Prominent dark orange
        'glow-intense': '0 0 40px rgba(234, 88, 12, 0.7)', // Vibrant dark orange intensity
        'amber': '0 0 20px rgba(217, 119, 6, 0.4)',     // Primary dark amber glow
        'amber-intense': '0 0 30px rgba(234, 88, 12, 0.5)', // Rich dark orange
        'yellow': '0 0 20px rgba(245, 158, 11, 0.5)',   // Dark yellow-orange
        'gold': '0 0 20px rgba(217, 119, 6, 0.4)',       // Deep gold
      },
      
      // Spacing for consistent design
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      // Background gradients - Dark Yellow/Orange Sophistication
      backgroundImage: {
        'gradient-amber': 'linear-gradient(to right, #d97706, #ea580c)',      // Rich dark orange
        'gradient-amber-hover': 'linear-gradient(to right, #ea580c, #b45309)', // Deep transition
        'gradient-amber-gentle': 'linear-gradient(to right, #fed7aa, #f59e0b)', // Soft to dark yellow
        'gradient-amber-warm': 'linear-gradient(to right, #f59e0b, #d97706)',  // Dark yellow to amber
        'gradient-amber-deep': 'linear-gradient(to right, #d97706, #92400e)',  // Rich to very deep
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // Enhanced dark backgrounds for better accessibility
        'dark-comfortable': 'linear-gradient(135deg, #000000 0%, #0f0f0f 50%, #000000 100%)',
        'dark-soft': 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)',
        'hero-enhanced': 'linear-gradient(135deg, #000000 0%, #0f0f0f 25%, #000000 50%, #0a0a0a 75%, #000000 100%)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      // Animation delays
      animationDelay: {
        '100': '0.1s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s',
        '600': '0.6s',
      },
    },
  },
  plugins: [],
}
