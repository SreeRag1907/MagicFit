const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    image:
      "https://kurukkan.in/cdn/shop/files/MOD06038_b88b6137-13b6-47e9-ac9c-e15de4cb9dd3.jpg?v=1709188973&width=493",
    price: 19.99,
    sizes: {
      S: { chest: 91, neck: 39, shoulder: 46, waist: 76, armLength: 58 },
    },
    defaultSize: "S",

    fitPreference: ["Regular", "Slim"],
  },
  {
    id: 2,
    name: "Casual Denim Shirt",
    image:
      "https://www.jiomart.com/images/product/original/rvdlikzxjb/18-_024_denim-shirt-men-s-denim-cutaway-collar-slim-fit-half-sleeve-casual-shirt-blue-3x-large-product-images-rvdlikzxjb-0-202303110647.jpg?im=Resize=(600,750)",
    price: 39.99,
    sizes: {
      M: { chest: 97, neck: 40.5, shoulder: 46, waist: 82, armLength: 59 },
    },
    defaultSize: "M",

    fitPreference: ["Regular", "Slim", "Relaxed"],
  },
  {
    id: 3,
    name: "Graphic Print T-Shirt",
    image:
      "https://veirdo.in/cdn/shop/files/07_c777cb07-bdb7-4ed2-8dc0-df264fae37e1.jpg?v=1717406989&width=360",
    price: 24.99,
    sizes: {
      S: { chest: 90, neck: 38, shoulder: 45, waist: 75, armLength: 57 },
    },
    defaultSize: "S",

    fitPreference: ["Regular", "Slim"],
  },
  {
    id: 4,
    name: "Short Sleeve Button-Up",
    image: "https://m.media-amazon.com/images/I/814dW847ykL._SY550_.jpg",
    price: 29.99,
    sizes: {
      XXL: { chest: 111, neck: 43, shoulder: 50, waist: 96, armLength: 32 },
    },
    defaultSize: "XXL",

    fitPreference: ["Regular", "Slim", "Relaxed"],
  },
  {
    id: 5,
    name: "Lightweight Hoodie",
    image: "https://m.media-amazon.com/images/I/81nKdsCpsTL._SX522_.jpg",
    price: 49.99,
    sizes: {
      L: { chest: 102, neck: 41, shoulder: 47, waist: 87, armLength: 61 },
    },
    defaultSize: "L",

    fitPreference: ["Regular", "Relaxed"],
  },
  {
    id: 6,
    name: "Knitted Sweater",
    image:
      "https://images.bestsellerclothing.in/data/JJ/27-june-2023/255066902_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
    price: 59.99,
    sizes: {
      XXL: { chest: 111, neck: 43, shoulder: 50, waist: 96, armLength: 63 },
    },
    defaultSize: "XXL",

    fitPreference: ["Regular", "Slim"],
  },
  {
    id: 7,
    name: "Plaid Flannel Shirt",
    image:
      "https://m.media-amazon.com/images/I/41SEIEsYdoL._SX300_SY300_QL70_FMwebp_.jpg",
    price: 34.99,
    sizes: {
      S: { chest: 90, neck: 38, shoulder: 45, waist: 75, armLength: 58 },
    },
    defaultSize: "S",

    fitPreference: ["Regular", "Relaxed"],
  },
  {
    id: 8,
    name: "Polo T-Shirt",
    image: "https://m.media-amazon.com/images/I/51K0XmUVDPL._SX522_.jpg",
    price: 29.99,
    sizes: {
      M: { chest: 96, neck: 40, shoulder: 47, waist: 81, armLength: 29 },
    },
    defaultSize: "M",

    fitPreference: ["Regular", "Slim"],
  },
  {
    id: 9,
    name: "Basic Crew Neck T-Shirt",
    image: "https://m.media-amazon.com/images/I/610N1pajwKL._SX522_.jpg",
    price: 19.99,
    sizes: {
      XL: { chest: 105, neck: 41, shoulder: 48, waist: 90, armLength: 60 },
    },
    defaultSize: "XL",

    fitPreference: ["Regular", "Slim"],
  },
  {
    id: 10,
    name: "Bamboo Fabric T-Shirt",
    image: "https://m.media-amazon.com/images/I/61NbaG5eNBL._SX679_.jpg",
    price: 34.99,
    sizes: {
      XXL: { chest: 111, neck: 43, shoulder: 50, waist: 96, armLength: 62 },
    },
    defaultSize: "XXL",

    fitPreference: ["Regular", "Slim"],
  },
  {
    id: 11,
    name: "Hawaiian Print Shirt",
    image: "https://m.media-amazon.com/images/I/814do9FVbDL._SY679_.jpg",
    price: 39.99,
    sizes: {
      XXL: { chest: 112, neck: 43.5, shoulder: 49, waist: 97, armLength: 32 },
    },
    defaultSize: "XXL",

    fitPreference: ["Regular", "Relaxed"],
  },
  {
    id: 12,
    name: "Activewear Training Shirt",
    image: "https://m.media-amazon.com/images/I/61Y7GT5qxuL._SX679_.jpg",
    price: 29.99,
    sizes: {
      M: { chest: 95, neck: 39, shoulder: 46, waist: 80, armLength: 58 },
    },
    defaultSize: "M",

    fitPreference: ["Slim", "Regular"],
  },
  {
    id: 13,
    name: "Warm Winter Jacket",
    image: "https://m.media-amazon.com/images/I/71++HKtV9aL._SY550_.jpg",
    price: 89.99,
    sizes: {
      S: { chest: 92, neck: 39, shoulder: 45, waist: 77, armLength: 60 },
    },
    defaultSize: "S",

    fitPreference: ["Regular", "Relaxed"],
  },
  {
    id: 14,
    name: "Stylish Bomber Jacket",
    image: "https://m.media-amazon.com/images/I/51gaACg68DL._SY679_.jpg",
    price: 79.99,
    sizes: {
      XL: { chest: 106, neck: 42, shoulder: 49, waist: 91, armLength: 62 },
    },
    defaultSize: "XL",

    fitPreference: ["Regular", "Slim"],
  },
  {
    id: 15,
    name: "Denim Jacket",
    image: "https://m.media-amazon.com/images/I/61zXf1BClKL._SY679_.jpg",
    price: 69.99,
    sizes: {
      XXL: { chest: 110, neck: 42, shoulder: 49, waist: 95, armLength: 62 },
    },
    defaultSize: "XXL",

    fitPreference: ["Regular", "Slim", "Relaxed"],
  },
  {
    id: 16,
    name: "Oversized Baggy Fit",
    image: "https://m.media-amazon.com/images/I/61MPGbBpC3L._SY679_.jpg",
    price: 29.99,
    sizes: {
      S: { chest: 91, neck: 39, shoulder: 46, waist: 76, armLength: 58 },
    },
    defaultSize: "S",

    fitPreference: ["Oversized", "Relaxed"],
  },
  {
    id: 17,
    name: "Cotton Linen Blend Shirt",
    image: "https://m.media-amazon.com/images/I/41QcAdFdjtL.jpg",
    price: 49.99,
    sizes: {
      M: { chest: 97, neck: 40.5, shoulder: 46, waist: 82, armLength: 59 },
    },
    defaultSize: "M",

    fitPreference: ["Regular", "Relaxed"],
  },
  {
    id: 18,
    name: "Soft Touch Sweater",
    image: "https://m.media-amazon.com/images/I/81EHEXU10bL._SY679_.jpg",
    price: 54.99,
    sizes: {
      M: { chest: 96, neck: 40, shoulder: 47, waist: 81, armLength: 60 },
    },
    defaultSize: "M",

    fitPreference: ["Regular", "Slim"],
  },
  {
    id: 19,
    name: "Relaxed Fit Chino Shirt",
    image: "https://m.media-amazon.com/images/I/71-biZIoTkL._SX522_.jpg",
    price: 39.99,
    sizes: {
      M: { chest: 95, neck: 39, shoulder: 46, waist: 80, armLength: 59 },
      
    },
    defaultSize: "M",

    fitPreference: ["Relaxed", "Regular"],
  },
  {
    id: 20,
    name: "Performance Sports Tee",
    image: "https://m.media-amazon.com/images/I/61zfo184NoL._SX679_.jpg",
    price: 34.99,
    sizes: {
      S: { chest: 92, neck: 39, shoulder: 45, waist: 77, armLength: 57 },
    },
    defaultSize: "S",

    fitPreference: ["Slim", "Regular"],
  },
];

export default products;
