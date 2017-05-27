// initiate.js

$(document).ready(function() {
	//jQuery functionality
	
	//Submit button
	$("#submit").click(function() {
		var text = $("#writing").val();
		$("#submission").html(text);
	});
});