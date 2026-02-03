/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        accent: {
          walnut: 'var(--accent-walnut)',
          sand: 'var(--accent-sand)',
        },
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-delay-100': 'fadeIn 1s ease-out 0.1s forwards',
        'fade-in-delay-300': 'fadeIn 1s ease-out 0.3s forwards',
        'fade-in-delay-400': 'fadeIn 1s ease-out 0.4s forwards',
        'fade-in-delay-500': 'fadeIn 1s ease-out 0.5s forwards',
        'fade-in-delay-700': 'fadeIn 1s ease-out 0.7s forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-left-delay-100': 'slideInLeft 1s ease-out 0.1s forwards',
        'slide-in-left-delay-300': 'slideInLeft 1s ease-out 0.3s forwards',
        'slide-in-left-delay-500': 'slideInLeft 1s ease-out 0.5s forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'slide-in-right-delay-400': 'slideInRight 1s ease-out 0.4s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-1rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(1rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

