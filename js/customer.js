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

let filteredProducts = [...products];

//get elemnts from the dom
const productsContainer = document.querySelector(".products");
const searchBar = document.querySelector(".input-search");
const productContainer = document.querySelector(".product-div");
const list = document.getElementById("list");

list.addEventListener("change", (e) => {
  filteredProducts =
    list.value === "all"
      ? [...products]
      : products.filter((p) => p.category === list.value);

  console.log(list.value, filteredProducts);

  updateDom();
});

searchBar.addEventListener("input", (e) => {
  filteredProducts = e.target.value
    ? filteredProducts.filter((p) =>
        p.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    : [...products];

  updateDom();
});

function createProductElement(product) {
  return `
  <div class="product-div">
  <div class="product-details">
    <img src="${product.image}" alt="" class="product-img" />
    <div class="product-name-price">
      <p class="product-name">${product.name}</p>
      <p class="product-price">${product.price}$</p>
    </div>
    <p class="product-category">${product.category}</p>
    <p class="product-description">
      ${product.description}
    </p>
    <button class="add-to-cart">Add to Cart</button>
  </div>
</div>
  `;
}

function updateDom() {
  const plainElements = filteredProducts.map((p) => createProductElement(p));

  productsContainer.innerHTML = plainElements;
}

updateDom();
