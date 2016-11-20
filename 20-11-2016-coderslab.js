https://jsperf.com/

http://caniuse.com/

//warsztat 05
/*
 <span class="tooltipText">Text tooltipa</span>
 */

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