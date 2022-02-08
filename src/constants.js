export const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export const getNormalDate = (d) => {
  const date = new Date(d)
  const normalDate = `${weekdays[date.getDay() - 1]} ${date.getHours()}:${date.getMinutes()}`
  return normalDate
}

export const citiesList = ["Tashkent","Samarkand","Andijon","Namangan","Qoqon","Farg'ona","Bukhara","Qarshi","Denov","Nukus","Jizzax","Termiz","Urganch","Navoiy","Kogon Shahri","Urgut Shahri","Qo'ng'irot Shahri","Xo'jayli Shahri","Kattaqo’rg’on Shahri","Guliston","Xiva","Chimboy Shahri","Chortoq","Payshamba Shahri","Kosonsoy","G’ijduvon Shahri","Uchquduq Shahri","Rishton","Yaypan","Juma Shahri","Vobkent Shahri","Yangirabot","Qo'rg'ontepa","Oqoltin","Buloqboshi","Oxunboboyev","Paxtaobod","Shahrixon","Baliqchi","Marhamat","Poytug'","Kuyganyor","Oltinko'l","Asaka","Xo'jaobod","Oltiariq","Beshariq","Vodil","Dang'ara","Quva","Toshloq","Langar","Yangiqo'rg'on","Navbahor","Yozyovon","Uchko'prik","Tŭragŭrghon Shahri","Uchqŭrghon Shahri","Haqqulobod","Pop Shahri","Xonqa","Qo’shko’pir","Yangibozor","Hazorasp","Gurlan","Shovot","Bog’ot","Qorovul","Yangiariq","Ziyodin Shaharchasi","Qo’shrabod","Bulung’ur Shahri","Nurobod Shahri","Toyloq Qishlog’i","Jomboy Shahri","Samarqand Shahri","Loyish Shaharchasi","Ishtixon Shahri","Oqtosh Shahri","Payariq Shahri","Shahrisabz Shahri","Qamashi Shahri","Mug'lon Shahar","Koson Shahri","Kitob Shahri","Qorashina","Chiroqchi Shahri","Beshkent Shahri","Yakkabog' Shahri","Muborak Shahri","Yangi Mirishkor","Yangi-Nishon Shahri","G'uzor Shahri","Gagarin Shahri","Uchtepa Qishlog’i","Zomin Shaharchasi","G’allaorol Shahri","Paxtakor Shahri","Usmat Shaharchasi","Zarbdor Shaharchasi","G’oliblar Qishlog’i","Yangiqishloq Shaharchasi","Zafarobod Shaharchasi","Do’stlik Shahri","Yangibozor Qishlog’i","Olot Shahri","Romitan Shahri","Qorovulbozor Shahri","Qorako'l Shahri","Shofirkon Shahri","Jondor Shaharchasi","Galaosiyo Shahri","Quvasoy","Ravon","Qorao'zak","To'rtko'l Shahri","Mo'ynoq Shahri","Qanliko'l","Taxtako'pir","Shumanay Shahri","Kegeyli Shahar","Mang'it Shahri","Beruniy Shahri","Bo'ston Shahri","Qozonketkan","Oqmang'it","Nurota Shahri","Konimex","Tomdibuloq","Qiziltepa Shahri","Karmana Shahri","Beshrabot"]

