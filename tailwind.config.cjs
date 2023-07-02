/** @type {import('tailwindcss').Config} */
// import "tailwindcss-bg-patterns.d.ts";


const config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hanken: ["Hanken Grotesk", "Inter"],
        general: ["General Sans", "Inter"],
        azeret: ["Azeret Mono", "Inter"],
        clash: ["Clash Grotesk", "Inter"],
        satoshi: ["Satoshi", "Inter"],
      },
      colors: {
        gpt: "#F7E818",
        gptLight: "#F7E818",
        gptLighter: "F7E818",
        gptLightest: "F7E818",
        gptDark: "F7E818",
        gptDarker: "F7E818",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // plugins: [require("tailwindcss-bg-patterns")],
};

module.exports = config;