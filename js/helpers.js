function filterElements(arr, id) {
  return arr.filter((product) => product.id != id);
}

module.exports = filterElements;
