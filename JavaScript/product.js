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
let purchased = [];

//

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

searchBar.addEventListener("input", searchItem);

showBooks(books);
