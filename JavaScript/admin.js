// Function will rub after the set time which will then assign a style display of none to the spinner and a style display of block to the content
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    //
    document.querySelector(".loader.center").style.display = "none";
    //
    document.querySelector("main").style.display = "block";
  }, 2000);
});

// Declaring constant for the tbody tag
const mainContent = document.querySelector("tbody");

//Declaring constant for the main tag
const content = document.querySelector("main");

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
  stock,
  quantity
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
  this.quantity = quantity;
}

//Defining multiple objects using the ItemConstructor constructor function
let item1 = new ItemConstructor(
  "Solo Leveling",
  1,
  "Chugong",
  "Manga",
  "Fantasy",
  "Being the World's Weakest Hunter is'nt as easy as it seems. For Sung Jin-Woo this is an absolute truth he understands. Embark with him on his journey to  becoming the Last of Humanities Hope.",
  "https://i.postimg.cc/bv7Trc8j/solo-Leveling-vol1.jpg",
  375,
  78,
  0
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
  68,
  0
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
  58,
  0
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
  48,
  0
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
  38,
  0
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
  28,
  0
);
let item7 = new ItemConstructor(
  "Solo Leveling",
  7,
  "Chugong",
  "Manga",
  "Fantasy",
  "With Jeju Island's reclaim in sight everything looks more than taken care of. Unfortunately the Queen's strongest soldier had something else in mind.",
  "https://i.postimg.cc/fTCBKr7x/solo-Leveling-vol7.jpg",
  375,
  18,
  0
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
  8,
  0
);

let item9 = new ItemConstructor(
  "Days",
  1,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/bJnm9YLJ/days-vol1.jpg",
  150,
  0,
  0
);

let item10 = new ItemConstructor(
  "Days",
  2,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/mrtXhyH7/days-vol2.jpg",
  150,
  0,
  0
);

let item11 = new ItemConstructor(
  "Days",
  3,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/rp3h4R13/days-vol3.jpg",
  150,
  0,
  0
);

let item12 = new ItemConstructor(
  "Days",
  4,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/7ZBtxWfx/days-vol4.jpg",
  150,
  0,
  0
);

let item13 = new ItemConstructor(
  "Days",
  5,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/sgf0Crf6/days-vol5.jpg",
  150,
  0,
  0
);

let item14 = new ItemConstructor(
  "Days",
  6,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/X7kDPJWB/days-vol6.jpg",
  150,
  0,
  0
);

let item15 = new ItemConstructor(
  "Days",
  7,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/8chnNkr3/days-vol7.jpg",
  150,
  0,
  0
);

let item16 = new ItemConstructor(
  "Days",
  8,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/L5d0cghL/days-vol8.jpg",
  150,
  0,
  0
);

let item17 = new ItemConstructor(
  "Days",
  9,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/25KtxKDH/days-vol9.jpg",
  150,
  0,
  0
);

let item18 = new ItemConstructor(
  "Days",
  10,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  " https://i.postimg.cc/NM2zCkGQ/days-vol10.jpg ",
  150,
  0,
  0
);

let item19 = new ItemConstructor(
  "Days",
  11,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/mgVJPr6W/days-vol11.jpg ",
  150,
  0,
  0
);

let item20 = new ItemConstructor(
  "Days",
  12,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/rpmbxLv0/days-vol12.jpg",
  150,
  0,
  0
);

let item21 = new ItemConstructor(
  "Days",
  13,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/CLTWtXfX/days-vol13.jpg",
  150,
  0,
  0
);

let item22 = new ItemConstructor(
  "Days",
  14,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/c18pF06f/days-vol14.jpg ",
  150,
  0,
  0
);

let item23 = new ItemConstructor(
  "Days",
  15,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/fb2Grbxf/days-vol15.jpg ",
  150,
  0,
  0
);

let item24 = new ItemConstructor(
  "Days",
  16,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/xd1r5mbd/days-vol16.jpg ",
  150,
  0,
  0
);

let item25 = new ItemConstructor(
  "Days",
  17,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/13P1g2mw/days-vol17.jpg",
  150,
  0,
  0
);

let item26 = new ItemConstructor(
  "Days",
  18,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/htrWVsvw/days-vol18.jpg ",
  150,
  0,
  0
);

let item27 = new ItemConstructor(
  "Days",
  19,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/Wb0P1Tvs/days-vol19.jpg",
  150,
  0,
  0
);

