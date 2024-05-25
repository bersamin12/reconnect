module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'iphone-14-pro-max': '428px', // Use appropriate breakpoint, e.g., 428px for portrait mode
      },
      colors: {
        'c3c9ff': '#c3c9ff',
        'a9a8dc': '#a9a8dc',
        '6c69ff': '#6c69ff',
        '413f99': '#413f99',
        'ff-dcbc': '#FFDCBC',
        'ef-9e9d': '#EF9E9D',
      },
      fontFamily: {
        cherrybombone: ['"Cherry Bomb One"', 'cursive'],
        vt323: ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
}
