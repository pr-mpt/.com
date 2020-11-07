module.exports = {
  purge: {
    'mode': 'layers',
    'layers': [
      'components',
      'utilities',
    ],
    'content': [
      './public/**/*.html',
    ],
  },
  theme: {
    extend: {
      animation: {
        'prompt': 'blinking 1s linear infinite',
      },
      keyframes: {
        blinking: {
          '0%, 49.9%': { opacity: '0' },
          '50%, 100%': { opacity: '1' },
        },
      },
    },
    fontFamily: {
      'mono': [
        'Source Code Pro',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
  },
  variants: {},
  plugins: [],
};
