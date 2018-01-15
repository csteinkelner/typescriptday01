let primary: Array<string> = ['Burger', 'Wrap', 'Toast'];
let side: Array<string> = ['fries', 'rice'];
let drinks: Array<string> = ['cola','soda'];
let deserts: Array<string> = ['cake'];
let salads: Array<string> = ['Cizar Salad'];

let Pprice: Array<number> = [6.30,4.60,3.50];
let Sprice: Array<number> =[2.30,6.30];
let Dprice: Array<number> =[4.60,3.50];
let Deprice: Array<number> =[2.30];
let Saprice: Array<number> =[2.30];


let headline: Array<string> = ['Primary dishes','Drinks','Salads', 'Side dishes','Deserts'];

const [hl1,hl2,hl3,hl4,hl5] = headline;

// for (let i = 0; i < menu.length; i++) {
// 	var newp = document.createElement("p");
// 	newp.appendChild(document.createTextNode(menu[i]));
// 	document.body.appendChild(newp);
// }


// menu__________________________________________________________________
for (let i = 0; i < primary.length; i++) {

	var write =  primary[i] +"....................."+ Pprice[i] + " Euro";

	var newp = document.createElement('p')
	newp.appendChild(document.createTextNode(write));
	var div = document.getElementById("first")
	div.appendChild(newp);
}
// document.body.innerHTML += cart();
document.getElementById('headl').innerHTML += hl1;


for (let i = 0; i < side.length; i++) {

	var write =  side[i] +"....................."+ Sprice[i] + " Euro";

	var newp = document.createElement('p')
	newp.appendChild(document.createTextNode(write));
	var div = document.getElementById("second")
	div.appendChild(newp);
}
// document.body.innerHTML += cart();
document.getElementById('headl2').innerHTML += hl4;

for (let i = 0; i < drinks.length; i++) {

	var write =  drinks[i] +"....................."+ Dprice[i] + " Euro";

	var newp = document.createElement('p')
	newp.appendChild(document.createTextNode(write));
	var div = document.getElementById("third")
	div.appendChild(newp);
}
document.getElementById('headl3').innerHTML += hl2;

for (let i = 0; i < salads.length; i++) {

	var write =  salads[i] +"....................."+ Saprice[i] + " Euro";

	var newp = document.createElement('p')
	newp.appendChild(document.createTextNode(write));
	var div = document.getElementById("fourd")
	div.appendChild(newp);
}
document.getElementById('headl4').innerHTML += hl3;

for (let i = 0; i < deserts.length; i++) {

	var write =  deserts[i] +"....................."+ Dprice[i] + " Euro";

	var newp = document.createElement('p')
	newp.appendChild(document.createTextNode(write));
	var div = document.getElementById("fithd")
	div.appendChild(newp);
}
document.getElementById('headl5').innerHTML += hl5;

// make a comment_______________________________________________
function comment(){
	let new_comment = (<HTMLInputElement>document.getElementById("tipe")).value;

	var newdiv = document.createElement("p");
	newdiv.appendChild(document.createTextNode(new_comment));
	document.getElementById("place2").appendChild(newdiv);
}
// if (input == 1) {
// 	document.getElementById('place').innerHTML += "<i class='fa fa-star' aria-hidden='true'></i>"
// }
function stars(){
	let input = (<HTMLInputElement>document.getElementById("selec")).value;

	document.getElementById('place').innerHTML = input;
}