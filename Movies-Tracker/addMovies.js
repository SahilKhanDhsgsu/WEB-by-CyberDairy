document.addEventListener("DOMContentLoaded", (e) => {
	let liIndex = 0;

	let Mname = document.querySelector("#movies-name");
	let Mcat = document.querySelector("#movies-cat");
	let Mdate = document.querySelector("#movies-date");
	let Mtime = document.querySelector("#movies-time");
	let Mrating = document.querySelector("#movies-rate");

	addName(document.querySelector("#name"));

	AfterLoaded();

	document.querySelector("button").addEventListener("click", (e) => {
		console.log(
			!!Mname.value,
			!!Mcat.value,
			!!Mdate.value,
			!!Mtime.value,
			!!Mrating.value
		);

		if (
			!Mname.value ||
			!Mcat.value ||
			!Mtime.value ||
			!Mdate.value ||
			!Mrating.value
		) {
			alert("Please Enter Full Details 😡");
			return;
		}
		if (Mrating.value > 5 || Mrating.value < 0) {
			alert("Please Enter Valid Rating 😡");
			return;
		}
		if (Mtime.value < 0) {
			alert("Please Enter Valid Time 😡");
			return;
		}

		let val = {
			name: Mname.value,
			catagory: Mcat.value,
			date: Mdate.value,
			time: Mtime.value,
			rating: Mrating.value,
		};

		let MoviesData = JSON.parse(localStorage.getItem("MoviesData")) ?? [];
		MoviesData.push(val);
		localStorage.setItem("MoviesData", JSON.stringify(MoviesData));

		// console.log(MoviesData);
		alert("Movie Added Successfully");

		document.querySelector("form").reset();
	});

	function AfterLoaded() {
		let CatagoriesData =
			JSON.parse(localStorage.getItem("catagoriesData")) ?? [];

		CatagoriesData.forEach((cat) => {
			AppendOption(cat);
		});
	}

	function AppendOption(data) {
		let op = document.createElement("option");
		op.value = data;
		op.textContent = data;

		Mcat.appendChild(op);
	}

	function addName(place) {
		place.textContent = "👦🏻 Hi " + localStorage.getItem("userName");
	}
});
