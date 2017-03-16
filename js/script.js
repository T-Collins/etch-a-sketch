$(document).ready(function() {
	var num_element = num_default; 
	gridSetup(num_element);
	$('button').click(function() {
		$('#container').removeClass("gridelement");
		var num_element = parseInt(prompt("Please enter the desired size of grid", "8"));
		if (isNaN(num_element)) {
			alert("Not a number");
		}
		else {
			var size_element = size_container/num_element; 
			var border_width = 1;
			var size_element = size_element - 2*border_width;
			$(document).ready(function() {
				$('#container').empty();
				gridSetup(num_element);
			});
		}
	});
});
