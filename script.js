// getElementById -> selects only one element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Lavina";

// getElemntsByTagName -> HTMLCollection, selects more than one element and store it like an array
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue"; // use a loop because it's an array, so the index must be included
}
// event tho the array is just contain one element, ensure to include the index

// getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "js yang ngubah";

// querySelector() -> selects only one element
const p4 = document.querySelector("#b p"); // #b p is like we use a selector in css
p4.style.color = "green";
p4.style.backgroundColor = "transparent";

const li2 = document.querySelector("#b li:nth-child(2)");
li2.style.backgroundColor = "orange";

// querySelectorAll() -> nodelist, it's similar to getElementsByTagName
const h3 = document.querySelectorAll("h3");
for (let i = 0; i < h3.length; i++) {
  h3[i].style.backgroundColor = "purple";
  h3[i].style.color = "white";
}

// we are also able to change the root node
const sectionB = document.getElementById("b");
const pb4 = sectionB.querySelector("p"); // the root node has been changed to sectionB
pb4.style.backgroundColor = "lightblue";
