// document.oncontextmenu = function () {
// 	return false;
// }
$(document).ready(function () {
	$(".technology-block").click(function(){
		let page_url = $(this).attr("data-page");
		window.location.href = page_url;
	});
});