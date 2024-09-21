let input = document.querySelector("#name");
let check = document.querySelector("#check");

document.querySelector("#button").addEventListener("click", (e) => {
	if (input.value == "") {
		alert("Please Enter Your Name");
		return;
	}

	if (check.checked == true) {
		localStorage.setItem(
			"catagoriesData",
			JSON.stringify([
				"Action",
				"Comedy",
				"Horror",
				"Sci-fi",
				"Christopher Nolan",
				"Anime",
			])
		);
	}

	localStorage.setItem("userName", input.value);
});
