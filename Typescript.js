var primary = ['Burger', 'Wrap', 'Toast'];
var side = ['fries', 'rice'];
var drinks = ['cola', 'soda'];
var deserts = ['cake'];
var salads = ['Cizar Salad'];
var Pprice = [6.30, 4.60, 3.50];
var Sprice = [2.30, 6.30];
var Dprice = [4.60, 3.50];
var Deprice = [2.30];
var Saprice = [2.30];
var headline = ['Primary dishes', 'Drinks', 'Salads', 'Side dishes', 'Deserts'];
var hl1 = headline[0], hl2 = headline[1], hl3 = headline[2], hl4 = headline[3], hl5 = headline[4];
// for (let i = 0; i < menu.length; i++) {
// 	var newp = document.createElement("p");
// 	newp.appendChild(document.createTextNode(menu[i]));
// 	document.body.appendChild(newp);
// }
// menu__________________________________________________________________
for (var i = 0; i < primary.length; i++) {
    var write = primary[i] + "....................." + Pprice[i] + " Euro";
    var newp = document.createElement('p');
    newp.appendChild(document.createTextNode(write));
    var div = document.getElementById("first");
    div.appendChild(newp);
}
// document.body.innerHTML += cart();
document.getElementById('headl').innerHTML += hl1;
for (var i = 0; i < side.length; i++) {
    var write = side[i] + "....................." + Sprice[i] + " Euro";
    var newp = document.createElement('p');
    newp.appendChild(document.createTextNode(write));
    var div = document.getElementById("second");
    div.appendChild(newp);
}
// document.body.innerHTML += cart();
document.getElementById('headl2').innerHTML += hl4;
for (var i = 0; i < drinks.length; i++) {
    var write = drinks[i] + "....................." + Dprice[i] + " Euro";
    var newp = document.createElement('p');
    newp.appendChild(document.createTextNode(write));
    var div = document.getElementById("third");
    div.appendChild(newp);
}
document.getElementById('headl3').innerHTML += hl2;
for (var i = 0; i < salads.length; i++) {
    var write = salads[i] + "....................." + Saprice[i] + " Euro";
    var newp = document.createElement('p');
    newp.appendChild(document.createTextNode(write));
    var div = document.getElementById("fourd");
    div.appendChild(newp);
}
document.getElementById('headl4').innerHTML += hl3;
for (var i = 0; i < deserts.length; i++) {
    var write = deserts[i] + "....................." + Dprice[i] + " Euro";
    var newp = document.createElement('p');
    newp.appendChild(document.createTextNode(write));
    var div = document.getElementById("fithd");
    div.appendChild(newp);
}
document.getElementById('headl5').innerHTML += hl5;
// make a comment_______________________________________________
function comment() {
    var new_comment = document.getElementById("tipe").value;
    var newdiv = document.createElement("p");
    newdiv.appendChild(document.createTextNode(new_comment));
    document.getElementById("place2").appendChild(newdiv);
}
// if (input == 1) {
// 	document.getElementById('place').innerHTML += "<i class='fa fa-star' aria-hidden='true'></i>"
// }
function stars() {
    var input = document.getElementById("selec").value;
    document.getElementById('place').innerHTML = input;
}
