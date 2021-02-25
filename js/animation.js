var arr = document.getElementsByTagName('fieldset');
for(var i = 0; i < arr.length; i++){
	arr[i].style.display = 'none';
}
arr[0].style.display = 'block';
function f(e){
	"use strict";
	for(var j = 0; j < arr.length; j++){
		if(arr[j].getElementsByTagName('legend')[0].innerHTML == e.innerHTML){
			arr[j].style.display = 'block';
		}
		else{
			arr[j].style.display = 'none';
		}
	}
}