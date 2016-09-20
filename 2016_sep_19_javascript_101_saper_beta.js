http://codepen.io/anon/pen/mAAxKJ

//HTML
<div id="saper"></div>
<br>
<div id="message-error">Boooooooom!!!!</div>

//CSS
img{
  width: 21px;
  height: 21px;
  padding: 2px;
}
td{
  width: 25px;
  height: 25px;
  border: 1px solid #000;
  background: #ABB2B9;
}
td.cell{
  background: yellow;
}
td.bomb{
  background: url('https://image.freepik.com/darmowe-ikony/bomba_318-48367.png') no-repeat;
  background-size: 20px 20px;
}

#message-error{
  display: none;
  border: 3px solid pink;
  background: red;
  color: #fff;
  padding: 10px;
}

//JS

var saperImages = {
  images: [],
  init: function() {
    this.images['bomba'] = '<img src="https://image.freepik.com/darmowe-ikony/bomba_318-48367.png">';
    this.images['empty'] = '&nbsp;';
  },
  getSingleCell(element) {
    if (element === "x") {
      return "<td class='cell bomb'>" + this.images['empty'] + "</td>";
   }
    return "<td class='cell'>" + this.images['empty'] + "</td>";
  }
};
var errorManager = {
  showError: function(){
      document.getElementById('message-error').style.display = "block";
  }, 
  hideError: function(){
      document.getElementById('message-error').style.display = "none";
  }
};

function _generateArray(szerokosc, wysokosc) {
  let _table = [];
  for (let i = 0; i < wysokosc; i++) {
    let _row = [];
    for (let j = 0; j < szerokosc; j++) {
      _row.push(getRandomElement());
    }
    _table.push(_row);
  }
  return _table;
}
function getRandomElement() {
  return Math.random() * 100 > 70 ? "x" : "o";
}
function bindEvents(){
  let cels = document.getElementsByClassName('cell');
  for(let i = 0; i < cels.length; i++){
    cels[i].addEventListener('click', function(event){
      if(event.srcElement.className.indexOf('bomb') < 0){
        console.log('niebomba');
      }else{
        console.log('bomba');
        errorManager.showError();
      }
    });  
    cels[i].addEventListener('dragend', function(event){
      console.log(event);
      // errorManager.showError();
      console.log('drag');
    });
  }
}
function initSaper(){
  saperImages.init();
  let _wygenerowanyArray = _generateArray(6, 6);
  _wygenerowanyArray._generateTableMarkup('saper');
  bindEvents();
}

Array.prototype._generateTableMarkup = function(_myId) {
  let _str = '<table cellspacing=0 cellpadding=0 border="1">';
  for (let i = 0; i < this.length; i++) {
    _str += "<tr>";
    let _row = this[i];
    for (let j = 0; j < _row.length; j++) {
      _str += saperImages.getSingleCell(_row[j]);
    }
    _str += "</tr>";
  }
  _str += "</table>";

  document.getElementById(_myId).innerHTML = _str;
}

initSaper();