import type { Config } from "tailwindcss";

const config: Config = {
  // ...
  theme: {
    extend: {
      colors: {
        'rolex-green': '#006039',
        'rolex-gold': '#A37E2C',
        'deep-green': '#002817', // لون أخضر عميق جداً للخلفية
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      // ==== محركات الإبداع الجديدة ====
      animation: {
        'spin-slow': 'spin 60s linear infinite', // دوران بطيء جداً جداً
        'spin-reverse-slow': 'spin 45s linear infinite reverse', // دوران عكسي
        'float': 'float 8s ease-in-out infinite', // طفو للأعلى والأسفل
        'pulse-gold': 'pulseGold 4s ease-in-out infinite alternate', // نبض ذهبي
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        pulseGold: {
          '0%': { opacity: '0.3', transform: 'scale(1)' },
          '100%': { opacity: '0.7', transform: 'scale(1.05)' },
        }
      },
      // ================================
    },
  },
  plugins: [],
};
export default config;