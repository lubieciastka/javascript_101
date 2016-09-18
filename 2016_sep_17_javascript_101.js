var _table = ["twoja",2,4,"Stara",4,3,666,"hellowRold"];

function _checkType(myTable){
  for(let i = 0; i < myTable.length; i++){
    if(typeof myTable[i] === "number"){
      console.log(_leftPad(myTable[i]));
    }
    if(typeof myTable[i] === "string"){
      console.log(myTable[i].substr(-2));
    }
  }
}

function _leftPad(_number){
   return _number < 10 ? "0" + _number : _number;
}

_checkType(_table);


//fibonacci
function fibonacci(n) {
  var a = 0;
  var b = 1;
  var sum = 0;
  console.log(a);
  console.log(b);
  for (let i = 0; i < n; i++) {
    sum = a + b;
    a = b;
    b = sum;
    console.log(sum);
  }
}

fibonacci(10);

//fibonacci rekurencyjnie

function fibonacci(n) {
   if (n < 2){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}

console.log(fibonacci(7));

//bubble sort
var _table = [1,3,5,3,764,2,23,4,6,7,7,1,43,3];

function _bubbleSort(_t){
  let swapped = true;
  do{
    swapped = false;
    for(let i = 0; i < _t.length; i++){
      if(_t[i] > _t[i + 1]){
        let _temp = _t[i];
        _t[i] = _t[i + 1];
        _t[i + 1] = _temp;
        swapped = true;
      }
    }
  }while(swapped);
  
  return _t;
}

console.log(_bubbleSort(_table));

//pogoda - przykladowy plik:
var szklanaPogoda = {
  miejscowosc: "Warszawa",
  najblizszeMiasta: ["sosnowiec", "radom","swiebodzin"],
  polozenie: {
    szerokosc: 52,
    dlugosc: 21
  },
  temperatura: 30,
  slonce: 'tak'
};
console.log(szklanaPogoda);
console.log(JSON.stringify(szklanaPogoda));
