/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'homeimage': 'url(https://images.ctfassets.net/d9627l0amdl4/1eOOfZJZ9ih5ozr3SdvIfh/4fe656c481d59a8256ec79ea2d2eb83c/aboutmobile.jpg?w=998&q=80&&fm=webp&q=80)',
        'image1': 'url(https://images.ctfassets.net/d9627l0amdl4/3OqGaveyj2SME3s9opGGV6/e4c4003217874a621b0cf45a41b7ce70/fearn2.jpg?h=585&w=500&q=80&fit=fill&&fm=webp&q=80)',
        'image2': 'url(https://images.ctfassets.net/d9627l0amdl4/7wubzvKCOdF5l06xS7IVBT/935a1d9d12cf28d5f940555b12058420/Reach_Books_Stair2.jpg?h=761&w=650&q=80&fit=fill&&fm=webp&q=80)',
        'image3': 'url(https://images.ctfassets.net/d9627l0amdl4/6fuzNSbQGLmt76enMrYn9G/4d3a19a6bd9dc1177f07f5ef9d83c719/1.jpg?h=585&w=500&q=80&fit=fill&&fm=webp&q=80)',
        'image4': 'url(https://images.ctfassets.net/d9627l0amdl4/2EevN2rQXDoUg15i8pmvv9/e0c23d71eda11dbd0fa87a66379136fd/lavuneabout.jpg?h=585&w=500&q=80&fit=fill&&fm=webp&q=80)'
      }
    },
  },
  plugins: [],
}

