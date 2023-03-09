const products = [
  {
    name: "MAC",
    category: "Laptops",
    price: "30",
    image: "../imgs/mac.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,amet!",
  },
  {
    name: "HP",
    category: "Laptops",
    price: "30",
    image: "../imgs/HP.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,amet!",
  },
  {
    name: "iPhonex",
    category: "Mobiles",
    price: "30",
    image: "../imgs/iphone.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,amet!",
  },
  {
    name: "Nokia",
    category: "Mobiles",
    price: "30",
    image: "../imgs/nokia.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,amet!",
  },
  {
    name: "Wireless-hedphones",
    category: "Headphones",
    price: "30",
    image: "../imgs/headphones.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,amet!",
  },
  {
    name: "headphone",
    category: "Headphones",
    price: "30",
    image: "../imgs/headphones.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,amet!",
  },
];
let productsFromStorage = JSON.parse(localStorage.getItem("product"));
let filteredProducts = [...products, ...productsFromStorage];
const productsContainer = document.querySelector(".products");
const searchBar = document.querySelector(".input-search");
const productContainer = document.querySelector(".product-div");
const list = document.getElementById("list");
let productsDiv = document.querySelector(".products");
if (localStorage.getItem("product")) {
  createProductElement(filteredProducts);
}
let filterByLaptop = filteredProducts.filter((el) => el.category === "Laptops");
let filterByMobile = filteredProducts.filter((el) => el.category === "Mobiles");
let filterByHeadphones = filteredProducts.filter(
  (el) => el.category === "Headphones"
);
list.addEventListener("change", () => {
  if (list.value === "Laptops") {
    createProductElement(filterByLaptop);
    console.log(filterByLaptop);
  } else if (list.value === "Mobiles") {
    createProductElement(filterByMobile);
  } else if (list.value === "Headphones") {
    createProductElement(filterByHeadphones);
  } else {
    createProductElement(filteredProducts);
  }
});
function createProductElement(products) {
  productsDiv.innerHTML = "";
  products.forEach((el) => {
    let productDiv = document.createElement("div");
    productDiv.className = "product-div";
    let productDetailsDiv = document.createElement("div");
    productDetailsDiv.className = "product-details";
    productDiv.appendChild(productDetailsDiv);
    productsDiv.appendChild(productDiv);
    let img = document.createElement("img");
    img.setAttribute("src", el.image);
    productDetailsDiv.appendChild(img);
    let productNamePrice = document.createElement("div");
    productNamePrice.className = "product-name-price";
    productDetailsDiv.appendChild(productNamePrice);
    let productName = document.createElement("p");
    productName.textContent = el.name;
    productName.className = "product-name";
    let productPrice = document.createElement("p");
    productPrice.textContent = `$${el.price}`;
    productPrice.className = "product-price";
    productNamePrice.appendChild(productName);
    productNamePrice.appendChild(productPrice);
    let productCategory = document.createElement("p");
    productCategory.className = "product-category";
    productCategory.textContent = el.category;
    productDetailsDiv.appendChild(productCategory);
    let productDescription = document.createElement("p");
    productDescription.className = "product-description";
    productDescription.textContent = el.description;
    productDetailsDiv.appendChild(productDescription);
  });
}

searchBar.addEventListener("input", (e) => {
  filteredProducts = e.target.value
    ? filterByCategory(filteredProducts, e.target.value.toLowerCase())
    : filteredProducts;
  createProductElement(filteredProducts);
});
