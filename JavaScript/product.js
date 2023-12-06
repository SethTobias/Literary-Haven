//
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    //
    document.querySelector(".loader.center").style.display = "none";
    //
    document.querySelector("main").style.display = "block";
  }, 2000);
});

// Declaring main tag as a variable
const mainContent = document.querySelector(".mainContent");

//
let books = JSON.parse(localStorage.getItem("books"));

//
let cart = [];

//
const searchBar = document.querySelector(".search");

//
function showBooks(books) {
  mainContent.innerHTML = books
    .map(
      (book, index) => `
    <div>
      ${index + 1}. ${book.name}
      <img src="${book.url}">
      <button data-toCart>Add Item</button>
    </div>
  `
    )
    .join("");
}

//
function searchItem() {
  let searchValue = searchBar.value.toLowerCase();

  if (searchValue !== "") {
    const filteredBooks = books.filter((book) =>
      book.name.toLowerCase().includes(searchValue)
    );
    showBooks(filteredBooks);
  } else {
    mainContent.innerHTML = `
    <div>
      <h1 class="display-1 text-danger text-center">Item Was Not Found?</h1>
    </div>
  `;
  }
}

//
searchBar.addEventListener("input", searchItem);

//
showBooks(books);

//
const sortBtnA = document.querySelector(".sortA");

//
const sortBtnD = document.querySelector(".sortD");

//
function sortItemsAscending() {
  books.sort((a, b) => a.price - b.price);
  displayBooks();
}

//
function sortItemsDescending() {
  books.sort((a, b) => b.price - a.price);
  displayBooks();
}

//
function displayBooks() {
  books.forEach(
    () =>
      (mainContent.innerHTML = books
        .map(
          (book, index) => `
    <div>
      ${index + 1}. ${book.name}
      <img src="${book.url}">
      <button data-toCart>Add Item</button>
    </div>
  `
        )
        .join(""))
  );
}

//
sortBtnA.addEventListener("click", () => sortItemsAscending());

//
sortBtnD.addEventListener("click", () => sortItemsDescending());

//
function updateLocalCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  cart = JSON.parse(localStorage.getItem("cart"));
}

//
function addToCart(index) {
  cart.push(books[index]); //Ask matthew
  updateLocalCart();
}

//
mainContent.addEventListener("click", function () {
  if (event.target.hasAttribute("data-toCart")) {
    addToCart(event.target.value);
  }
});

//

//
