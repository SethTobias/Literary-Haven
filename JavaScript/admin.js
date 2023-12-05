// Declaring constant for the main tag
const mainContent = document.querySelector("main");

// Defining an empty array to push to local storage
let books = [];

// Constructor function for all newly added products
function ItemConstructor(
  name,
  volume,
  author,
  type,
  genre,
  synopsis,
  url,
  price,
  stock
) {
  this.name = name;
  this.volume = volume;
  this.author = author;
  this.type = type;
  this.genre = genre;
  this.synopsis = synopsis;
  this.url = url;
  this.price = price;
  this.stock = stock;
}

//Defining multiple objects using the ItemConstructor constructor function
let item1 = new ItemConstructor(
  "Solo Leveling",
  1,
  "Chugong",
  "Manga",
  "Fantasy",
  "https://i.postimg.cc/bv7Trc8j/solo-Leveling-vol1.jpg",
  "",
  375,
  78
);

let item2 = new ItemConstructor(
  "Solo Leveling",
  2,
  "Chugong",
  "Manga",
  "Fantasy",
  "After Sung Jin-Woo's awakening. He comes to realize his newfound strength. Coupled with his newly acquired games like abilities. His dream of no longer being the World's Weakest Hunter does'nt seem like much of a dream anymore.",
  "https://i.postimg.cc/6Q2cB6k0/solo-Leveling-vol2.jpg",
  375,
  68
);

let item3 = new ItemConstructor(
  "Solo Leveling",
  3,
  "Chugong",
  "Manga",
  "Fantasy",
  "The survivors of the Double Dungeon Incident are back together again. This time around though not everyone can be so easily trusted.",
  "https://i.postimg.cc/Nj0bPkbZ/solo-Leveling-vol3.jpg",
  375,
  58
);
let item4 = new ItemConstructor(
  "Solo Leveling",
  4,
  "Chugong",
  "Manga",
  "Fantasy",
  "Now that Sung Jin-Woo has more than just a small army under his command. Is he ready for anything the dungeon throws at him?",
  "https://i.postimg.cc/qqdjbfZG/solo-Leveling-vol4.jpg",
  375,
  48
);
let item5 = new ItemConstructor(
  "Solo Leveling",
  5,
  "Chugong",
  "Manga",
  "Fantasy",
  "Slowly growing in strength. His true abilities come to light. With the guilds and association of Korea taking a keen interest in him. He himself wants to know how he matches up to higher ranked hunters.",
  "https://i.postimg.cc/13YMxVjX/solo-Leveling-vol5.jpg",
  375,
  38
);
let item6 = new ItemConstructor(
  "Solo Leveling",
  6,
  "Chugong",
  "Manga",
  "Fantasy",
  "Sung Jin-woo has new aspirations to conquer the Demon Castle,alongside his new found ally. Meanwhile something long forgotten about washes onto the shores of Japan.",
  "https://i.postimg.cc/65tMCXZW/solo-Leveling-vol6.jpg",
  375,
  28
);
let item7 = new ItemConstructor(
  "Solo Leveling",
  7,
  "Chugong",
  "Manga",
  "Fantasy",
  "With Jeju Island's reclaim in sight everything looks more than taken care of. Unfortunately the Queen's strongest soldier had something else in mind.",
  "https://i.postimg.cc/bv7Trc8j/solo-Leveling-vol1.jpg",
  375,
  18
);
let item8 = new ItemConstructor(
  "Solo Leveling",
  8,
  "Chugong",
  "Manga",
  "Fantasy",
  "With Jeju Island Incident resolved. All eyes are on Sung Jin-Woo. Leaving everyone wondering which top guild he will join. Well that would be his own of course.",
  "https://i.postimg.cc/3JTc9GsH/soloLeveling-vol8.jpg",
  375,
  8
);

//
books.push(item1, item2, item3, item4, item5, item6, item7, item8);

//
localStorage.setItem("books", JSON.stringify(books));

//
books = JSON.parse(localStorage.getItem("books"));

// Defining function to run once the page is loaded to initialise HTML structure of admin page
window.onload = function adminOnLoad() {
  let products = books.map(function (item, index) {
    return `
    <table>
    <thead>
        <tr  class="tableHeader">
            <th>ADMIN: CRUD System</th>
        </tr>
        <tr>
            <td>Item ID.</td>
            <td>Name</td>
            <td>Volume</td>
            <td>Author</td>
            <td>Book Type</td>
            <td>Genre</td>
            <td>Synopsis</td>
            <td>Image</td>
            <td>Price</td>
            <td>In Stock</td>
            <td></td>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>R${item.volume}</td>
        <td>${item.author}</td>
        <td>${item.type}</td>
        <td>${item.genre}</td>
        <td>${item.synopsis}</td>
        <td><img src=${item.url}></td>
        <td>${item.price}</td>
        <td>${item.stock}</td>
        <td><button class="edit" value="${index}">EDIT</button></td>
        <td><button class="delete" value="${index}">X</button></td>
        </tr>
        </tbody>
      <tfoot>
      <tr class='tableFooter'>
        <td><button class="add">ADD</button></td>
      </tr>
        </tfoot>
      </table>
      `;
  });
  //
  mainContent.innerHTML = products.join("");
  // Running to see whether the function is running
  console.log("Im a working function");
};
