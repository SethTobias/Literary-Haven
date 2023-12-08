//
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    //
    document.querySelector(".loader.center").style.display = "none";
    //
    document.querySelector("main").style.display = "block";
  }, 2000);
});

//
let cart = JSON.parse(localStorage.getItem("cart"));

//
const mainContent = document.querySelector("tbody");

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
    if (mainContent == "") {
      return `
        <tr>
          <td colspan="7"><h1 class="display-1 text-info">No items in Cart:</h1></td>
        </tr>
      `;
    } else {
      return `
      <tr>
      <td style="width:5%;">${cart.name}</td>
      <td style="width:5%;">Volume ${cart.volume}</td>
      <td style="width:5%;">${cart.type}</td>
      <td style="width:12.5%;"><img src=${cart.url}></td>
      <td style="width:5%;">${cart.quantity}</td>
      <td style="width:5%;">R${cart.price * cart.quantity}</td>
      <td style="width:5%;"><button class="removeItem" value="${index}">X</button></td>
      </tr>
      `;
    }
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
  setTimeout(displayCart(cart), 1000);
}

//
confirmBtn.addEventListener("click", () => confirmedPurchase());
