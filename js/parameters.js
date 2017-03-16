var num_default = 8;
var size_container = 600;
var border_width = 1;
var gridSetup = function(n_element) {
	for (var i = 0; i < n_element**2; i++) {
		$("#container").append('<div class="gridelement"></div>');
	}
	var size_element = (size_container/n_element)-2*border_width;
	$(".gridelement").height(size_element+"px");
	$(".gridelement").width(size_element+"px");
	$(".gridelement").hover(function() {
		$(this).addClass("highlight");
	});
}






