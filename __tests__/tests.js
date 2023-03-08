// test("should remove item 2", () => {
//   const arr = [
//     {
//       id: 1,
//       title: "title g g g g",
//       price: 49.5,
//       image: "https://image",
//       description: "lorem",
//       category: "cat1",
//     },
//     {
//       id: 2,
//       title: "title h h h h",
//       price: 74.9,
//       image: "http://dummyimage.com/714x600.png",
//       description: "lorem2",
//       category: "cat1",
//     },
//     {
//       id: 3,
//       title: "title j j j ",
//       price: 13.5,
//       image: "http://dummyimage.com/714x600.png",
//       description: "lorem3",
//       category: "cat2",
//     },
//   ];
//   const expected = removeItem(arr, 2);
//   const actual = [
//     {
//       id: 1,
//       title: "title g g g g",
//       price: 49.5,
//       image: "https://image",
//       description: "lorem",
//       category: "cat1",
//     },
//     {
//       id: 3,
//       title: "title j j j ",
//       price: 13.5,
//       image: "http://dummyimage.com/714x600.png",
//       description: "lorem3",
//       category: "cat2",
//     },
//   ];

const filterElements = require("../js/helpers");

//   expect(expected).toEqual(actual);
// });

// function filterElements(arr, id) {
//   return arr.filter((product) => product.id != id);
// }

// [{id: 1},{id:2},{id:3}], 1

test("tests", () => {
  let actual = filterElements([{ id: 1 }, { id: 2 }, { id: 3 }], 1);
  let expected = [{ id: 2 }, { id: 3 }];
  expect(actual).toStrictEqual(expected);
});
