var resultado = 0;
var num1 = "";
var num2 = "";
var op ="";

//declarar varieables a los numeros y operadores
var screen = document.getElementById("screen");

var reset = document.getElementById("reset");
var porciento = document.getElementById("porciento");
var div = document.getElementById("div");

var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var multi = document.getElementById("multi");

var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var resta = document.getElementById("resta");

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var suma = document.getElementById("suma");

var punto = document.getElementById("punto");
var zero = document.getElementById("zero");
var expo = document.getElementById("expo");
var igual = document.getElementById("igual");

//declarar los onclick
reset.onclick = function(){
	reset();
}
porciento.onclick = function(){
	op = "%";
}
div.onclick = function(){
	op = "/";
}

seven.onclick = function(){
	addNum(7);
}
eight.onclick = function(){
	addNum(8);
}
nine.onclick = function(){
	addNum(9);
}
multi.onclick = function(){
	op = "*";
}

four.onclick = function(){
	addNum(4);
}
five.onclick = function(){
	addNum(5);
}
six.onclick = function(){
	addNum(6);
}
resta.onclick = function(){
	op = "-"
}

one.onclick = function(){
	addNum(1);
}
two.onclick = function(){
	addNum(2);
}
three.onclick = function(){
	addNum(3);
}
suma.onclick = function(){
	op = "+";
}

punto.onclick = function(){

}
zero.onclick = function(){
	addNum(0);
}
expo.onclick = function(){
	op ="**";
}
igual.onclick = function(){
	console.log(num1, op, num2);
	switch(op){
		case "/":
			resultado = parseFloat(num1) / parseFloat(num2);
			break;
		case "*":
			resultado = parseFloat(num1) * parseFloat(num2);
			break;
		case "-":
			resultado = parseFloat(num1) - parseFloat(num2);
			break;
		case "+":
			resultado = parseFloat(num1) + parseFloat(num2);
			break;
		case "**":
			resultado = parseFloat(num1) ** parseFloat(num2);
			break;
	}

	console.log(resultado);
	screen.textContent = resultado;
}


function addNum(x){
	if (op == "") {
		num1 = num1 + x;
		console.log("num1", num1);
		screen.textContent = num1;
	}
	else{
		num2 = num2 + x;
		console.log("num2", num2);
		screen.textContent = num2;
	}
}

