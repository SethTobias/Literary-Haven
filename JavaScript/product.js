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
const mainContentSub = document.querySelectorAll("div")[13];

//
let books = JSON.parse(localStorage.getItem("books"));

//
let cart = [];

//
const searchBar = document.querySelector(".search");

//
function showBooks(books) {
  mainContentSub.innerHTML = books
    .map(
      (book, index) => `
      <div class="flip-card text-center">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <div class="row">
    <h2>${book.name}</h2>
    </div>
    <div class="row col-10 m-auto">
    <img src="${book.url}" class="img-fluid">
    </div>
    <div class="row">
    <h2>R${book.price}</h2>
    </div>
    </div>
    <div class="flip-card-back">
      <p>Volume: #${book.volume}</p>
      <p>Author: ${book.author}</p>
      <p>Literary Type: ${book.type}</p>
      <p>Genre: ${book.genre}</p>
      <p>Synopsis: ${book.synopsis}</p>
      <button data-toCart value="${index}">Add Item</button>
    </div>
  </div>
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
    mainContentSub.className = "mainContent gridDisplay";
  } else {
    mainContentSub.innerHTML = `
    <div>
      <h1 class="display-1 text-danger text-center">Item Was Not Found?</h1>
    </div>
  `;
    mainContentSub.className = "text-danger text-center";
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
  mainContentSub.className = "mainContent gridDisplay";
  displayBooks();
}

//
function sortItemsDescending() {
  books.sort((a, b) => b.price - a.price);
  mainContentSub.className = "mainContent gridDisplay";
  displayBooks();
}

//
function displayBooks() {
  books.forEach(
    () =>
      (mainContent.innerHTML = books
        .map(
          (book, index) => `
          <div class="flip-card text-center">
      <div class="flip-card-inner">
        <div class="flip-card-front">
        <div class="row">
        <h2>${book.name}</h2>
        </div>
        <div class="row col-10 m-auto">
        <img src="${book.url}" class="img-fluid">
        </div>
        <div class="row">
        <h2>R${book.price}</h2>
        </div>
        </div>
        <div class="flip-card-back">
          <p>Volume: #${book.volume}</p>
          <p>Author: ${book.author}</p>
          <p>Literary Type: ${book.type}</p>
          <p>Genre: ${book.genre}</p>
          <p>Synopsis: ${book.synopsis}</p>
          <button data-toCart value="${index}">Add Item</button>
        </div>
      </div>
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
  books[index].quantity = ++books[index].quantity;
  cart.push(books[index]);
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
