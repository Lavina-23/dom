// getElementById -> selects only one element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Lavina";
judul.setAttribute("name", "lavina"); // to add a new attribute to the element selcted
// getAttribute() : to view the content of the attribute
judul.getAttribute("name"); // the result is lavina
// removeAttribute() : to delete the attribute
judul.removeAttribute("name");

// getElemntsByTagName -> HTMLCollection, selects more than one element and store it like an array
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue"; // use a loop because it's an array, so the index must be included
}
// event tho the array is just contain one element, ensure to include the index

// getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "js yang ngubah"; // manipulates the element's content and can add HTML tags too

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
pb4.style.backgroundColor = "lightblue"; // manipulates the css style of the element

const p2 = document.querySelector(".p2");

// element.classList.add() : to add a new class
p2.classList.add("label");
p2.classList.add("satu");
p2.classList.add("dua");
p2.classList.add("tiga");

// element.classList.remove() : delete the existing class
p2.classList.remove("label");

// element.classList.toggle() : add a new class and if the element already has a class this method will remove it
document.body.classList.toggle("biru-muda"); // true
document.body.classList.toggle("biru-muda"); // false

// element.classList.item() : to check the classes that exist in the element
p2.classList.item(2);

// element.classList.contains() : to check the class but more specifically
p2.classList.contains("dua"); // true, the class is exist
p2.classList.contains("empat"); // false

// element.classList.replace() : to replace the existing class to a new one
p2.classList.replace("tiga", "empat"); // replace the class 'tiga' with 'empat'

// document.createElement() -> creates a new element, new tag
const pBaru = document.createElement("p");
// document.createTextNode -> content
const textP = document.createTextNode("Paragraf Baru");
// node.appendChild() -> fill element with content
pBaru.appendChild(textP);

const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru); // put the element at the bottom

const liBaru = document.createElement("li");
const textLi = document.createTextNode("item baru");
liBaru.appendChild(textLi);

const ul = document.getElementsByTagName("ul")[0];
// node.insertBefore() -> put the element before another element
ul.insertBefore(liBaru, li2);

const link = sectionA.querySelector("a");
// parentNode.removeChild() -> delete element(child) from parent node
sectionA.removeChild(link);

const h2Baru = document.createElement("h2");
const textH2 = document.createTextNode("Judul Baru");
h2Baru.appendChild(textH2);

// parentNode.replaceChild() -> replace existing element with a new element
sectionB.replaceChild(h2Baru, p4);

h2Baru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
pBaru.style.backgroundColor = "lightgreen";

// addEventListener()
h2Baru.addEventListener("click", function () {
  const itemBaru = document.createElement("li");
  const textItem = document.createTextNode("item baru");
  itemBaru.appendChild(textItem);

  ul.appendChild(itemBaru);
});
// event : click, when the element is clicked a new item will appear
