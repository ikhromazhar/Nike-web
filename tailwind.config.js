
export default {
  theme: {
    extend: {},
  },
  plugins: [],
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

    ],
  theme: {
  	 colors: {
  	 	'redB': '#FE3C00',
  	 	'cream': '#F4F0E5',
    },
    extend: {
      colors: {
        'black-rgba': 'rgba(255, 255, 255, 0.274);',
      },
    },
  },
  plugins: [
  	  require('flowbite/plugin'),
  	  require('taos/plugin')
  	],
  	 safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],

}

