$(function () {
	$('#screenshot').click(function () {
		console.log('click');
		$(document).html2canvas();
	})
})