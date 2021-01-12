module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: false,
  theme: {
    extend: {
      colors: {
        color: 'var(--color)',
        main: 'var(--bg)',
        accent: {
          primary: 'var(--accent)',
          secondary: 'var(--accent-secondary)'
        },
        primary: 'var(--primary)',
        secondary: 'var(--secondary)'
      },
      backgroundImage: () => ({
        'page-gradient-left': 'var(--sidebar)'
      }),
      fontSize: {
        22: '1.375rem'
      },
      spacing: {
        72: '18rem',
        84: '21rem'
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%'
      }
    },
    fontFamily: {}
  },
  variants: {
    margin: ['responsive', 'last']
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.pin-c-x': {
          left: '50%',
          transform: 'translateX(-50%)'
        },
        '.pin-c-y': {
          top: '50%',
          transform: 'translateY(-50%)'
        },
        '.pin-c': {
          top: '50%',
          left: '50%',
          transform: 'translate3d(-50%, -50%, 0)'
        },
        '.c-border-color': {
          borderColor: 'var(--border-color)'
        },
        '.c-bg-input': {
          backgroundColor: 'var(--bg-input)'
        },
        '.c-bg-secondary': {
          backgroundColor: 'var(--bg-secondary)'
        }
      }

      addUtilities(newUtilities)
    }
  ]
}
