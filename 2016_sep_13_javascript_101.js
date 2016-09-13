// Linki
// https://nofluffjobs.com/
// http://caniuse.com/
// http://ranking.pl/

/////////////////////////////////////

function zlaczMojeNazwisko(imie, nazwisko = "Chamicewicz") {
    return imie + " " + nazwisko;
}

console.log(zlaczMojeNazwisko("Jakub"));

/////////////////////////////////////

var firstFunction = function() {
  console.log('pierwsza');
}

var secondFunction = function() {
  setTimeout(firstFunction, 5000);
  console.log('dwa');
}

secondFunction();

/////////////////////////////////////
//countdown
//http://codepen.io/anon/pen/RGABvL

//HTML
<div id="countdown"></div>
<button onclick="stopCountdown()">zakoncz to!</button>
 
//CSS
#countdown {
  background-color: pink;
  border: 2px dashed green;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  padding: 20px 0;
  margin: 20px;
}

//JS
var intervalNo = 0;

function stopCountdown(){
  clearInterval(intervalNo);
}

function countdown(fromNumber) {
  intervalNo = setInterval(function() {
    if(fromNumber <= 1){
      stopCountdown();
    }
    fromNumber -= 1; 
    document.getElementById('countdown').innerHTML = fromNumber;
  }, 1000);
}

countdown(5);

/////////////////////////////////////

//closures example
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1);