let item28 = new ItemConstructor(
  "Days",
  20,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/qBPTrgWm/days-vol20.jpg",
  150,
  0,
  0
);

let item29 = new ItemConstructor(
  "Days",
  21,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/QVGSy24b/days-vol21.jpg ",
  150,
  0,
  0
);

let item30 = new ItemConstructor(
  "Days",
  22,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/wvrwhyDn/days-vol22.jpg ",
  150,
  0,
  0
);

let item31 = new ItemConstructor(
  "Days",
  23,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/d13WkmZ8/days-vol23.jpg ",
  150,
  0,
  0
);

let item32 = new ItemConstructor(
  "Days",
  24,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/XvV130V1/days-vol24.jpg",
  150,
  0,
  0
);

let item33 = new ItemConstructor(
  "Days",
  25,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/g0NS2Bjz/days-vol25.jpg ",
  150,
  0,
  0
);

let item34 = new ItemConstructor(
  "Days",
  26,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/6pVbDQNG/days-vol26.jpg ",
  150,
  0,
  0
);

let item35 = new ItemConstructor(
  "Days",
  27,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/GmnS7y6C/days-vol27.jpg ",
  150,
  0,
  0
);

let item36 = new ItemConstructor(
  "Days",
  28,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/WbkHwnW8/days-vol28.jpg",
  150,
  0,
  0
);

let item37 = new ItemConstructor(
  "Days",
  29,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/j2Gkrw5y/days-vol29.jpg ",
  150,
  0,
  0
);

let item38 = new ItemConstructor(
  "Days",
  30,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/y65GR5PW/days-vol30.jpg",
  150,
  0,
  0
);

let item39 = new ItemConstructor(
  "Days",
  31,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/tCK8KfZ8/days-vol31.jpg",
  150,
  0,
  0
);

let item40 = new ItemConstructor(
  "Days",
  32,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/VkX2mRXv/days-vol32.jpg",
  150,
  0,
  0
);

let item41 = new ItemConstructor(
  "Days",
  33,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/KzpHJshq/days-vol33.jpg",
  150,
  0,
  0
);

let item42 = new ItemConstructor(
  "Days",
  34,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/yd8GhCt3/days-vol34.jpg",
  150,
  0,
  0
);

let item43 = new ItemConstructor(
  "Days",
  35,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/9FRvNVMG/days-vol35.jpg",
  150,
  0,
  0
);

let item44 = new ItemConstructor(
  "Days",
  36,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/tRmK57Xq/days-vol36.jpg",
  150,
  0,
  0
);

let item45 = new ItemConstructor(
  "Days",
  37,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/QMbPWd4r/days-vol37.jpg",
  150,
  0,
  0
);

let item46 = new ItemConstructor(
  "Days",
  38,
  "Tsuyoshi Yasuda",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/TPGFwDc9/days-vol38.jpg",
  150,
  0,
  0
);

let item47 = new ItemConstructor(
  "Blue Lock",
  1,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/bJFZTP9n/blue-Lock-vol1.jpg",
  200,
  0,
  0
);

let item48 = new ItemConstructor(
  "Blue Lock",
  2,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/4yDnD1MN/blue-Lock-vol2.jpg",
  200,
  0,
  0
);

let item49 = new ItemConstructor(
  "Blue Lock",
  3,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/NF95Cndz/blue-Lock-vol3.jpg",
  200,
  0,
  0
);

let item50 = new ItemConstructor(
  "Blue Lock",
  4,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/LXsqL5LR/blue-Lock-vol4.jpg",
  200,
  0,
  0
);

let item51 = new ItemConstructor(
  "Blue Lock",
  5,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/3w14kmyn/blue-Lock-vol5.jpg",
  200,
  0,
  0
);

let item52 = new ItemConstructor(
  "Blue Lock",
  6,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/3J0vtk6x/blue-Lock-vol6.jpg",
  200,
  0,
  0
);

let item53 = new ItemConstructor(
  "Blue Lock",
  7,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/K8ngydmX/blue-Lock-vol7.jpg",
  200,
  0,
  0
);

let item54 = new ItemConstructor(
  "Blue Lock",
  8,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/j2mJsTWT/blue-Lock-vol8.jpg",
  200,
  0,
  0
);

let item55 = new ItemConstructor(
  "Blue Lock",
  9,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/7PWz13KR/blue-Lock-vol9.jpg",
  200,
  0,
  0
);

let item56 = new ItemConstructor(
  "Blue Lock",
  10,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/fR40pwnj/blue-Lock-vol10.jpg",
  200,
  0,
  0
);