export const countriesList = [
  {
    "country": "Afghanistan"
  },
  {
    "country": "Albania"
  },
  {
    "country": "Algeria"
  },
  {
    "country": "American Samoa"
  },
  {
    "country": "Andorra"
  },
  {
    "country": "Angola"
  },
  {
    "country": "Anguilla"
  },
  {
    "country": "Antarctica"
  },
  {
    "country": "Antigua and Barbuda"
  },
  {
    "country": "Argentina"
  },
  {
    "country": "Armenia"
  },
  {
    "country": "Aruba"
  },
  {
    "country": "Australia"
  },
  {
    "country": "Austria"
  },
  {
    "country": "Azerbaijan"
  },
  {
    "country": "Bahamas"
  },
  {
    "country": "Bahrain"
  },
  {
    "country": "Bangladesh"
  },
  {
    "country": "Barbados"
  },
  {
    "country": "Belarus"
  },
  {
    "country": "Belgium"
  },
  {
    "country": "Belize"
  },
  {
    "country": "Benin"
  },
  {
    "country": "Bermuda"
  },
  {
    "country": "Bhutan"
  },
  {
    "country": "Bolivia"
  },
  {
    "country": "Bosnia and Herzegovina"
  },
  {
    "country": "Botswana"
  },
  {
    "country": "Bouvet Island"
  },
  {
    "country": "Brazil"
  },
  {
    "country": "British Indian Ocean Territory"
  },
  {
    "country": "Brunei"
  },
  {
    "country": "Bulgaria"
  },
  {
    "country": "Burkina Faso"
  },
  {
    "country": "Burundi"
  },
  {
    "country": "Cambodia"
  },
  {
    "country": "Cameroon"
  },
  {
    "country": "Canada"
  },
  {
    "country": "Cape Verde"
  },
  {
    "country": "Cayman Islands"
  },
  {
    "country": "Central African Republic"
  },
  {
    "country": "Chad"
  },
  {
    "country": "Chile"
  },
  {
    "country": "China"
  },
  {
    "country": "Christmas Island"
  },
  {
    "country": "Cocos (Keeling) Islands"
  },
  {
    "country": "Colombia"
  },
  {
    "country": "Comoros"
  },
  {
    "country": "Congo"
  },
  {
    "country": "The Democratic Republic of Congo"
  },
  {
    "country": "Cook Islands"
  },
  {
    "country": "Costa Rica"
  },
  {
    "country": "Ivory Coast"
  },
  {
    "country": "Croatia"
  },
  {
    "country": "Cuba"
  },
  {
    "country": "Cyprus"
  },
  {
    "country": "Czech Republic"
  },
  {
    "country": "Denmark"
  },
  {
    "country": "Djibouti"
  },
  {
    "country": "Dominica"
  },
  {
    "country": "Dominican Republic"
  },
  {
    "country": "East Timor"
  },
  {
    "country": "Ecuador"
  },
  {
    "country": "Egypt"
  },
  {
    "country": "England"
  },
  {
    "country": "El Salvador"
  },
  {
    "country": "Equatorial Guinea"
  },
  {
    "country": "Eritrea"
  },
  {
    "country": "Estonia"
  },
  {
    "country": "Ethiopia"
  },
  {
    "country": "Falkland Islands"
  },
  {
    "country": "Faroe Islands"
  },
  {
    "country": "Fiji Islands"
  },
  {
    "country": "Finland"
  },
  {
    "country": "France"
  },
  {
    "country": "French Guiana"
  },
  {
    "country": "French Polynesia"
  },
  {
    "country": "French Southern territories"
  },
  {
    "country": "Gabon"
  },
  {
    "country": "Gambia"
  },
  {
    "country": "Georgia"
  },
  {
    "country": "Germany"
  },
  {
    "country": "Ghana"
  },
  {
    "country": "Gibraltar"
  },
  {
    "country": "Greece"
  },
  {
    "country": "Greenland"
  },
  {
    "country": "Grenada"
  },
  {
    "country": "Guadeloupe"
  },
  {
    "country": "Guam"
  },
  {
    "country": "Guatemala"
  },
  {
    "country": "Guernsey"
  },
  {
    "country": "Guinea"
  },
  {
    "country": "Guinea-Bissau"
  },
  {
    "country": "Guyana"
  },
  {
    "country": "Haiti"
  },
  {
    "country": "Heard Island and McDonald Islands"
  },
  {
    "country": "Holy See (Vatican City State)"
  },
  {
    "country": "Honduras"
  },
  {
    "country": "Hong Kong"
  },
  {
    "country": "Hungary"
  },
  {
    "country": "Iceland"
  },
  {
    "country": "India"
  },
  {
    "country": "Indonesia"
  },
  {
    "country": "Iran"
  },
  {
    "country": "Iraq"
  },
  {
    "country": "Ireland"
  },
  {
    "country": "Israel"
  },
  {
    "country": "Isle of Man"
  },
  {
    "country": "Italy"
  },
  {
    "country": "Jamaica"
  },
  {
    "country": "Japan"
  },
  {
    "country": "Jersey"
  },
  {
    "country": "Jordan"
  },
  {
    "country": "Kazakhstan"
  },
  {
    "country": "Kenya"
  },
  {
    "country": "Kiribati"
  },
  {
    "country": "Kuwait"
  },
  {
    "country": "Kyrgyzstan"
  },
  {
    "country": "Laos"
  },
  {
    "country": "Latvia"
  },
  {
    "country": "Lebanon"
  },
  {
    "country": "Lesotho"
  },
  {
    "country": "Liberia"
  },
  {
    "country": "Libyan Arab Jamahiriya"
  },
  {
    "country": "Liechtenstein"
  },
  {
    "country": "Lithuania"
  },
  {
    "country": "Luxembourg"
  },
  {
    "country": "Macao"
  },
  {
    "country": "North Macedonia"
  },
  {
    "country": "Madagascar"
  },
  {
    "country": "Malawi"
  },
  {
    "country": "Malaysia"
  },
  {
    "country": "Maldives"
  },
  {
    "country": "Mali"
  },
  {
    "country": "Malta"
  },
  {
    "country": "Marshall Islands"
  },
  {
    "country": "Martinique"
  },
  {
    "country": "Mauritania"
  },
  {
    "country": "Mauritius"
  },
  {
    "country": "Mayotte"
  },
  {
    "country": "Mexico"
  },
  {
    "country": "Micronesia, Federated States of"
  },
  {
    "country": "Moldova"
  },
  {
    "country": "Monaco"
  },
  {
    "country": "Mongolia"
  },
  {
    "country": "Montserrat"
  },
  {
    "country": "Montenegro"
  },
  {
    "country": "Morocco"
  },
  {
    "country": "Mozambique"
  },
  {
    "country": "Myanmar"
  },
  {
    "country": "Namibia"
  },
  {
    "country": "Nauru"
  },
  {
    "country": "Nepal"
  },
  {
    "country": "Netherlands"
  },
  {
    "country": "Netherlands Antilles"
  },
  {
    "country": "New Caledonia"
  },
  {
    "country": "New Zealand"
  },
  {
    "country": "Nicaragua"
  },
  {
    "country": "Niger"
  },
  {
    "country": "Nigeria"
  },
  {
    "country": "Niue"
  },
  {
    "country": "Norfolk Island"
  },
  {
    "country": "North Korea"
  },
  {
    "country": "Northern Ireland"
  },
  {
    "country": "Northern Mariana Islands"
  },
  {
    "country": "Norway"
  },
  {
    "country": "Oman"
  },
  {
    "country": "Pakistan"
  },
  {
    "country": "Palau"
  },
  {
    "country": "Palestine"
  },
  {
    "country": "Panama"
  },
  {
    "country": "Papua New Guinea"
  },
  {
    "country": "Paraguay"
  },
  {
    "country": "Peru"
  },
  {
    "country": "Philippines"
  },
  {
    "country": "Pitcairn"
  },
  {
    "country": "Poland"
  },
  {
    "country": "Portugal"
  },
  {
    "country": "Puerto Rico"
  },
  {
    "country": "Qatar"
  },
  {
    "country": "Reunion"
  },
  {
    "country": "Romania"
  },
  {
    "country": "Russian Federation"
  },
  {
    "country": "Rwanda"
  },
  {
    "country": "Saint Helena"
  },
  {
    "country": "Saint Kitts and Nevis"
  },
  {
    "country": "Saint Lucia"
  },
  {
    "country": "Saint Pierre and Miquelon"
  },
  {
    "country": "Saint Vincent and the Grenadines"
  },
  {
    "country": "Samoa"
  },
  {
    "country": "San Marino"
  },
  {
    "country": "Sao Tome and Principe"
  },
  {
    "country": "Saudi Arabia"
  },
  {
    "country": "Scotland"
  },
  {
    "country": "Senegal"
  },
  {
    "country": "Serbia"
  },
  {
    "country": "Seychelles"
  },
  {
    "country": "Sierra Leone"
  },
  {
    "country": "Singapore"
  },
  {
    "country": "Slovakia"
  },
  {
    "country": "Slovenia"
  },
  {
    "country": "Solomon Islands"
  },
  {
    "country": "Somalia"
  },
  {
    "country": "South Africa"
  },
  {
    "country": "South Georgia and the South Sandwich Islands"
  },
  {
    "country": "South Korea"
  },
  {
    "country": "South Sudan"
  },
  {
    "country": "Spain"
  },
  {
    "country": "Sri Lanka"
  },
  {
    "country": "Sudan"
  },
  {
    "country": "Suriname"
  },
  {
    "country": "Svalbard and Jan Mayen"
  },
  {
    "country": "Swaziland"
  },
  {
    "country": "Sweden"
  },
  {
    "country": "Switzerland"
  },
  {
    "country": "Syria"
  },
  {
    "country": "Tajikistan"
  },
  {
    "country": "Tanzania"
  },
  {
    "country": "Thailand"
  },
  {
    "country": "Timor-Leste"
  },
  {
    "country": "Togo"
  },
  {
    "country": "Tokelau"
  },
  {
    "country": "Tonga"
  },
  {
    "country": "Trinidad and Tobago"
  },
  {
    "country": "Tunisia"
  },
  {
    "country": "Turkey"
  },
  {
    "country": "Turkmenistan"
  },
  {
    "country": "Turks and Caicos Islands"
  },
  {
    "country": "Tuvalu"
  },
  {
    "country": "Uganda"
  },
  {
    "country": "Ukraine"
  },
  {
    "country": "United Arab Emirates"
  },
  {
    "country": "United Kingdom"
  },
  {
    "country": "United States"
  },
  {
    "country": "United States Minor Outlying Islands"
  },
  {
    "country": "Uruguay"
  },
  {
    "country": "Uzbekistan"
  },
  {
    "country": "Vanuatu"
  },
  {
    "country": "Venezuela"
  },
  {
    "country": "Vietnam"
  },
  {
    "country": "Virgin Islands, British"
  },
  {
    "country": "Virgin Islands, U.S."
  },
  {
    "country": "Wales"
  },
  {
    "country": "Wallis and Futuna"
  },
  {
    "country": "Western Sahara"
  },
  {
    "country": "Yemen"
  },
  {
    "country": "Zambia"
  },
  {
    "country": "Zimbabwe"
  }
]
