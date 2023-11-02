/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
              },
        
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-20px)' },
          '60%': { transform: 'translateY(-10px)' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        rotateClockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeInScale: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        skew: {
          '0%': { transform: 'skewX(0deg)' },
          '100%': { transform: 'skewX(45deg)' },
        },
        fadeInFromTop: {
          '0%': { opacity: 0, transform: 'translateY(-50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInScale: 'fadeInScale 1s ease-in-out',
        fadeInFromTop: 'fadeInFromTop 1s ease-in-out',
        bounce: 'bounce 1s infinite',
        shake: 'shake 0.5s ease infinite',
        skew: 'skew 1s ease-in-out infinite',
        rotate: 'rotate 2s linear infinite',
        rotateClockwise: 'rotateClockwise 2s linear infinite',
        slideInLeft: 'slideInFromLeft 1s ease-in-out',
      },
      extend: {
        animation: {
          'fadeIn-focus': 'fadeIn 1s ease-in-out',
          // Agrega otras animaciones para el foco aquí si es necesario
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce', 'focus'],
    },
    
  },
  plugins: [],


};







