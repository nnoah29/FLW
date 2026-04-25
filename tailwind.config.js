/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-move': 'glow 8s ease-in-out infinite',
        'float-image': 'float 6s ease-in-out infinite',
        'magic-linear': 'magic-linear 4s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { transform: 'scale(1) translate(0px, 0px)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1) translate(20px, -20px)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'magic-linear': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }
      }
    },
  },
  plugins: [],
}
