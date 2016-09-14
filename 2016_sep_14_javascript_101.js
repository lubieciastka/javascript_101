//prototype - prosty case
function Person(name, surname, eyecolor, height) {
  this.name = name;
  this.surname = surname;
  this.eyecolor = eyecolor;
  this.height = height;
}

Person.prototype.printMyName = function(prefix = "vel") {
  console.log(this.name + " " + prefix + " " + this.surname);
}
  
var kuba = new Person("Jakub", "Testowy", "niebieski", 205);
var jan = new Person("jan", "legia", "legia", 1916);
kuba.printMyName("de");
jan.printMyName();

////////////////////////////////////

var zmiennaJakas = {
	name: "kuba",
  surname: "legia",
  printMyName : function(){
  	console.log( this.name + " " +this.surname);
  }
};

zmiennaJakas.printMyName();


///////////////
//prototype array
/////////////
// html
<div id="myTable"></div>

// css
td{
  background-color: red;
  border: 10px solid pink;
  color: white;
}
table{
  border: 0;
}
// JS

function _generateArray( szerokosc, wysokosc){
  let _table = [];
  for(let i = 0; i < wysokosc; i++){
    let _row = [];
    for(let j = 0; j < szerokosc; j++){
      _row.push(i + " " + j);
    }
    _table.push(_row);
  }
  return _table;
}

Array.prototype._generateTableMarkup = function(_myId){
  let _str = '<table border="1">';
  for(let i = 0; i < this.length; i++){
    _str += "<tr>";
    let _row = this[i];
    for(let j = 0; j < _row.length; j++){
      _str += "<td>" + _row[j] + "</td>";
    }
    _str += "</tr>";
  } 
  _str += "</table>";
  
  document.getElementById(_myId).innerHTML = _str;
}

let _wygenerowanyArray =_generateArray(3,4);

_wygenerowanyArray._generateTableMarkup('myTable');


// Number prototype
Number.prototype.plus = function (n) {
    return this + n;
};
Number.prototype.minus = function (n) {
    return this - n;
};
Number.prototype.multiply = function (n) {
		return this * n;
}
var a = (5).plus(3).minus(6).multiply(4);

console.log(a);


