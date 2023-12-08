// Function will rub after the set time which will then assign a style display of none to the spinner and a style display of block to the content
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    //
    document.querySelector(".loader.center").style.display = "none";
    //
    document.querySelector("main").style.display = "block";
  }, 2000);
});

// Assigning the value of the local storage to a variable
let cart = JSON.parse(localStorage.getItem("cart"));

// Setting the selected element as a variable
const mainContent = document.querySelector("tbody");

// Setting the selected element as a variable
const purchasedContent = document.querySelector("main");

// Function expression to update the local storage and retrieving the updated values
function updateLocalCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  cart = JSON.parse(localStorage.getItem("cart"));
}

// Function ran while the loading of the page takes place
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

// Function expression that will empty the array once clicked and display a thank you message
function confirmedPurchase() {
  cart = [];
  alert("Thank you for your purchase! It is much appreciated!!!");
  console.log("Thank you for your purchase! It is much appreciated!!!");
  purchasedContent.innerHTML = `<h1 class="text-center text-danger display-1">Thank you for your purchase! It is much appreciated!!!</h1>`;
  updateLocalCart();
  setTimeout((mainContent.innerHTML = purchasedItems.join("")), 1000);
}

//
confirmBtn.addEventListener("click", () => confirmedPurchase());
