// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add your content paths here
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Custom 'xs' breakpoint
        'sm': '640px',  // Tailwind's default 'sm' breakpoint
        'md': '768px',  // Tailwind's default 'md' breakpoint
        'lg': '1024px', // Tailwind's default 'lg' breakpoint
        'xl': '1280px', // Tailwind's default 'xl' breakpoint
        '2xl': '1536px', // Tailwind's default '2xl' breakpoint
        '3xl': '1600px',  // Custom '3xl' breakpoint
      },
    },
  },
  plugins: [],
}
