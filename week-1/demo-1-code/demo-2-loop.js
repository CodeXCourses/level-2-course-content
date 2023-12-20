

console.log("line 5 will find the elements")

let listItems = document.querySelectorAll("#loopy-list>li");
for(let item of listItems) {
  console.log("line 8 will change the color");
  item.style.color = "red";
}
