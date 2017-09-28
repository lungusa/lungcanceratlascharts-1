var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
var averageX = 25;
var standDevX = 14.719601443879744;

var y = [0, 1, 1, 1, 2, 3, 4, 4, 4, 6, 8, 9, 9, 9, 12, 13, 14, 14, 14, 15, 15, 15, 18, 18, 20, 21, 22, 22, 22, 22, 24, 25, 25, 26, 28, 29, 30, 33, 34, 34, 35, 36, 37, 37, 38, 40, 42, 44, 47, 47, 48];
var averageY = 21.11764705882353;
var standDevY = 13.87429144451103;


function asdf(){
  var arr = [];
  for (var i = 0; i < 51; i++) {
    var num = Math.floor(Math.random()*50);
    arr.push(num);
  }
  return arr;
}

function zerothrough50 (){
  var start = 0;
  var arr = [0];
  for (var i = 0; i < 50; i++) {
    start = start+1;
    arr.push(start);
  }
  return arr;
}

let average = (array) => array.reduce((a, b) => a + b) / array.length;

console.log(average([1,2,3,4,5]));

function StandardDeviation(numbersArr) {
    //--CALCULATE AVERAGE--
    var total = 0;
    for(var key in numbersArr)
       total += numbersArr[key];
    var meanVal = total / numbersArr.length;
    //--CALCULATE AVERAGE--

    //--CALCULATE STANDARD DEVIATION--
    var SDprep = 0;
    for(var key in numbersArr)
       SDprep += Math.pow((parseFloat(numbersArr[key]) - meanVal),2);
    var SDresult = Math.sqrt(SDprep/numbersArr.length);
    //--CALCULATE STANDARD DEVIATION--
    console.log(SDresult);
}

// mathportal.com
// y = -2.296 + 0.937x
// (0, 2.296)
// (50, 44.554)
