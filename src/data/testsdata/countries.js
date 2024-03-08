// Map country codes to flag icons (assuming you have them in your assets)

const countries = [
  {
    country: "Nigeria",
    emoji: "🇳🇬",
    mobileCode: "234",
  },
  {
    country: "United Kingdom",
    emoji: "🇬🇧",
    mobileCode: "44",
  },
  {
    country: "United States of America",
    emoji: "🇺🇸",
    mobileCode: "1",
  },
  {
    country: "France",
    emoji: "🇫🇷",
    mobileCode: "33",
  },
  {
    country: "Germany",
    emoji: "🇩🇪",
    mobileCode: "49",
  },
  {
    country: "South Africa",
    emoji: "🇿🇦",
    mobileCode: "27",
  },
  {
    country: "Belgium",
    emoji: "🇧🇪",
    mobileCode: "32",
  },
  {
    country: "Montenegro",
    emoji: "🇲🇪",
    mobileCode: "382",
  },
  {
    country: "China",
    emoji: "🇨🇳",
    mobileCode: "86",
  },
  {
    country: "Russia",
    emoji: "🇷🇺",
    mobileCode: "7",
  },
  {
    country: "India",
    emoji: "🇮🇳",
    mobileCode: "91",
  },
  {
    country: "Japan",
    emoji: "🇯🇵",
    mobileCode: "81",
  },
  {
    country: "Albania",
    emoji: "🇦🇱",
    mobileCode: "355",
  },
  {
    country: "Spain",
    emoji: "🇪🇸",
    mobileCode: "34",
  },
  {
    country: "Austria",
    emoji: "🇦🇹",
    mobileCode: "43",
  },
  {
    country: "Pakistan",
    emoji: "🇵🇰",
    mobileCode: "92",
  },
  {
    country: "Brazil",
    emoji: "🇧🇷",
    mobileCode: "55",
  },
  {
    country: "Australia",
    emoji: "🇦🇺",
    mobileCode: "61",
  },
  {
    country: "Indonesia",
    emoji: "🇮🇩",
    mobileCode: "62",
  },
  {
    country: "Chile",
    emoji: "🇨🇱",
    mobileCode: "56",
  },
  {
    country: "Colombia",
    emoji: "🇨🇴",
    mobileCode: "57",
  },
  {
    country: "Mexico",
    emoji: "🇲🇽",
    mobileCode: "52",
  },
  {
    country: "Singapore",
    emoji: "🇸🇬",
    mobileCode: "65",
  },
  {
    country: "New Zealand",
    emoji: "🇳🇿",
    mobileCode: "64",
  },
  {
    country: "Thailand",
    emoji: "🇹🇭",
    mobileCode: "66",
  },
  {
    country: "Vietnam",
    emoji: "🇻🇳",
    mobileCode: "84",
  },
  {
    country: "Malaysia",
    emoji: "🇲🇾",
    mobileCode: "60",
  },
  {
    country: "Philippines",
    emoji: "🇵🇭",
    mobileCode: "63",
  },
  {
    country: "Cambodia",
    emoji: "🇰🇭",
    mobileCode: "855",
  },
  {
    country: "Laos",
    emoji: "🇱🇦",
    mobileCode: "856",
  },
  {
    country: "Myanmar",
    emoji: "🇲🇲",
    mobileCode: "95",
  },
  {
    country: "South Korea",
    emoji: "🇰🇷",
    mobileCode: "82",
  },
  {
    country: "Turkey",
    emoji: "🇹🇷",
    mobileCode: "90",
  },
  {
    country: "Greece",
    emoji: "🇬🇷",
    mobileCode: "30",
  },
  {
    country: "Saudi Arabia",
    emoji: "🇸🇦",
    mobileCode: "966",
  },
  {
    country: "Egypt",
    emoji: "🇪🇬",
    mobileCode: "20",
  },
  {
    country: "Netherlands",
    emoji: "🇳🇱",
    mobileCode: "31",
  },
  {
    country: "Canada",
    emoji: "🇨🇦",
    mobileCode: "1",
  },
  {
    country: "Argentina",
    emoji: "🇦🇷",
    mobileCode: "54",
  },
  {
    country: "South Sudan",
    emoji: "🇸🇸",
    mobileCode: "211",
  },
  {
    country: "Kenya",
    emoji: "🇰🇪",
    mobileCode: "254",
  },
  {
    country: "Uganda",
    emoji: "🇺🇬",
    mobileCode: "256",
  },
  {
    country: "Ethiopia",
    emoji: "🇪🇹",
    mobileCode: "251",
  },
  {
    country: "Ghana",
    emoji: "🇬🇭",
    mobileCode: "233",
  },
  {
    country: "Cameroon",
    emoji: "🇨🇲",
    mobileCode: "237",
  },
  {
    country: "Ivory Coast",
    emoji: "🇨🇮",
    mobileCode: "225",
  },
  {
    country: "Senegal",
    emoji: "🇸🇳",
    mobileCode: "221",
  },
  {
    country: "Morocco",
    emoji: "🇲🇦",
    mobileCode: "212",
  },
  {
    country: "Tunisia",
    emoji: "🇹🇳",
    mobileCode: "216",
  },
  {
    country: "South Korea",
    emoji: "🇰🇷",
    mobileCode: "82",
  },
  {
    country: "Israel",
    emoji: "🇮🇱",
    mobileCode: "972",
  },
  {
    country: "Jordan",
    emoji: "🇯🇴",
    mobileCode: "962",
  },
  {
    country: "Lebanon",
    emoji: "🇱🇧",
    mobileCode: "961",
  },
  {
    country: "Iraq",
    emoji: "🇮🇶",
    mobileCode: "964",
  },
  {
    country: "Iran",
    emoji: "🇮🇷",
    mobileCode: "98",
  },
  {
    country: "Afghanistan",
    emoji: "🇦🇫",
    mobileCode: "93",
  },
  {
    country: "Pakistan",
    emoji: "🇵🇰",
    mobileCode: "92",
  },
  {
    country: "India",
    emoji: "🇮🇳",
    mobileCode: "91",
  },
  {
    country: "Bangladesh",
    emoji: "🇧🇩",
    mobileCode: "880",
  },
  {
    country: "Sri Lanka",
    emoji: "🇱🇰",
    mobileCode: "94",
  },
  {
    country: "Maldives",
    emoji: "🇲🇻",
    mobileCode: "960",
  },
  {
    country: "Nepal",
    emoji: "🇳🇵",
    mobileCode: "977",
  },
  {
    country: "Bhutan",
    emoji: "🇧🇹",
    mobileCode: "975",
  },
  {
    country: "Myanmar",
    emoji: "🇲🇲",
    mobileCode: "95",
  },
  {
    country: "Thailand",
    emoji: "🇹🇭",
    mobileCode: "66",
  },
  {
    country: "Vietnam",
    emoji: "🇻🇳",
    mobileCode: "84",
  },
  {
    country: "Malaysia",
    emoji: "🇲🇾",
    mobileCode: "60",
  },
  {
    country: "Philippines",
    emoji: "🇵🇭",
    mobileCode: "63",
  },
  {
    country: "Singapore",
    emoji: "🇸🇬",
    mobileCode: "65",
  },
  {
    country: "Indonesia",
    emoji: "🇮🇩",
    mobileCode: "62",
  },
  {
    country: "Timor-Leste",
    emoji: "🇹🇱",
    mobileCode: "670",
  },
  {
    country: "Papua New Guinea",
    emoji: "🇵🇬",
    mobileCode: "675",
  },
  {
    country: "Solomon Islands",
    emoji: "🇸🇧",
    mobileCode: "677",
  },
  {
    country: "Fiji",
    emoji: "🇫🇯",
    mobileCode: "679",
  },
  {
    country: "Tonga",
    emoji: "🇹🇴",
    mobileCode: "676",
  },
  {
    country: "Samoa",
    emoji: "🇼🇸",
    mobileCode: "685",
  },
  {
    country: "Tuvalu",
    emoji: "🇹🇻",
    mobileCode: "688",
  },
  {
    country: "Kiribati",
    emoji: "🇰🇮",
    mobileCode: "686",
  },
  {
    country: "Marshall Islands",
    emoji: "🇲🇭",
    mobileCode: "692",
  },
  {
    country: "Palau",
    emoji: "🇵🇼",
    mobileCode: "680",
  },
  {
    country: "Micronesia",
    emoji: "🇫🇲",
    mobileCode: "691",
  },
  {
    country: "Northern Mariana Islands",
    emoji: "🇲🇵",
    mobileCode: "1",
  },
  {
    country: "Guam",
    emoji: "🇬🇺",
    mobileCode: "1",
  },
  {
    country: "Wake Island",
    emoji: "🇺🇲",
    mobileCode: "1",
  },
  {
    country: "Midway Atoll",
    emoji: "🇺🇲",
    mobileCode: "1",
  },
  {
    country: "Johnston Atoll",
    emoji: "🇺🇲",
    mobileCode: "1",
  },
  {
    country: "Baker Island",
    emoji: "🇺🇲",
    mobileCode: "1",
  },
  {
    country: "Howland Island",
    emoji: "🇺🇲",
    mobileCode: "1",
  },
  {
    country: "Jarvis Island",
    emoji: "🇺🇲",
    mobileCode: "1",
  },
];

export default countries;
