//
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".loader.center").style.display = "none";
    document.querySelector("main").style.display = "block";
  }, 2000);
});

// Declaring main tag as a variable
const mainContent = document.querySelector("main");

//
let books = JSON.parse(localStorage.getItem("books"));

let purchased = [];
//
let products = books.map(function (item, index) {
  return `
                <div>
                    ${index}
                    ${item.name}
                    ${item.name}
                    ${item.name}
                    ${item.name}
                    ${item.name}
                    ${item.name}
                    ${item.name}
                    $<img src="${item.url}">
                    ${item.name}
                    ${item.name}
                    ${item.name}
                    ${item.name}
                </div>
              `;
});

// cars.sort(function (a, b) {
//   return a.year - b.year;
// });
// displayCars();

mainContent.innerHTML = products.join("");
