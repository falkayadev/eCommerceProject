const products = [
  {
    id: 0,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$782",
    star: 5,
    src: "img/products/f1.jpg",
    isNew: false,
  },
  {
    id: 1,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$781",
    star: 5,
    src: "img/products/f2.jpg",
    isNew: false,
  },
  {
    id: 2,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$783",
    star: 5,
    src: "img/products/f3.jpg",
    isNew: false,
  },
  {
    id: 3,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$784",
    star: 5,
    src: "img/products/f4.jpg",
    isNew: false,
  },
  {
    id: 4,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$785",
    star: 5,
    src: "img/products/f5.jpg",
    isNew: false,
  },
  {
    id: 5,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$786",
    star: 5,
    src: "img/products/f6.jpg",
    isNew: false,
  },
  {
    id: 6,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$787",
    star: 5,
    src: "img/products/f7.jpg",
    isNew: false,
  },
  {
    id: 7,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$788",
    star: 5,
    src: "img/products/f8.jpg",
    isNew: false,
  },
  {
    id: 8,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$789",
    star: 5,
    src: "img/products/n1.jpg",
    isNew: true,
  },
  {
    id: 9,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$790",
    star: 5,
    src: "img/products/n2.jpg",
    isNew: true,
  },
  {
    id: 10,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$791",
    star: 5,
    src: "img/products/n3.jpg",
    isNew: true,
  },
  {
    id: 11,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$792",
    star: 5,
    src: "img/products/n4.jpg",
    isNew: true,
  },
  {
    id: 12,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$793",
    star: 5,
    src: "img/products/n5.jpg",
    isNew: true,
  },
  {
    id: 13,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$794",
    star: 5,
    src: "img/products/n6.jpg",
    isNew: true,
  },
  {
    id: 14,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$795",
    star: 5,
    src: "img/products/n7.jpg",
    isNew: true,
  },
  {
    id: 15,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$7",
    star: 5,
    src: "img/products/n8.jpg",
    isNew: true,
  },
];

let smallProducts = [];
const featuredProductsSection = document.getElementById("featured-products");
const newArrivalsSection = document.getElementById("new-arrivals");
const proDetailsSection = document.getElementById("pro-details");
const shopProductsSection = document.getElementById("shop-products");

function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

const renderFeaturedProducts = (arr = products) => {
  const oldFashionProducts = products.filter(
    (product) => product.isNew === false
  );
  featuredProductsSection.innerHTML = "";
  oldFashionProducts.forEach((item) => {
    featuredProductsSection.innerHTML += `
    <div class="pro" id="product-${item.id}" onclick="setCurrentProduct(this)">
          <img src="${item.src}" alt="fast product 1" />
          <div class="des">
            <span>adidas</span>
            <h5>Cartoon Astronaut T-Shirts</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>${item.price}</h4>
          </div>
          <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
        </div>
    `;
  });
};

const renderNewArrivals = (arr = products) => {
  const newFashionProducts = products.filter(
    (product) => product.isNew === true
  );

  newFashionProducts.forEach((item) => {
    newArrivalsSection.innerHTML += `
    <div class="pro" id="product-${item.id}">
          <img src="${item.src}" alt="fast product 1" />
          <div class="des">
            <span>adidas</span>
            <h5>Cartoon Astronaut T-Shirts</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>${item.price}</h4>
          </div>
          <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
        </div>
    `;
  });
};

const renderProDetails = () => {
  const current = JSON.parse(localStorage.getItem("current"));

  const setSmallProducts = (obj) => {
    obj.push(current);
    while (obj.length < 4) {
      const newObj = products[getRandomIndex(products.length - 1)];
      let isIdExist = obj.some((o) => o.id === newObj.id);
      if (!isIdExist) {
        obj.push(newObj);
      }
    }
  };

  setSmallProducts(smallProducts);

  proDetailsSection.innerHTML = `<div class="single-pro-image">
  <img src="${current.src}" width="100%" id="main-image" />
  <div class="small-img-group">
    <div class="small-img-col" id="product-${smallProducts[0].id}" onclick="setCurrentProduct(this)">
      <img src="${smallProducts[0].src}" width="100%" class="small-img" />
    </div>
    <div class="small-img-col" id="product-${smallProducts[1].id}" onclick="setCurrentProduct(this)">
      <img src="${smallProducts[1].src}" width="100%" class="small-img" />
    </div>
    <div class="small-img-col" id="product-${smallProducts[2].id}" onclick="setCurrentProduct(this)">
      <img src="${smallProducts[2].src}" width="100%" class="small-img" />
    </div>
    <div class="small-img-col" id="product-${smallProducts[3].id}" onclick="setCurrentProduct(this)">
      <img src="${smallProducts[3].src}" width="100%" class="small-img" />
    </div>
  </div>
</div>
<div class="single-pro-details">
  <h6>Home / T-Shirt</h6>
  <h4>${current.title}</h4>
  <h2>${current.price}</h2>
  <select>
    <option>Select Size</option>
    <option>Small</option>
    <option>Medium</option>
    <option>Large</option>
    <option>XL</option>
    <option>XXL</option>
  </select>

  <input type="number" value="1" />
  <button class="normal">Add To Cart</button>
  <h4>Product Details</h4>
  <span
    >The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz.
    per sq. yd. fabric constructed from 100% cotton, this classic fit
    preshrunk jersey knit provides unmatched comfort with each wear.
    Featuring a taped neck and shoulder, and a seamless double-needle
    collar, and available in a range of colors, it offers it all in the
    ultimate head-turning package.</span
  >
</div>`;
};

const renderShopProducts = () => {
  products.forEach((item) => {
    shopProductsSection.innerHTML += `
    <div class="pro" id="product-${item.id}" onclick="setCurrentProduct(this)">
    <img src=${item.src} alt="fast product 8" />
    <div class="des">
      <span>${item.brand}</span>
      <h5>${item.title}</h5>
      <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <h4>${item.price}</h4>
    </div>
    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
  </div>`;
  });
};

const setCurrentProduct = (product) => {
  const productId = product.id.split("-")[1];
  const current = products.filter((item) => item.id === parseInt(productId));
  currentProduct = current[0];
  localStorage.setItem("current", JSON.stringify(currentProduct));
  window.location.href = "sproduct.html";
  renderProDetails();
};

const changeMainImg = () => {
  let mainImg = document.getElementById("main-image");
  let smallImg = document.getElementsByClassName("small-img");

  smallImg = Array.from(smallImg);

  smallImg.forEach((item) => {
    item.addEventListener("click", () => {
      mainImg.src = item.src;
    });
  });
};

// RUN

if (window.location.pathname === "/index.html") {
  renderFeaturedProducts();
  renderNewArrivals();
}

if (window.location.pathname === "/sproduct.html") {
  renderProDetails();
  changeMainImg();
}

if (window.location.pathname === "/shop.html") {
  renderShopProducts();
}