let item57 = new ItemConstructor(
  "Blue Lock",
  11,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/KjRMSj8Q/blue-Lock-vol11.jpg",
  200,
  0,
  0
);

let item58 = new ItemConstructor(
  "Blue Lock",
  12,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/tgpnR2gs/blue-Lock-vol12.jpg",
  200,
  0,
  0
);

let item59 = new ItemConstructor(
  "Blue Lock",
  13,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/Px6wRYTP/blue-Lock-vol13.jpg",
  200,
  0,
  0
);

let item60 = new ItemConstructor(
  "Blue Lock",
  14,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/MTZB5dkC/blue-Lock-vol14.jpg",
  200,
  0,
  0
);

let item61 = new ItemConstructor(
  "Blue Lock",
  15,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/q7Tyhp1M/blue-Lock-vol15.jpg",
  200,
  0,
  0
);

let item62 = new ItemConstructor(
  "Blue Lock",
  16,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "  https://i.postimg.cc/QCtp8S0Q/blue-Lock-vol16.jpg",
  200,
  0,
  0
);

let item63 = new ItemConstructor(
  "Blue Lock",
  17,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/dVdGVhmx/blue-Lock-vol17.jpg",
  200,
  0,
  0
);

let item64 = new ItemConstructor(
  "Blue Lock",
  18,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/4ySpmtSr/blue-Lock-vol18.jpg",
  200,
  0,
  0
);

let item65 = new ItemConstructor(
  "Blue Lock",
  19,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/ryn1nXwQ/blue-Lock-vol19.jpg",
  200,
  0,
  0
);

let item66 = new ItemConstructor(
  "Blue Lock",
  20,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/MKgyw7RB/blue-Lock-vol20.jpg",
  200,
  0,
  0
);

let item67 = new ItemConstructor(
  "Blue Lock",
  21,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  " https://i.postimg.cc/Jh5JjSF3/blue-Lock-vol21.jpg",
  200,
  0,
  0
);

let item68 = new ItemConstructor(
  "Blue Lock",
  22,
  "Muneyuki Kaneshiro",
  "Manga",
  "Sport",
  "Item Currently Unavaliable.",
  "https://i.postimg.cc/02zphW6x/blue-Lock-vol22.jpg",
  200,
  0,
  0
);

//
books.push(
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
  item18,
  item19,
  item20,
  item21,
  item22,
  item23,
  item24,
  item25,
  item26,
  item27,
  item28,
  item29,
  item30,
  item31,
  item32,
  item33,
  item34,
  item35,
  item36,
  item37,
  item38,
  item39,
  item40,
  item41,
  item42,
  item43,
  item44,
  item45,
  item46,
  item47,
  item48,
  item49,
  item50,
  item51,
  item52,
  item53,
  item54,
  item55,
  item56,
  item57,
  item58,
  item59,
  item60,
  item61,
  item62,
  item63,
  item64,
  item65,
  item66,
  item67,
  item68
);

// Setting the array to be sent to the local storage also saving it as one long string to make it easier to store
localStorage.setItem("books", JSON.stringify(books));

// Retrieving data from the local storage
books = JSON.parse(localStorage.getItem("books"));

