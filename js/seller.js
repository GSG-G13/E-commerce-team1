// Open and close popup (add product form)
let addProduct = document.querySelector(".add-product");
let form = document.querySelector(".add-product-form");
let closeIcon = document.querySelector(".close-icon");
addProduct.addEventListener("click", () => {
  form.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  form.style.display = "none";
});
// Create Product
let productName = document.querySelector(".product-name-input");
let productDetails = document.querySelector(".product-details-input");
let productImg = document.querySelector(".product-img-input");
let productPrice = document.querySelector(".product-price-input");
let productCategory = document.querySelector(".select-category");
let submitProduct = document.querySelector(".submit-product");
let productsDiv = document.querySelector(".products");
let products = [];
if (localStorage.getItem("product")) {
  products = JSON.parse(localStorage.getItem("product"));
  createElements(products);
}
submitProduct.addEventListener("click", () => {
  productsDiv.innerHTML = "";
  createProduct();
});
function createProduct() {
  let productNameValue = productName.value;
  let productDetailsValue = productDetails.value;
  let productImgValue = productImg.value;
  let productPriceValue = productPrice.value;
  let productCategoryValue = productCategory.value;
  const product = {
    id: Date.now(),
    name: productNameValue,
    description: productDetailsValue,
    image: productImgValue,
    price: productPriceValue,
    category: productCategoryValue,
  };
  products.push(product);
  console.log(products, "jjj");
  localStorage.setItem("product", JSON.stringify(products));
  createElements(products);
}
function createElements(products) {
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
    let deleteEdit = document.createElement("div");
    deleteEdit.className = "delete-edit";
    productDetailsDiv.appendChild(deleteEdit);

    let editDiv = document.createElement("div");
    editDiv.className = "edit";
    let editSvgIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    let editPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    editSvgIcon.setAttribute("viewBox", "0 0 512 512");
    editPath.setAttribute(
      "d",
      "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
    );
    editSvgIcon.appendChild(editPath);
    editDiv.appendChild(editSvgIcon);
    deleteEdit.appendChild(editDiv);
    deleteEdit.appendChild(editDiv);
    //delete icon
    let deleteDiv = document.createElement("div");
    deleteDiv.addEventListener("click", () => deleteProduct(el.id));
    deleteDiv.className = "delete";
    deleteEdit.appendChild(deleteDiv);
    let deleteSvgIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    let deletePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    deleteSvgIcon.setAttribute("viewBox", "0 0 448 512");
    deletePath.setAttribute(
      "d",
      "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
    );
    deleteSvgIcon.appendChild(deletePath);
    deleteDiv.appendChild(deleteSvgIcon);
    deleteEdit.appendChild(deleteDiv);
    productDetailsDiv.appendChild(deleteEdit);
  });
}
function deleteProduct(id) {
  let update = JSON.parse(window.localStorage.getItem("product"));
  let updatedProducts = deleteElements(update, id);
  window.localStorage.setItem("product", JSON.stringify(updatedProducts));
  products = updatedProducts;
  createElements(products);
}
