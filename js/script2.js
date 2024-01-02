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

// event bubbling, if we add an event to parent element, the child element will first execute the parent's event
const cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
  card.addEventListener("click", function (e) {
    alert("ok");
  });
});

// looping with foreach
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";

    // preventDefault() -> to stop the default event
    // like tag a('close' tag is a) has a default event to navigate to another page
    // so, if the target href is empty, it will simply refresh the page
    e.preventDefault();

    // to stop the event bubbling, we can use stopPropagation() method
    e.stopPropagation();
  });
});

// looping with for
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function (e) {
    // close[i].parentElement.style.display = "none";
    e.target.parentElement.style.display = "none";
  });
}

// to traverse the elements, we can use :
const nama = document.querySelector(".nama");

// parentNode -> node
// parentElement -> element
console.log(nama.parentElement.parentElement); // return container
// nextSibling -> node
console.log(nama.nextSibling); // return space and space is node
// nextElementSibling -> element
console.log(nama.nextElementSibling); // return class telp, use this method to traverse the element
// previousSibling -> node
// previousElementSibling -> element
console.log(nama.previousElementSibling); // return class img
console.log(nama.previousElementSibling.previousElementSibling); // retunr null

// the most correct way
const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
  }
});
