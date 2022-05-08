// document.oncontextmenu = function () {
// 	return false;
// }
$(document).ready(function () {
	var isExpanded = false;
	includeHTML();
	$(".btn-expand").click(function () {
		if (!isExpanded) {
			$("#js-questions").css("height", "auto");
			$(".btn-expand").html("Collapse");
		} else {
			$("#js-questions").css("height", "300px");
			$(".btn-expand").html("Expand");
		}
		isExpanded = !isExpanded;
	});
});

function findNoParse() {
	$('pre').each(function () {
		if ($(this).attr('tagchecked') != 'true') { //checks if already changed tag
			$(this).text($(this).html()); //makes the html into plaintext
			$(this).attr('tagchecked', 'true'); //says that tag has been checked
		}
	});
}


function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	elmnt = document.getElementById("js-questions");
	file = elmnt.getAttribute("w3-include-html");
	if (file) {
		/*make an HTTP request using the attribute value as the file name:*/
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState == 4) {
				if (this.status == 200) {
					elmnt.innerHTML = this.responseText;
					findNoParse();
				}
				if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
				/*remove the attribute, and call this function once more:*/
				elmnt.removeAttribute("w3-include-html");
				includeHTML();
			}
		}
		xhttp.open("GET", file, true);
		xhttp.send();
		return;
	}
};