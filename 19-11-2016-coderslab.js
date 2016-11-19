// zadanie 07 inputy - 02
// wersja zaawansowana
// document.addEventListener("DOMContentLoaded", function(){
// 	var priceCheckboxes = document.querySelectorAll('[data-price]');
// 	var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
// 	var form = document.querySelector('form');
// 	var price = document.getElementById('price');
// 	var sum = 0;

// 	for(var i = 0; i < priceCheckboxes.length; i++){
// 		priceCheckboxes[i].addEventListener('change', priceChange);
// 	}

// 	function priceChange(){
// 		var _price = parseFloat(this.dataset.price);

// 		this.checked ? sum += _price : sum -= _price;
		
// 		// Wersja z IF/ ELSE
// 		// if(this.checked === true){
// 		// 	sum += _price;
// 		// }else{
// 		// 	sum -= _price;
// 		// }

// 		price.innerHTML = (Math.round(sum*100)/100) + " zł";
// 		allCheckboxes[allCheckboxes.length - 1].checked = false;
// 	}

// 	allCheckboxes[0].addEventListener('change', function(){
// 		var event = new CustomEvent("change");

// 		allCheckboxes[allCheckboxes.length - 1].checked = false;
// 		for(var i = 0; i < priceCheckboxes.length; i++){
// 			if(priceCheckboxes[i].checked === false){
// 				priceCheckboxes[i].checked = true;
// 				priceCheckboxes[i].dispatchEvent(event);
// 			}
// 		}
// 	})

// 	allCheckboxes[allCheckboxes.length - 1].addEventListener('change', function(){
// 		var event = new CustomEvent("change");

// 		allCheckboxes[0]. checked = false;
// 		for(var i = 0; i < priceCheckboxes.length; i++){
// 			if(priceCheckboxes[i].checked === true){
// 				priceCheckboxes[i].checked = false;
// 				priceCheckboxes[i].dispatchEvent(event);
// 			}
// 		}
// 	});

// 	form.addEventListener('submit', function(event){
// 		event.preventDefault();
// 		alert(price.innerHTML);
// 	});
// });

// zadanie 07 inputy - 02
// wersja prostsza
document.addEventListener("DOMContentLoaded", function(){
	var priceCheckboxes = document.querySelectorAll('[data-price]');
	var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
	var form = document.querySelector('form');
	var price = document.getElementById('price');

	for(var i = 0; i < priceCheckboxes.length; i++){
		priceCheckboxes[i].addEventListener('change', priceChange);
	}

	function priceChange(){
		var sum = 0;

		for(var i = 0; i < priceCheckboxes.length; i++){
			if(priceCheckboxes[i].checked === true){
				sum += parseFloat(priceCheckboxes[i].dataset.price);
				allCheckboxes[allCheckboxes.length - 1].checked = false;
			}
		}

		price.innerHTML = (Math.round(sum * 100)/100) + " zł";
	}

	allCheckboxes[0].addEventListener('change', function(){
		allCheckboxes[allCheckboxes.length - 1].checked = false;
		
		for(var i = 0; i < priceCheckboxes.length; i++){
			priceCheckboxes[i].checked = true;
		}

		priceChange();
	})

	allCheckboxes[allCheckboxes.length - 1].addEventListener('change', function(){
		allCheckboxes[0].checked = false;

		for(var i = 0; i < priceCheckboxes.length; i++){
			priceCheckboxes[i].checked = false;
		}

		priceChange();
	});

	form.addEventListener('submit', function(event){
		event.preventDefault();
		
		alert(price.innerHTML);
	});
});

// zadanie 07 inputy - 06
document.addEventListener("DOMContentLoaded", function(){
	var card = document.getElementById('card');
	var form = document.querySelector('form');

	//Dodajemy eventy spradzajacy nazwe karty i walidacje
	card.addEventListener('keyup', function(){
		var cardName = findCardName(this.value);
		var isValidated = validateCard(cardName, this.value.length);
		
		console.log(cardName, isValidated);
	});

	// walidujemy karte
	function validateCard(cardName, numberLength){
		if (cardName === "Visa" && ( numberLength >= 13 && numberLength <= 16)){
			return true;
		}

		if (cardName === "Mastercard" && numberLength === 16){
			return true;
		}

		if (cardName === "AmericanExpress" && numberLength === 15){
			return true;
		}

		return false;
	}

	// szukamy nazwy karty
	function findCardName(inputValue){
		if (inputValue.length < 1) {
			return false;
		}

		var _firstChar = parseInt(inputValue[0], 10);
		var _secondChar = parseInt(inputValue[1], 10);

		if (_firstChar === 4){
			return "Visa";
		}

		if (_firstChar === 5){
			return "Mastercard";
		}

		if (_firstChar === 3 && (_secondChar === 4 || _secondChar === 7)){
			return "AmericanExpress";
		}

		return false;
	}

	form.addEventListener('submit', function(event){
		var cardName = findCardName(card.value);
		var isValidated = validateCard(cardName, card.value.length);

		if(cardName === false || isValidated === false){
			//niepozwalamy wyslac formularza
			event.preventDefault();
		}
	});
});