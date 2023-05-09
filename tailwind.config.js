/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.{js,vue,ts,tsx,jsx}'
  ],
  theme: {
    extend: {
      colors:{
        background:'#0b132b',
        container:'#1c2541',
        sidebar:'#3a506b',
        conversation:'#07293e',
        bubble:'#40798c',
        outgoing:'#3c6e71',
        chatbox:'#1e6777',
      }
    },
  },
  plugins: [],
}

