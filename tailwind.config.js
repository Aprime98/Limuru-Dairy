/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ...
        "love-green": "#D4FCBC",
        "grass-green": "#349C04",
        'Dark-Choco': '#e87d0e',
        'softGreen':'#A8D5BA',
        'NavyBlue':'#2F4F4F',
        'cream':'#F7F5F2',
        'forestGreen':'#2C6E49',
        // ...
      },
      fontFamily:{
        'roboto': ["Roboto", 'sans-serif'],
        'Montserrat': ["Montserrat", 'sans-serif'],
        'Edu': ['Edu VIC WA NT Beginner','san-serif'],
        'Grey qo': ["Grey Qo", 'san-serif'],
        'Poppins': ['Poppins', 'Roboto']
      }
    },
  },
  plugins: [],
};
