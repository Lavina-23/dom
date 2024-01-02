// without DOM Traversal
const btnClose = document.querySelector(".close");
const card = document.querySelector(".card");

btnClose.addEventListener("click", function () {
  const container = document.querySelector(".container");
  container.removeChild(card);
});

// with css
btnClose.addEventListener("click", function () {
  card.style.display = "none";
});

// with DOM Traversal
const close = document.querySelectorAll(".close"); // the result is an array, so need to use a loop

// looping with for
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function (e) {
    // close[i].parentElement.style.display = "none";
    e.target.parentElement.style.display = "none";
  });
}

// looping with foreach
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

// to traverse the elements, we can use :
// parentNode -> node
// parentElement -> element
// nextSibling -> node
// nextElementSibling -> element
// previousSibling -> node
// previousElementSibling -> element

const nama = document.querySelector(".nama");
console.log(nama.parentElement.parentElement); // return container
console.log(nama.nextSibling); // return space and space is node
console.log(nama.nextElementSibling); // return class telp, use this method to traverse the element
console.log(nama.previousElementSibling); // return class img
console.log(nama.previousElementSibling.previousElementSibling); // retunr null
