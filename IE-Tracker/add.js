document.querySelector("#submit").addEventListener("click", (e) => {
	e.preventDefault();

	let iename = document.querySelector("#iename").value;
	let ieamount = document.querySelector("#ieamount").value;
	let iecatagory = document.querySelector("#iecatagory").value;

	document.querySelector("#iename").value = "";
	document.querySelector("#ieamount").value = "";
	document.querySelector("#iecatagory").value = "S";

	if (iecatagory == "S") {
		alert("Please Select Income or Expance Catagory");
		return 0;
	}

	let cat = JSON.parse(localStorage.getItem("type")) ?? [];
	cat.push({ name: iename, amount: ieamount, catagory: iecatagory });
	localStorage.setItem("type", JSON.stringify(cat));

	// console.log(iename, iecatagory, cat);

	output(cat);
});

function output(data) {
	let total = 0;
	let out = document.querySelector("#out");
	console.log(data);

	out.innerHTML = "";
	for (let i = 0; i < data.length; i++) {
		if (data[i].catagory == "I") {
			out.innerHTML += `<li class="flex justify-between p-2 my-2 bg-green-200 rounded-lg"><span>${String(
				data[i].name
			)}</span> <span>+ ${String(data[i].amount)}₹</span></li>`;

			total += parseInt(data[i].amount);
		} else {
			out.innerHTML += `<li class="flex justify-between my-2 p-2 bg-red-200 rounded-lg"><span>${String(
				data[i].name
			)}</span> <span>- ${String(data[i].amount)}₹</span></li>`;

			total -= parseInt(data[i].amount);
		}
	}

	if (total >= 0) {
		out.innerHTML += `<hr> <li class="flex text-2xl font-semibold justify-between my-2 p-2 bg-gray-200  rounded-lg"><span>Total :</span><span class='text-green-500'>+${total}₹</span></li>`;
	} else {
		out.innerHTML += `<hr> <li class="flex  text-2xl font-semibold justify-between my-2 p-2 bg-gray-200 rounded-lg"><span>Total :</span><span class='text-red-500'>${total}₹</span></li>`;
	}
}

output(JSON.parse(localStorage.getItem("type")));
