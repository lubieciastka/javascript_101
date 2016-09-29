https://jsfiddle.net/jch/f6qfprnu/1/


http://bit.ly/2cBBrUu
<img src="" data-my-img="adres kolejnego obrazka">


<img src="https://www.medianauka.pl/biologia/grafika/plazy/big/ropucha-szara.jpg" data-my-img="https://consequenceofsound.files.wordpress.com/2016/05/prince-doctor-investigation-visit-schulengerg.png">

setTimeout(function(){
  let nowyObrazek = $('[data-my-img]').attr('data-my-img');
  
  $('[data-my-img]').attr('src', nowyObrazek);
},1000);


http://codepen.io/anon/pen/ALrgYW

<select data-my-select>
  <option value="kon">Koń</option>
  <option value="krowa">Krowa</option>
  <option value="pies">Pies</option>
</select>

var _myInterval = setInterval(function() {
  let wybrane = $('[data-my-select]').val();
  console.log(wybrane);
  if(wybrane === "krowa"){
    clearInterval(_myInterval);
  }
}, 1000);

//http://codepen.io/anon/pen/JRJaZk

//html
<select class="zwierzyniec">
  <option value="zaba">Żaba</option>
  <option value="prince">Książe</option>
  <option value="polo">Snickers</option>
</select>
<hr>
<div class="custom-select-wrapper">
  <div class="custom-select-label">
    <span class="label-text">Wybrany element</span>
    <span class="label-icon">v</span>
  </div>
  <ul class="hidden">
    <li data-value="zaba">Żaba</li>
    <li data-value="prince">Książe</li>
    <li data-value="polo">Snickers</li>
  </ul>
</div>

//css
.custom-select-wrapper {
  background: #F5F5FF;
  border: 3px solid #E6CDFF;
  width: 200px;
}

.custom-select-label {
  padding: 5px 10px;
  background: #D36FFF;
  position: relative;
  cursor: pointer;
}

.custom-select-label span.label-icon {
  position: absolute;
  display: block;
  right: 10px;
  top: 5px;
  background: yellow;
  width: 20px;
  height: 20px;
  text-align: center;
  font-weight: bold;
}
.custom-select-wrapper ul{
  list-style-type: none;
  float: left;
  width: 100%;
  background: green;
  margin: 0;
  padding: 0;
}

.custom-select-wrapper ul li{
  padding: 5px 10px;
  border-bottom: 1px solid #f00;
  cursor: pointer;
}

.custom-select-wrapper ul li:hover{
  background: lightgreen;
  color: #333;
  font-weight: bold;
}

.hidden{
  display: none;
  visibility: hidden;
}


//js - jquery
$('.custom-select-label').on('click', function(){
  $('.custom-select-wrapper ul').toggleClass('hidden');
});

$('.custom-select-wrapper li').on('click', function(){
  let _temp = $(this).html();
  
  $('.zwierzyniec').val($(this).attr('data-value'));
  $('.custom-select-label .label-text').html(_temp);
  $('.custom-select-wrapper ul').toggleClass('hidden');
});