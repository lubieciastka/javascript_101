function checkPassword(password){
    if(password.length < 8){
        return "Długość jest mniejsza niz 8 znaków";
    }

    let isUpperCase = false;
    let charIsNumber = false;

    for( let i = 0; i < password.length; i++){
        if(isNaN(password[i]) === false){
            charIsNumber = true;
        }else if(password[i] === password[i].toUpperCase()){
            isUpperCase = true;
        }
    }

    console.log(isUpperCase, charIsNumber);
    if(isUpperCase === false){
        return "Brak duzych liter";
    }

    if(charIsNumber === false){
        return "Brak cyfr";
    }

    return "great success";
}

// checkPassword('aaaaaaaaaa987');

function countWords(veryLongString){
    let tablicaSlow = veryLongString.split(' ');
    let tablicaWynikow = [];

    for(let i = 0; i < tablicaSlow.length; i++){
        if(tablicaWynikow[tablicaSlow[i]] === undefined){
            tablicaWynikow[tablicaSlow[i]] = 1;
        }else{
            tablicaWynikow[tablicaSlow[i]] += 1;
        }
    }

    return tablicaWynikow;
}

// countWords('aaa bb cc aaa bb cc sd sd wfff');

"use strict";

function foo(){
    x = 0;
}

//event loop

function foo(przekazanaFunckja){
    przekazanaFunckja();
}
function baz(){}

foo(baz);
foo(function(){

});


function generateTable() {
  let _table = "<table border=1>";
  for (let i = 0; i < 10; i++) {
    _table += "<tr>";
    let _x = i%2;
    for (let j = 0; j < 10; j++) {
      if ((j + _x) % 2 === 0) {
        _table += "<td style='background-color: #ff0000'>x</td>";
      } else {
        _table += "<td style='background-color: #00ff00'>x</td>";
      }
    }
    _table += "</tr>";
  }
  _table += "</table>";
  document.getElementById('costam').innerHTML = _table;
}

generateTable();


