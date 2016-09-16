//http://bit.ly/2d0RcpK

//eventy i losowanie
//JS

// document.getElementById("test").addEventListener("keyup", function(){
// 	console.log(document.getElementById("test").value);
// });

document.getElementById("kliknijmnie").addEventListener("click", function(){
  let randomId = "test" + (Math.floor(Math.random() * 3) + 1);
 
  alert(document.getElementById(randomId).value);
});

//css
input{
  border: 3px solid pink;
  background: lightgreen;
  color: red;
}

//HTML
<input id="test1" type="text">
<input id="test2" type="text">
<input id="test3" type="text">
<br>
<button id="kliknijmnie">Kliknij mnie</button>



//Tabelka - autoodswiezajaca sie
http://codepen.io/anon/pen/ALKwzk

//HTML
<div id="costam"></div>
<button id="przycisk">STOP, HAMMER TIME</button>
//CSS
img{
  height: 40px;
  width: 40px;
}
td{
  padding: 0;
  border: 0;
}
table{
  border: 0;
}

//JS
function generateTable() {
  let _table = "<table border=1 cellspacing=0 cellpading=0>";
  for (let i = 0; i < 3; i++) {
    _table += "<tr>";
    let _x = i%2;
    for (let j = 0; j < 3; j++) {
      let _temp = choosePicture();
      console.log(_temp);
        _table += "<td><img src='" + choosePicture() + "'></td>";
    }
    _table += "</tr>";
  }
  _table += "</table>";
  document.getElementById('costam').innerHTML = _table;
}

var imageList = [
    "http://i.ytimg.com/vi/DMoz8REspQE/maxresdefault.jpg", 
  "http://www.lazik.com.pl/uploads/pictures/cfae8c9a44698907d1c513a7a620753c88ddcb0e.jpg",
    "http://img.sadistic.pl/pics/327a87118d2f.jpg",
    "http://vignette1.wikia.nocookie.net/thelennyface/images/2/24/Lenny_face.png"
];

function choosePicture(){
  return imageList[Math.floor(Math.random() * imageList.length)];
}

generateTable();

var intervalID = setInterval(generateTable,1000);

document.getElementById('przycisk').addEventListener('click', function(){
  clearInterval(intervalID);
});

//OOP
var Person = function () {
  this.firstName = '';
  
  this.getFirstName = function(_prefix){
    return _prefix + " " +this.firstName;
  };
  this.setFirstName = function(firstName){
    this.firstName = firstName;
  }
};

var person1 = new Person();
var person2 = new Person();

person1.setFirstName('Alice');
person2.setFirstName('Bob');

// Show the firstName properties of the objects
console.log('person1: ' + person1.getFirstName('aaaaa')); // logs "person1 is Alice"
console.log('person2: ' + person2.getFirstName('bbbbbb')); // logs "person2 is Bob"



//OOP zaawansowane
// https://jsfiddle.net/4f22mbq6/