let input = document.querySelector("#textarea"); // input data
// if enter press storedata() call
input.addEventListener("keypress", (e) => {
	if (e.key === "Enter") storeData();
});

let output = document.querySelector("#output"); // output list
let tickcountplace = document.querySelector("#comp"); // count place

let store = document.querySelector("#store");
store.addEventListener("click", storeData);

let get = document.querySelector("#get");
get.addEventListener("click", (e) => updatetick);

// updatetick();

let tasks = [];
let ticks = [];
let complete = 0;

let i = -1;

function storeData() {
	i++;
	let temp = input.value;

	if (!temp) return "";

	input.value = "";
	tasks.push(temp);

	getData();
}

function del(li, index) {
	tasks.splice(index, 1);
	ticks.splice(index, 1);
	i--

	output.removeChild(li);

	console.log("In del", index, output);

	updatetick();
}

function tickon(icon, index) {
	let liElem = icon.nextElementSibling

	if (ticks[index]) {
		ticks[index] = false;
		icon.style.background = "#ffffff";

		liElem.style.textDecoration = "none";
	} else {
		ticks[index] = true;
		icon.style.background = "#44ff44";
		icon.innerHTML = " &#10004;";

		liElem.style.textDecoration = "line-through";
	}
	console.log("tickon", index, i);

	updatetick();
}

// only for update update count
function updatetick() {
	complete = 0;
	console.log(output.querySelectorAll("li"));

	output.querySelectorAll("li").forEach((li, num) => {
		if (ticks[num]) {
			complete++;
			console.log("++", complete, num);
			num++;
		}
	});
	console.log("update tick", "complete", complete, tasks);

	tickcountplace.textContent = complete ?? "👎🏻";
}

// final work to create branches
function getData() {
	let myli = document.createElement("li");
	myli.setAttribute(
		"class",
		"bg-white text-start px-4 w-full py-1 shadow-2xl shadow-white"
	); // parent element

	let mytick = document.createElement("i");
	mytick.setAttribute(
		"class",
		"me-2 px-1 pe-2 text-white border-black border-2 font-bold"
	);
	mytick.innerHTML = "&#10004;"; // ✅

	// let myindex = document.createElement("span");
	// myindex.setAttribute("class", "me-4");
	// myindex.innerHTML = `${i + 1}.`; // 1.

	let mytask = document.createElement("span");
	mytask.setAttribute("class", "me-4 text-black");
	mytask.innerHTML = tasks[i]; // task

	let mytrashButton = document.createElement("img");
	mytrashButton.setAttribute("class", "w-6 inline float-end");
	mytrashButton.src = "trash.svg";
	mytrashButton.setAttribute("id", "trash"); // 🗑️🗑️

	myli.appendChild(mytick);
	// myli.appendChild(myindex);
	myli.appendChild(mytask);
	myli.appendChild(mytrashButton);

	output.appendChild(myli);

	mytick.addEventListener("click", (e) =>
		tickon(mytick, tasks.indexOf(mytask.innerHTML))
	);
	mytrashButton.addEventListener("click", (e) =>
		del(myli, tasks.indexOf(mytask.innerHTML))
	);
}


// ****** Demo
((i) => {input.value = i; storeData()})("demo")