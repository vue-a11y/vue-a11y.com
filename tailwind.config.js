module.exports = {
  purge: false,
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    extend: {
      colors: {
        accent: '#41B883',
        light: {
          200: '#FBFCFC',
          400: '#EEF5F5'
        },
        sepia: {
          text: '#473742',
          200: '#F1E7D0',
          400: '#EBDDBF',
          600: '#E3D2AC'
        },
        dark: {
          500: '#2E3134',
          700: '#212529',
          900: '#12181E'
        }
      },
      fontSize: {
        22: '1.375rem'
      }
    }
  },
  variants: {},
  plugins: []
}
