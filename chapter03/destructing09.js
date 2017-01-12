var jsonData = {
	id: 42,
	status: "ok",
	data: [867, 5309]
};

let {id, status, data:number} = jsonData;

console.log(id, status, number);