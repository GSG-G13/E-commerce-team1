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

const {
  deleteElements,
  filterByCategory,
  addProductElement,
} = require("../js/helpers");
test("tests", () => {
  let actual = deleteElements([{ id: 1 }, { id: 2 }, { id: 3 }], 1);
  let expected = [{ id: 2 }, { id: 3 }];
  expect(actual).toStrictEqual(expected);
});

test("tests", () => {
  let actual = addProductElement([1, 2, 3], 4);
  let expected = [1, 2, 3, 4];
  expect(actual).toStrictEqual(expected);
});

test("tests", () => {
  let actual = filterByCategory(
    [
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
    ],
    "Headphones"
  );
  let expected = [
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
  expect(actual).toStrictEqual(expected);
});
