//https://nofluffjobs.com/
//http://codepen.io/anon/pen/YGQzwV

function showAllDiv(){
    console.log($('div').css('border', '2px solid red').length);
}

showAllDiv();

///////////////////////////////

var elements = ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'li', 'table', 'tr', 'td'];

function _statystykaElementow(_elements){
    for(let i = 0; i < _elements.length; i++){
        console.log(_elements[i] + " " + $(_elements[i]).length);
    }
}

_statystykaElementow(elements);

//wszystkie elementy o klasie .klasa1
console.log($('.klasa1'));
// bezposredni rodzice elementow o klasie .klasa1
console.log($('.klasa1').parent());
//dla elementow o klasie .klasa1 wypisac parentsow o klasie .klasa2
console.log($('.klasa1').parents('.klasa2'));
//Dla elementów o klasie 'klasa1' wypisać wszystkie elementy pomiędzy tym elementem a najbliższym rodzicem o klasie 'klasa3' w formacie: ' -> -> '
console.log($('.klasa1').parentsUntil('.klasa3'));
//Dla elementów o klasie 'klasa1' wypisać najbliższe elementy o klasie 'klasa2'
console.log($('.klasa1').siblings('.klasa2'));
// powszystkich elementach o klasie .klasa1 dodac element o klasie .klasa4
$('<div class="klasa4"></div>').insertAfter('.klasa1');

$('.klasa3').empty().html("eclipse ciastka");


//Wszystkim elementom o klasie 'klasa2' dodać klasę 'test'

setInterval(function(){
  $('.klasa2').toggleClass('test');
}, 500);

//Dla elementów o klasie 'klasa1' dodać klasę 'klasa2' jesli jej nie miały i usunąć ją jeśli ja miały.
var elementy = $('.klasa1').toggleClass('klasa2');

