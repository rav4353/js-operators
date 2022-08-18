// Arithmetic Operators
// +

let x = 5;
let y = 2;
let z = x + y;
document.getElementById("plus").innerHTML = z;

// -

let a = 5;
let b = 2;
let c = a - b;
document.getElementById("minus").innerHTML = c;

// *

let d = 5;
let e = 2;
let f = d * e;
document.getElementById("multiply").innerHTML = f;

// /

let g = 5;
let h = 2;
let i = g / h;
document.getElementById("divide").innerHTML = i;

// Exponentiation **

let j = 5;
let k = 2;
let l = j ** k;
document.getElementById("Exponentiation").innerHTML = l;

// 	Modulus %

let m = 5;
let n = 2;
let o = m % n;
document.getElementById("Modulus").innerHTML = o;

// Increment  ++

let p = 5;
let q = ++p;
document.getElementById("Increment").innerHTML = q;

// Decrement --

let r = 5;
let s = --r;
document.getElementById("Decrement").innerHTML = s;

//Assignment Operators

// =	x = y	x = y

var aa = 10;
aa = 5;
document.getElementById("equalto").innerHTML = aa;

// +=	x += y	x = x + y

var bb = 10;
bb += 5;
document.getElementById("plusequalto").innerHTML = bb;

// -=	x -= y	x = x - y

var cc = 10;
cc -= 5;
document.getElementById("minusequalto").innerHTML = cc;


// *=	x *= y	x = x * y

var dd = 10;
dd *= 5;
document.getElementById("multiplyequalto").innerHTML = dd;


// /=	x /= y	x = x / y

var ee = 10;
ee /= 5;
document.getElementById("divideequalto").innerHTML = ee;


// %=	x %= y	x = x % y

var ff = 10;
ff %= 5;
document.getElementById("modulesequalto").innerHTML = ff;


// **=	x **= y	x = x ** y

var gg = 10;
gg **= 5;
document.getElementById("multiplymultiplyequalto").innerHTML = gg;

// String Operators

// Adding two string

let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
document.getElementById("string").innerHTML = text3;

// Adding string and number

let sn = "Hello" + 5;
document.getElementById("stringandnumber").innerHTML = sn;

// Comparison Operators

// ==	equal to

let hh = 5;
document.getElementById("comparisona").innerHTML = (hh == 8);

// ===	equal value and equal type

let ii = 5;
document.getElementById("comparisonb").innerHTML = (ii === 5);

// !=	not equal

let jj = 5;
document.getElementById("comparisonc").innerHTML = (jj != 8);

// !==	not equal value or not equal type

let kk = 5;
document.getElementById("comparisond").innerHTML = (kk !== 8);

// >	greater than

let ll = 5;
document.getElementById("comparisone").innerHTML = (ll > 8);

// <	less than

let mm = 5;
document.getElementById("comparisonf").innerHTML = (mm < 8);

// >=	greater than or equal to

let nn = 5;
document.getElementById("comparisong").innerHTML = (nn >= 8);

// <=	less than or equal to

let oo = 5;
document.getElementById("comparisonh").innerHTML = (oo <= 8);

// Logical Operators

// &&	and

let pp = 6;
let qq = 3;

document.getElementById("demo1").innerHTML = 
(pp < 10 && qq > 1) + "<br>" + 
(pp < 10 && qq < 1);

// ||	or

let rr = 6;
let ss = 3;

document.getElementById("demo2").innerHTML = 
(rr == 5 || ss== 5) + "<br>" + 
(rr == 6 || ss== 0) + "<br>" + 
(rr == 0 || ss== 3) + "<br>" + 
(rr == 6 || ss== 3);

// !	not

let tt = 6;
let uu = 3;

document.getElementById("demo3").innerHTML = 
!(tt === uu) + "<br>" + 
!(tt > uu);

// Type Operators

let aaa = 5;
document.getElementById("type").innerHTML = typeof aaa;


// Bitwise Operators

// AND

document.getElementById("and").innerHTML = 5 & 1;

// OR 

document.getElementById("or").innerHTML = 5 | 1;

// XOR

document.getElementById("xor").innerHTML = 5 ^ 1;

// NOT

document.getElementById("not").innerHTML = ~ 5;

// LEFT SHIFT

document.getElementById("lshift").innerHTML = 5 << 1;

// RIGHT SHIFT

document.getElementById("rshift").innerHTML = -5 >> 1;

// UNSIGNED RIHGT SHIFT 

document.getElementById("urshift").innerHTML = 5 >>> 1;