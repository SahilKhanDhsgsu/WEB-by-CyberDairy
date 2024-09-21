document.addEventListener("DOMContentLoaded", (e) => {
	let liIndex = 0;
	let categoryListBox = document.querySelector("#cat-list");
	let input = document.querySelector("#cat-name");
	addName(document.querySelector("#name"));

	AfterLoaded();

	document.querySelector("button").addEventListener("click", (e) => {
		let val = input.value;

		if (!val) {
			alert("Enter Some Catagory");
			return;
		}

		let CatagoriesData =
			JSON.parse(localStorage.getItem("catagoriesData")) ?? [];
		CatagoriesData.push(val);
		localStorage.setItem("catagoriesData", JSON.stringify(CatagoriesData));

		AppendLI(val);

		input.value = "";
	});

	function AfterLoaded() {
		let CatagoriesData =
			JSON.parse(localStorage.getItem("catagoriesData")) ?? [];

		CatagoriesData.forEach((cat) => {
			AppendLI(cat);
		});
	}

	function AppendLI(data) {
		let li = document.createElement("li");
		li.setAttribute("class", "w-full");
		li.id = liIndex;
		li.textContent = data;

		let del = document.createElement("button");
		del.setAttribute(
			"class",
			"ms-4 bg-red-500 rounded-full p-1 px-2 text-lg  max-md:text-sm hover:bg-red-600 float-right"
		);
		del.textContent = "Delete";
		del.addEventListener("click", (e) => removeli(li));
		li.appendChild(del);

		categoryListBox.appendChild(li);

		liIndex++;
	}

	function removeli(li) {
		// console.log(CatagoriesData, index);

		let CatagoriesData =
			JSON.parse(localStorage.getItem("catagoriesData")) ?? [];
		CatagoriesData.splice(li.id, 1);
		localStorage.setItem("catagoriesData", JSON.stringify(CatagoriesData));

		li.remove();
	}

	function addName(place) {
		place.textContent = "👦🏻 Hi " + localStorage.getItem("userName");
	}
});
