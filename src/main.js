function getRandomElementFromArray (array) {
  return array[Math.floor(Math.random() * array.length)];
};

function westerosLocation () {
  return getRandomElementFromArray(cities);
}

function dragon() {
  return getRandomElementFromArray(dragons);
}

function email () {
  var random = Math.floor(Math.random() * 99) + 1;
  var randomWord = getRandomElementFromArray(emails.words);
  var randomDomain = getRandomElementFromArray(emails.domains);

  var haxzor = function (string) {
    var charArray = [];
    for (var i = 0; i < string.length; i++){
      if (i % 2 == 0) {
        charArray.push(string[i].toUpperCase());
      }
      else charArray.push(string[i]);
    }
    return charArray.join("");
  };

  if ( ( 0 < random ) && ( random <= 25 ) ) {
    return "xXx_" + haxzor(randomWord) + Math.floor((random / 10) + 2) + "_xXx" + randomDomain;
  }
  if ( ( 25 < random ) && ( random <= 50 ) ) {
    return randomWord + "chan" + random + randomDomain;
  }
  if ( ( 50 < random ) && ( random <= 75 ) ) {
    return randomWord + "qt" + Math.floor(random / 10) + "uwu" + randomDomain;
  }
  else return randomWord + random + randomDomain;
};

function fullName () {
  return getRandomElementFromArray(firstnames) + " " + "Targaryen";
};

var emails = {
  "words" : [
    "blackfyre",
    "darksister",
    "dracarys",
    "dragon",
    "dragonfire",
    "dragonegg",
    "dragonstone",
    "fireandblood",
    "newvalyria",
    "oldvalyria",
    "valyria",
    "wildfire"
  ],
  "domains": [
    "@dragonstone.wst",
    "@dragonstone.ovy",
    "@dragonstone.io",
    "@redkeep.wst",
    "@redkeep.ovy",
    "@redkeep.io"
  ]
};

var firstnames = [
  "Aegon",
  "Aelora",
  "Aelyx",
  "Aemon",
  "Aemond",
  "Aenar",
  "Aerea",
  "Aerion",
  "Aerys",
  "Alysanne",
  "Alyssa",
  "Baela",
  "Baelon",
  "Baelor",
  "Daella",
  "Daemion",
  "Daena",
  "Daenaera",
  "Daenerys",
  "Daenora",
  "Daenys",
  "Daeron",
  "Duncan",
  "Elaena",
  "Elaena",
  "Gael",
  "Gaemon",
  "Gaemon",
  "Helaena",
  "Jacaerys",
  "Jaehaera",
  "Jaehaerys",
  "Lucerys",
  "Maegelle",
  "Maegon",
  "Maekar",
  "Matarys",
  "Naerys",
  "Rhae",
  "Rhaegar",
  "Rhaella",
  "Rhaella",
  "Rhaena",
  "Rhaenya",
  "Rhaenyra",
  "Rhaenys",
  "Saera",
  "Shaera",
  "Vaegon",
  "Valaar",
  "Valerion",
  "Visenya",
  "Viserra",
  "Viserys"
];

var cities = [
  'Oldtown',
  'Starfall',
  'Sunspear',
  'Highgarden',
  'Summerhall',
  "Storm's End",
  "King's Landing",
  'Lannisport',
  'Stoney Sept',
  'Dragonstone',
  'Harrenhal',
  'Pyke',
  'Riverrun',
  'The Eyrie',
  'Gulltown',
  'The Twins',
  'White Harbor',
  'Barrowton',
  "Torrhen's Square",
  'Winterfell',
  'Deepwood Motte',
  'The Dreadfort',
  'Karhold',
  'Castle Black',
  'Eastwatch',
  'Hardhome',
  'Lys',
  'Tyrosh',
  'Myr',
  'Pentos',
  'Braavos',
  'Lorath',
  'Norvos',
  'Ghoyan Drohe',
  'Qohor',
  'Chroyane',
  'Volantis',
  'Valyria',
  'Mantarys',
  'Meereen',
  'Yunkai',
  'Astapor',
  'Old Ghis',
  'New Ghis',
  'Vaes Dothrak',
  'Kayakayanaya',
  'Samyriana',
  'Bayasabahd',
  'Vaes Tolorro',
  'Qarth',
  'Faros',
  'Yin',
  'Asshai',
  'Port of Ibben',
  'Lotus Port',
  'Tall Trees Town',
  'Moat Cailin',
  'Last Hearth' ];

var dragons = [
  "Arrax",
  "Balerion",
  "Caraxes",
  "Dreamfyre",
  "Drogon",
  "Grey Ghost",
  "Meleys",
  "Meraxes",
  "Moondancer",
  "Morghul",
  "Morning",
  "Quicksilver",
  "Rhaegal",
  "Seasmoke",
  "Sheepstealer",
  "Shrykos",
  "Silverwing",
  "Stormcloud",
  "Sunfyre",
  "Syrax",
  "Tessarion",
  "Tyraxes",
  "Vermax",
  "Vermithor",
  "Vhagar",
  "Viserion",
];

document.getElementById('locationp').innerHTML = "Click the button <3";
document.getElementById('the-button').addEventListener('click', function(){
  document.getElementById('fullnamep').innerHTML = fullName();
  document.getElementById('emailp').innerHTML = email();
  document.getElementById('locationp').innerHTML = westerosLocation();
  document.getElementById('dragonp').innerHTML = dragon();
});

