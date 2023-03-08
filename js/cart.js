let btnPlus = document.querySelectorAll(".btn_plus");
let btnMinus = document.querySelectorAll(".btn_minus");
let count = document.querySelectorAll(".count");
let Price = document.querySelectorAll(".Price");
let totalPrice = document.querySelectorAll(".total");
let listProduct = document.querySelectorAll(".list_product");
let cancel = document.querySelectorAll(".cancel");

// loop on btn plus
btnPlus.forEach((ele, index) => {
  totalPrice[index].textContent = 0;
  let priceNumber = Number(Price[index].textContent);

  let counter = 0;
  ele.addEventListener("click", (e) => {
    counter++;
    count[index].textContent = counter;
    let total = counter * priceNumber;
    // add total price to subtotal
    totalPrice[index].textContent = total;
    // let arr = JSON.stringify(total);
    // localStorage.setItem("totalPrice", total);
  });

  // loop on btn minus
  btnMinus[index].addEventListener("click", (e) => {
    if (counter > 0) {
      counter--;
      count[index].textContent = counter;
      let total = counter * priceNumber;
      // add total price to subtotal
      totalPrice[index].textContent = total;
      //   localStorage.setItem("totalPrice", total);
    }
  });
});

// loop on the element cancel and remove ul

cancel.forEach((ele, index) => {
  ele.addEventListener("click", (e) => {
    listProduct[index].style.display = "none";

    localStorage.setItem("display", listProduct[index].style.display);

    if (localStorage.getItem("display")) {
      console.log(localStorage.getItem("display"));
      listProduct[index].style.display = localStorage.getItem("display");
    }
  });
});
