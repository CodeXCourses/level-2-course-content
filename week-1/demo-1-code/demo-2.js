
console.log("line 5 will find the elements")

let listItems = document.querySelectorAll("#colored-list>li");
let redItem = listItems[0];
let greenItem = listItems[1];
let goldItem = listItems[2];
let purpleItem = listItems[3];
let aquaItem = listItems[4];

redItem.style.color = "red";
greenItem.style.color = "green";
goldItem.style.color = "gold";
purpleItem.style.color = "purple";
aquaItem.style.color = "aqua";
