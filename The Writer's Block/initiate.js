// initiate.js

$(document).ready(function() {
	//jQuery functionality

	var target = $("#writing").val();
	//bold button
	$("#bold").click(function() {
		if (target.style.fontWeight == "normal") {
			target.style.fontWeight = "bolder";
		} else {
			target.style.fontWeight = "normal";
		}
	});

	//italic button
	$("#italic").click(function() {
		alert(target);
	});
	
	//Submit button
	$("#submit").click(function() {
		var text = $("#writing").val();
		$("#submission").html(text);
	});
});