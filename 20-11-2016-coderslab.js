https://jsperf.com/

http://caniuse.com/

//warsztat 04 - menu
document.addEventListener("DOMContentLoaded", function(){
	var menuFirstLevelElements = document.querySelectorAll('.nav>ul>li');
	
	for( var i = 0; i < menuFirstLevelElements.length; i++){
		menuFirstLevelElements[i].addEventListener('mouseover', mouseoverMenuElement);
		menuFirstLevelElements[i].addEventListener('mouseout', mouseoutMenuElement);
	}
	
	function mouseoutMenuElement(){
		var subList = this.querySelector('ul');
		
		if (subList !== null) {
			subList.style.display = "none";
		}
	}

	function mouseoverMenuElement(){
		var subList = this.querySelector('ul');
		
		if (subList !== null) {
			subList.style.display = "inline-block";
			var subListLi = subList.children;

			for(var i = 0; i < subListLi.length; i++){
				setTimeout(function(){
					console.log(subListLi[i])	
				}, i * 100);
			}
		}
	}
});

//warsztat 05 - tooltip
document.addEventListener("DOMContentLoaded", function(){

	var tooltips = document.getElementsByClassName('tooltip');

	for( var i = 0; i < tooltips.length; i++){
		tooltips[i].addEventListener('mouseover', mouseoverTooltipElement);
		tooltips[i].addEventListener('mouseout', mouseoutTooltipElement);
	}
	
	function mouseoutTooltipElement(){
		console.log(this);
		this.removeChild(this.firstElementChild);
		//console.log(this.dataset.text);
	}

	function mouseoverTooltipElement(){
		var _tooltip = document.createElement('span');

		_tooltip.classList.add('tooltipText');
		_tooltip.innerHTML = this.dataset.text;

		this.appendChild(_tooltip);
	}
});

//warsztat 06 - todolist
document.addEventListener("DOMContentLoaded", function(){
	var taskList = document.getElementById('taskList');
	var addTaskButton = document.getElementById('addTaskButton');
	var taskInput = document.getElementById('taskInput');
	var removeFinishedTasksButton = document.getElementById('removeFinishedTasksButton');
	var counter = document.getElementById('counter');

	addTaskButton.addEventListener('click', addTask);
	removeFinishedTasksButton.addEventListener('click', removeFinished);

	function removeFinished () {
		var elementsToRemove = document.querySelectorAll('.done');
		
		for( var i = 0; i < elementsToRemove.length; i++){
			elementsToRemove[i].parentElement.removeChild(elementsToRemove[i]);
		}
	}

	function addTask () {
		if (taskInput.value.length <= 5 || taskInput.value.length >= 100){
			console.log('za malo lub za duzo');
			return;
		}

		var newTask = document.createElement('li');
		var h1 = document.createElement('h1');
		var buttonDelete = document.createElement('button');
		var buttonComplete = document.createElement('button');

		h1.innerHTML = taskInput.value;
		buttonDelete.innerHTML = "Delete";
		buttonComplete.innerHTML = "Complete";

		newTask.appendChild(h1);
		newTask.appendChild(buttonDelete);
		newTask.appendChild(buttonComplete);
		taskList.appendChild(newTask);

		taskInput.value = '';

		buttonComplete.addEventListener('click', onButtonComplete);
		buttonDelete.addEventListener('click', onButtonDelete);

		findDone();
	}

	function onButtonComplete () {
		this.parentElement.classList.toggle('done');
		findDone();
	}

	function onButtonDelete () {
		this.parentElement.parentElement.removeChild(this.parentElement);
		findDone();
	}

	function findDone () {
		var notDone = document.querySelectorAll('li:not(.done)');
		counter.innerHTML = notDone.length;
	}
});


//// saper
document.addEventListener("DOMContentLoaded", function(){
	var generate = document.getElementById('generate');
	var saper = document.getElementById('saper');
	var saperArray = [];

	generate.addEventListener('click', generateSaperArray);

	function generateSaperArray () {
		for ( var i = 0; i < 10; i++ ){
			var tempArray = [];

			for (var j = 0; j < 10; j++){
				var tempValue = Math.random() * 100 < 20;
				tempArray.push(tempValue ? 1 : 0);
			}

			saperArray.push(tempArray);
		}

		generateSaperTable();
	}

	function generateSaperTable () {
		var _table = document.createElement('table');

		for ( var i = 0; i < 10; i++ ){
			var _tr = document.createElement('tr');

			for (var j = 0; j < 10; j++){
				var _td = document.createElement('td');
				_td.innerHTML = saperArray[i][j];
				_tr.appendChild(_td);
			}
			_table.appendChild(_tr);
		}
		saper.appendChild(_table);
	}
});

//Kolejne kroki dla Sapera:
// Nie wyswietla sie zero/ jeden tylko kafelek (div/ albo td) - pamietajac o CSS'ach (szary z efektem emboss)
// dla kafelka dodajemy event click - rozrozniajac czy to jest lewy click czy prawy click
// lewy click - sprawdzamy czy klikniety kafelek byl mina czy nie - jezeli jest mina - przerywamy gre - jezeli nie byl mina to sprawdzamy czy obok sa miny i odkrywamy puste kafelki i pokazujemy ile min jest do okola
// prawy click - oznaczamy jako mina
// dodatkowo - musi byc funckja ktora sprawdza czy zostawilismy tylko miny ( kiedy ma byc wywolywana ?)
// ladne style
// animacje CSS'owe
// mozliwosc restartu gry
// mozliwosc wyboru wielkosci planszy