// Defining function expression to run once the page is loaded to initialise HTML structure of admin page
window.onload = function adminOnLoad() {
  let products = books.map(function (item, index) {
    return `
        <tr>
            <td style="width:5%;">${index + 1}</td>
            <td style="width:5%;">${item.name}</td>
            <td style="width:5%;">Volume ${item.volume}</td>
            <td style="width:5%;">${item.author}</td>
            <td style="width:5%;">${item.type}</td>
            <td style="width:5%;">${item.genre}</td>
            <td style="15%">${item.synopsis}</td>
            <td style="width:15%;"><img src=${item.url}></td>
            <td style="width:5%;">R${item.price}</td>
            <td style="width:5%;">QTY:${item.stock}</td>
            <td style="width:5%;">QTY:${item.quantity}</td>
            <td style="width:5%;"><button class="edit" value="${index}">EDIT</button></td>
            <td style="width:5%;"><button class="delete" value="${index}">X</button></td>
        </tr>
      `;
  });

  // Function expression used to delete an item from the stored array and updating the local array accordingly also reloading the page at thr same time
  function deleteItem(index) {
    books.splice(index, 1);
    adminOnLoad();
    updateLocal();
  }

  //Function expression used to delete all the items from the array at once and updating the local array accordingly also reloading the page at thr same time
  function deleteItems() {
    books = [];
    adminOnLoad();
    updateLocal();
  }

  // Declaring a variable to store the selected button using DOM manipulation
  let clearBtn = document.querySelector(".deleteAll");

  // Event listener to wait for the click event to run the delete items function
  clearBtn.addEventListener("click", () => deleteItems());

  // Function used to automatically set items to the local stage and reload the page at thr same time
  function updateLocal() {
    localStorage.setItem("books", JSON.stringify(books));
    books = JSON.parse(localStorage.getItem("books"));
  }

  //Event listener attached to the mainContent to run a function once clicked this will only run however if the clicked element has a class name of delete the classList method however allows us to select multiple elements with the class of delete so it listens to multiple buttons. The function also contains another function called deleteItems. Which will remove single items the function will however delete items woth a certain value.
  mainContent.addEventListener("click", function () {
    if (event.target.classList.contains("delete")) {
      deleteItem(event.target.value);
    }
  });

  //
  function editItem() {
    adminOnLoad();
    updateLocal();
  }

  //
  // mainContent.addEventListener("click", function () {
  //   if (event.target.classList.contains("edit")) {
  //     editItem(event.target.value);
  //   }
  // });

  //
  function addItem() {
    adminOnLoad();
    updateLocal();
  }

  //
  // mainContent.addEventListener("click", function () {
  //   if (event.target.classList.contains("add")) {
  //     addItem(event.target.value);
  //   }
  // });

  // Assigning the value of the products array as single values
  mainContent.innerHTML = products.join("");
  // Running to see whether the function is running
  console.log("Im a working function");
};

// Declaring a variable called products the .map method will make each items of the array into its own value which will then be return in the form stored in the template literals
products = books.map(function (item, index) {
  return `
      <tr>
          <td style="width:5%;">${index + 1}</td>
          <td style="width:5%;">${item.name}</td>
          <td style="width:5%;">Volume ${item.volume}</td>
          <td style="width:5%;">${item.author}</td>
          <td style="width:5%;">${item.type}</td>
          <td style="width:5%;">${item.genre}</td>
          <td style="12.5%">${item.synopsis}</td>
          <td style="width:12.5%;"><img src=${item.url}></td>
          <td style="width:5%;">R${item.price}</td>
          <td style="width:5%;">QTY:${item.stock}</td>
          <td style="width:5%;">QTY:${item.quantity}</td>
          <td style="width:5%;"><button class="edit" value="${index}">EDIT</button></td>
          <td style="width:5%;"><button class="delete" value="${index}">X</button></td>
      </tr>
    `;
});

// Defining the selected element as a variable
const searchBar = document.querySelector(".search");

// Function used to search for a particular item
function searchItem() {
  // Assigning a variable with the value entered into the input
  let searchValue = searchBar.value.toLowerCase();
  // Conditional statement that will be executed when the value of an input is no longer empty
  if (searchValue !== "") {
    // Assigning a variable with the value of an array that has been filtered by checking whether or not the name of the object in the array matches/includes data of the value entered into the searchValue
    const filteredBooks = books.filter((book) =>
      book.name.toLowerCase().includes(searchValue)
    );
    // Reassigning the values stored within the page with the filtered books after the search
    adminOnLoad(filteredBooks);
  } else {
    // Error message if criteria not met
    mainContent.innerHTML = `
    <tr>
      <td colspan = "12">
        <h1 class="display-1 text-center text-danger">Item not found!</h1>
      </td>
    </tr>
    `;
  }
}

// Event listener that will target the searchItem function expression to run as soon as a value is inputted into the searchBar
searchBar.addEventListener("input", () => searchItem());

//Selected element from the document stored as an array
const sortBtnA = document.querySelector(".sortA");

//Selected element from the document stored as an array
//
const sortBtnD = document.querySelector(".sortD");

// Function expression to the values of an array by price key/property in ascending order
function sortItemsAscending() {
  books.sort((a, b) => a.price - b.price);
  adminOnLoad();
}

// // Function expression to the values of an array by price key/property in ascending order
function sortItemsDescending() {
  books.sort((a, b) => b.price - a.price);
  adminOnLoad();
}

// Runs once the button is clicked
sortBtnA.addEventListener("click", () => sortItemsAscending());

// // Runs once the button is clicked

sortBtnD.addEventListener("click", () => sortItemsDescending());
