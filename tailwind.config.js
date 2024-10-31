/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      mainColor: "#680A0A",
      black100: "#212529", // Corrected typo from "balck100"
      black75: "#3D4043", // Corrected typo from "blck75"
      black50: "#798086",
      black25: "#BCBFC2",
      black10: "#E4E5E7",
      white: "#ffffff",
    },
  },
};
export const plugins = [];
