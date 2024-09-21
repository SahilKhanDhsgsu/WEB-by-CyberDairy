document.addEventListener("DOMContentLoaded", (e) => {
	addName(document.querySelector("#name"));

	SelectOption(document.querySelector("select"));

	let tot = document.querySelector("#tot");

	let totalWatchtime = {};
	let totalRating = {};
	let Count = {};

	let TableBody = document.querySelector("#m-table > tbody");

	let MoviesData = JSON.parse(localStorage.getItem("MoviesData")) ?? [];

	JSON.parse(localStorage.getItem("catagoriesData")).forEach((cat) => {
		totalWatchtime[cat] = 0;
		totalRating[cat] = 0;
		Count[cat] = 0;
	});

	MoviesData.map((MObj) => {
		let tr = document.createElement("tr");
		tr.innerHTML = `<td>${MObj.name}</td><td>${MObj.catagory}</td><td>${MObj.date}</td><td>${MObj.time}</td><td>${MObj.rating}</td>`;
		TableBody.append(tr);

		totalWatchtime[MObj.catagory] += parseFloat(MObj.time);
		totalRating[MObj.catagory] += parseFloat(MObj.rating);
		// console.log(totalWatchtime, totalRating);
		Count[MObj.catagory]++;
	});

	function addName(place) {
		place.textContent = "👦🏻 Hi " + localStorage.getItem("userName");
	}

	function SelectOption(place) {
		let output = document.querySelector("#tot");

		let CatagoriesData =
			JSON.parse(localStorage.getItem("catagoriesData")) ?? [];
		CatagoriesData.forEach((element) => {
			let option = document.createElement("option");
			option.value = element;
			option.textContent = element;
			place.append(option);
		});

		place.addEventListener("change", (e) => {
			let val = place.value;

			console.log(totalWatchtime[val]);
			console.log(totalRating[val]);

			output.children[0].lastElementChild.textContent =
				totalWatchtime[val];
			output.children[1].lastElementChild.textContent = (
				totalRating[val] / Count[val]
			).toFixed(2);

			// output.style.display = "flex"
		});
	}
});
