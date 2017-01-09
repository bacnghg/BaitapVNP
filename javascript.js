"use strict"

//Bai tap 1:


document.write("Bai 1: Tach chuoi, ket hop thanh chuoi moi ");

function splitName(){
	var str = "BacNguyen";
	var arr1 = str.split(""); // Tach chuoi
	var j = arr1.length -1;
	for ( var i = 0; i <= j; i++){
		document.write(arr1);
	}
}
document.write("<br>")

// Bai 2:

document.write("Bai 2: Sap xep chuoi alphabet: ");
var name = "everyday";
var arr = name.split("");
arr = arr.sort();
document.write(arr.join(""));
document.write("<br>")

// Bai 3:
document.write("Bai 3: Viet function giai thua: 5! = ")
function giaiThua(i) {
	
	if( i == 0 || i == 1 ){
		return 1;
	} else {
		return ( i * giaiThua( i - 1 ));
	}
}

var a = 5;
document.write(giaiThua(a));