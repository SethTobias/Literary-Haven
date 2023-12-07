//
let cart = JSON.parse(localStorage.getItem("cart"));

//
const mainContent = document.querySelector("ul");

//
const purchasedContent = document.querySelector("main");

//
function updateLocalCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  cart = JSON.parse(localStorage.getItem("cart"));
}

//
window.onload = function displayCart() {
  let purchasedItems = cart.map(function (cart, index) {
    return `
           <li>${
             index + 1
           } ${cart.name} ${cart.volume} ${cart.price} <button class="removeItem" value="${index}">X</button></li>
        `;
  });
  function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
    updateLocalCart();
  }

  //
  mainContent.addEventListener("click", function () {
    if (event.target.classList.contains("removeItem")) {
      removeItem(event.target.value);
    }
  });

  mainContent.innerHTML = purchasedItems.join("");
};

//
const confirmBtn = document.querySelector(".confirm");

//
function confirmedPurchase() {
  cart = [];
  alert("Thank you for your purchase! It is much appreciated!!!");
  console.log("Thank you for your purchase! It is much appreciated!!!");
  purchasedContent.innerHTML = `<h1 class="text-center text-danger display-1">Thank you for your purchase! It is much appreciated!!!</h1>`;
  updateLocalCart();
}

//
confirmBtn.addEventListener("click", () => confirmedPurchase());
