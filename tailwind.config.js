module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        parallax: "url('/public/imgs/home/home.gif')",
      },
      boxShadow: {
        slide: "0 20px 60px rgba(0, 0, 0, 12)",
      },
    },
  },
  plugins: [],
};
