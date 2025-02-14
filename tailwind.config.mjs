import { Goldman, Rajdhani } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          zenDots: ['"Zen Dots"', 'sans-serif'],
          Rajdhani: ['"Rajdhani"', 'sans-serif'],
          Orbitron: ['"Orbitron"', 'sans-serif'],
          Goldman:['"Goldman"', 'sans-serif'],
          RacingSansOne:['"Racing Sans One"', 'serif'],
          Fb: ['Formulab', 'sans-serif'],
          Fn: ['Formulan', 'sans-serif'],
          Fw: ['Formulaw', 'sans-serif'],
          Inter: ['Inter', 'sans-serif'],
        },
        colors: {
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))'
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))'
          },
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))'
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))'
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))'
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))'
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))'
          },
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          chart: {
            '1': 'hsl(var(--chart-1))',
            '2': 'hsl(var(--chart-2))',
            '3': 'hsl(var(--chart-3))',
            '4': 'hsl(var(--chart-4))',
            '5': 'hsl(var(--chart-5))'
          },
          sidebar: {
            DEFAULT: 'hsl(var(--sidebar-background))',
            foreground: 'hsl(var(--sidebar-foreground))',
            primary: 'hsl(var(--sidebar-primary))',
            'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
            accent: 'hsl(var(--sidebar-accent))',
            'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
            border: 'hsl(var(--sidebar-border))',
            ring: 'hsl(var(--sidebar-ring))'
          }
        },
        animation: {
            grid: "grid 15s linear infinite",
          drawLine: 'drawLine 1.5s ease-out forwards',
        slideInLeft: 'slideInLeft 1s ease-out forwards 1.2s',
        slideInRight: 'slideInRight 1s ease-out forwards 1.2s',
          'line-draw': 'draw-line 1s forwards',
          'move-out-left': 'move-out-left 1s forwards',
          'move-out-right': 'move-out-right 1s forwards',
          'infinite-scrollr': 'infinite-scrollr 15s linear infinite',
          'infinite-scrolll': 'infinite-scrolll 15s linear infinite',
          'infinite-scrollyr': 'infinite-scrollyr 15s linear infinite',
          'infinite-scrollyl': 'infinite-scrollyl 15s linear infinite',
          'border': 'border 4s linear infinite',
          rotate: "rotate 5s linear infinite",
          blink: "blink .7s infinite",
          float: 'float 2s ease-in-out infinite',
          'scale-blur': 'scaleBlur 1.5s ease-in-out',
          // Add the slide animations here
          slideIn: 'slideIn 1s ease-in-out',
          slideInFromLeft: 'slideInFromLeft 1s ease-in-out'
        },
        keyframes: {
          grid: {
            "0%": { transform: "translateY(-50%)" },
            "100%": { transform: "translateY(0)" },
          },
          drawLine: {
            '0%': { height: '0%' },
            '100%': { height: '60%' },
          },
          slideInLeft: {
            '0%': { transform: 'translateX(-50%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          slideInRight: {
            '0%': { transform: 'translateX(50%)', opacity: '0' },
            '100%': { transform: 'translateX(0%)', opacity: '1' },
          },
          scaleBlur: {
            '0%': { transform: 'scale(0.9)', filter: 'blur(8px)', opacity: '0' },
            '50%': { transform: 'scale(1.07)', filter: 'blur(4px)', opacity: '0.8' },
            '100%': { transform: 'scale(1)', filter: 'blur(0)', opacity: '1' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
          },
          blink: {
            "50%": {
              borderColor: "transparent"
            },
            "100%": {
              borderColor: "white"
            }
          },
          'draw-line': {
            '0%': { transform: 'scaleY(0)' },
            '100%': { transform: 'scaleY(1)' },
          },
          'move-out-left': {
            '0%': { opacity: '0', transform: 'translateX(50%)' },
            '100%': { opacity: '1', transform: 'translateX(-200%)' },
          },
          'move-out-right': {
            '0%': { opacity: '0', transform: 'translateX(-10%)' },
            '100%': { opacity: '1', transform: 'translateX(200%)' },
          },
          rotate: {
            "0%": { transform: "rotate(0deg) scale(10)" },
            "100%": { transform: "rotate(-360deg) scale(10)" },
          },
          'border': {
            to: { '--border-angle': '360deg' },
          },
          'infinite-scrollr': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-45%)' },
          },
          'infinite-scrolll': {
            from: { transform: 'translateX(-45%)' },
            to: { transform: 'translateX(0)' },
          },
          'infinite-scrollyr': {
            from: { transform: 'translateY(0)' },
            to: { transform: 'translateY(-45%)' },
          },
          'infinite-scrollyl': {
            from: { transform: 'translateY(-45%)' },
            to: { transform: 'translateY(0)' },
          },
          // Add the slide keyframes here
          slideIn: {
            '0%': { transform: 'translateX(100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' }
          },
          slideInFromLeft: {
            '0%': { transform: 'translateX(-100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' }
          }
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)'
        }
      }
    },
    plugins: [
      require('tailwindcss-animate'),
      
    ]
};