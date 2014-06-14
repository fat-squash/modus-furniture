$(function(){
	addListeners();
})

function addListeners() {
	$(".menu_button").click(function() {
		setButtons($(this));
	});
}

function setButtons($element) {
	console.log($element.data("id"));
}