
function exampleFunctionNullObj() {
  let dog = null;

  // Note: What happens if we do this?
  // dog = {
  //   name: "Scoobs",
  //   age: 12,
  //   canShake: true
  // };

  console.log("This will print out the dog's name");
  console.log(dog.name);

}

let btn1 = document.getElementById("null-obj-button")
btn1.onclick = exampleFunctionNullObj;

function exampleFunctionNullElm() {
  // This will not find the element, since it is misspelled...
  let elm = document.getElementById("example-1-erroor-this-is-misspelled-oops!");
  // ...so we get an error if we try to access it.
  console.log(elm); // prints null
  elm.style.color = "red";
  // Can you fix the error?




}

let btn2 = document.getElementById("null-elm-button");
btn2.onclick = exampleFunctionNullElm;