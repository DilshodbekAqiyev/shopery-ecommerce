/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        "latestWhiteGray": "linear-gradient( white 50%, #EDF2EE 50%);",
        "latestWhiteGrayReverse": "linear-gradient(to top, white 50%, #EDF2EE 50%);"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        softPrimary: "#84D187",
        primary: "#00B207",
        hardPrimary: "#2C742F",
        warning: "#FF8A00",
        danger: "#EA4B48",
        white: "#FFFFFF",
        video: "#002E0399",
        grays: {
          gray900: '#1A1A1A',
          gray800: '#333333',
          gray700: '#4D4D4D',
          gray600: '#666666',
          gray500: '#808080',
          gray400: '#999999',
          gray300: '#B3B3B3',
          gray200: '#CCCCCC',
          gray100: '#E6E6E6',
          'gray0.5': '#F2F2F2',
        },
        greenGrays: {
          greenGray900: '#002603',
          greenGray800: '#173B1A',
          greenGray700: '#2B572E',
          greenGray600: '#406B42',
          greenGray500: '#618062',
          greenGray400: '#7A997C',
          greenGray300: '#96B297',
          greenGray200: '#B4CCB4',
          greenGray100: '#DAE5DA',
          'greenGray0.5': '#EDF2EE',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontSize: {
        display01: '72px',
        heading01: '55px',
        heading02: '48px',
        heading03: '40px',
        heading04: '36px',
        heading05: '32px',
        textXXL: '24px',
        textXL: '20px',
        textLarge: '18px',
        textMedium: '16px',
        textSmall: '14px',
        textTiny: '12px',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
}
