/* index.html tag along javascript */


//global variables

//check that page is loaded
window.onload = function () {
	//perform stuff
	//local variables
	var msgBox = document.getElementById('code');
	var pBtn = document.getElementById('post');

	msgBox.style.borderRadius = "20px";

	pBtn.onclick = function() {
		var postMsg = document.getElementById('output');
		var msg = document.getElementById('code').value;

		//postMsg.innerHTML = msg;
		var out = document.createElement("div");
		out.classList.add("comment");
		out.innerHTML = msg;

		postMsg.appendChild(out);


	}
}

//perform stuff outside of care if page loads
