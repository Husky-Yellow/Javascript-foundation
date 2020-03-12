/*
* @Author: DELL
* @Date:   2018-05-10 15:43:14
* @Last Modified by:   DELL
* @Last Modified time: 2018-05-10 16:00:38
*/
var greeting = 'Howdy';
var name = 'Molly';
var message = ',please check your order';
var welcome = greeting+name+message;

var sign='Montague House'
var tiles = sign,length;
var subTotal = tiles*5;
var shipping=7;
var grandTotal=subTotal+shipping;
var el = document.getElementById('greeting');
el.textContent = welcome;
var el = document.getElementById('userSign');
el.textContent = sign;

var el = document.getElementById('tiles');
el.textContent = tiles;

var el = document.getElementById('subTotal');
el.textContent = '$'+subTotal;

var el = document.getElementById('shipping');
el.textContent ='$'+shipping;
var el = document.getElementById('grandTotal');
el.textContent ='$'+grandTotal;

