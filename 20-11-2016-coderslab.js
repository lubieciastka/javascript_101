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

	addTaskButton.addEventListener('click', addTask);

	function addTask () {
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

		buttonComplete.addEventListener('click', onButtonComplete);
	}

	function onButtonComplete () {
		this.parentElement.classList.toggle('done');
	}
});