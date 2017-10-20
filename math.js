var x = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50
];
var averageX = 25;
var standDevX = 14.719601443879744;

var y = [
  0,
  1,
  1,
  1,
  2,
  3,
  4,
  4,
  4,
  6,
  8,
  9,
  9,
  9,
  12,
  13,
  14,
  14,
  14,
  15,
  15,
  15,
  18,
  18,
  20,
  21,
  22,
  22,
  22,
  22,
  24,
  25,
  25,
  26,
  28,
  29,
  30,
  33,
  34,
  34,
  35,
  36,
  37,
  37,
  38,
  40,
  42,
  44,
  47,
  47,
  48
];
var averageY = 21.11764705882353;
var standDevY = 13.87429144451103;

function asdf() {
  var arr = [];
  for (var i = 0; i < 51; i++) {
    var num = Math.floor(Math.random() * 50);
    arr.push(num);
  }
  return arr;
}

function zerothrough50() {
  var start = 0;
  var arr = [0];
  for (var i = 0; i < 50; i++) {
    start = start + 1;
    arr.push(start);
  }
  return arr;
}

let average = (array) => array.reduce((a, b) => a + b) / array.length;

console.log(average([1, 2, 3, 4, 5]));

function StandardDeviation(numbersArr) {
  //--CALCULATE AVERAGE--
  var total = 0;
  for (var key in numbersArr)
    total += numbersArr[key];
  var meanVal = total / numbersArr.length;
  //--CALCULATE AVERAGE--

  //--CALCULATE STANDARD DEVIATION--
  var SDprep = 0;
  for (var key in numbersArr)
    SDprep += Math.pow((parseFloat(numbersArr[key]) - meanVal), 2);
  var SDresult = Math.sqrt(SDprep / numbersArr.length);
  //--CALCULATE STANDARD DEVIATION--
  console.log(SDresult);
}

// mathportal.com
// y = -2.296 + 0.937x
// (0, 2.296)
// (50, 44.554)

var x = [
  "Kentucky",
  "West Virginia",
  "Arkansas",
  "Tennessee",
  "Mississippi",
  "Missouri",
  "Maine",
  "Indiana",
  "Louisiana",
  "Delaware",
  "Alabama",
  "Oklahoma",
  "Ohio",
  "North Carolina",
  "Rhode Island",
  "South Carolina",
  "Illinois",
  "New Hampshire",
  "Michigan",
  "Georgia",
  "Pennsylvania",
  "Vermont",
  "Massachusetts",
  "Iowa",
  "Connecticut",
  "Florida",
  "Alaska",
  "Nevada",
  "Nation",
  "Virginia",
  "Kansas",
  "New York",
  "Wisconsin",
  "Washington",
  "Oregon",
  "District of Columbia",
  "New Jersey",
  "Nebraska",
  "Montana",
  "South Dakota",
  "North Dakota",
  "Maryland",
  "Texas",
  "Minnesota",
  "Arizona",
  "Idaho",
  "Wyoming",
  "Hawaii",
  "California",
  "Colorado",
  "New Mexico",
  "Utah"
];

var neu = [];
for (var i = 0; i < x.length; i++) {
  neu.unshift(x[i]);
}
console.log(neu);

var neu = [
  "Louisiana",
  "Alabama",
  "Mississippi",
  "Kentucky",
  "West Virginia",
  "New Mexico",
  "Iowa",
  "South Carolina",
  "Georgia",
  "Alaska",
  "Idaho",
  "Hawaii",
  "Texas",
  "Wyoming",
  "North Carolina",
  "Utah",
  "Nebraska",
  "Wisconsin",
  "Montana",
  "Arizona",
  "Nation",
  "Maine",
  "California",
  "Pennsylvania",
  "North Dakota",
  "Illinois",
  "Colorado",
  "Rhode Island",
  "New Jersey",
  "New Hampshire",
  "Connecticut",
  "New York"
];

var y = [96.8,
81.6,
77.5,
77.2,
76.8,
76.2,
74.9,
74.5,
71.8,
71.8,
71.7,
71.6,
71.1,
70.9,
70.0,
69.1,
68.3,
68.1,
68.0,
67.7,
66.7,
66.7,
66.5,
65.1,
63.5,
63.3,
63.2,
63.1,
63.0,
62.4,
62.2,
62.2,
61.5,
60.4,
59.6,
59.6,
59.4,
59.1,
58.7,
58.2,
57.4,
57.2,
56.4,
55.5,
52.1,
51.4,
47.8,
47.5,
46.8,
45.8,
42.7,
29.1
]
var neu2 = [];
for (var i = 0; i < y.length; i++) {
  neu2.unshift(y[i]);
}
console.log(neu2);
