/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    boxShadow: {
      'primary-bottom': '0px 0px 27px #386EEC',
      'primary-all': '0px 0px 10px #386EEC'
    },
    extend: {
      colors: {
        common: {
          black: '#020202',
          white: '#ffffff',
          grey20: '#898989',
          grey30: '#757575',
          dark20: '#141316',
          dark30: '#28262C',
          dark40: '#232631',
          dark50: '#333042'
        },
        validators: {
          error: 'red',
          success: '#42ff00',
          warning: 'yellow'
        },
        input: {
          background: '#242424'
        }
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        sejadev: {
          primary: '#386EEC',
          secondary: '#F000B8',
          accent: '#37CDBE',
          neutral: '#3D4451',
          'base-100': '#18181b',
          info: '#3ABFF8',
          success: '#36D399',
          error: '#F87272',
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: ''
  }
}
