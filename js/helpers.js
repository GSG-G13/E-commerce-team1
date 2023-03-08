function deleteElements(arr, id) {
  return arr.filter((product) => product.id != id);
}

function filterByCategory(array, inputValue) {
  let filteredArr = array.filter((p) =>
    p.category.toLowerCase().includes(inputValue.toLowerCase())
  );
  return filteredArr;
}
function addProductElement(array, product) {
  array.push(product);
  return array;
}
module.exports = { deleteElements, filterByCategory, addProductElement };
