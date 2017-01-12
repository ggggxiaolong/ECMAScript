function* fibs() {
	var a = 0;
	var b = 1;
	while (true) {
		yield a;
		[a, b] = [b, a + b];
		console.log('a = ' + a);
		console.log('b = ' + b);
	}
}

var [first, second, third, fourth, fifth, sizth] = fibs();