const products = [
  {
    id: 0,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$782",
    star: 5,
    src: "img/products/f1.jpg",
    isNew: false,
    quantity: 1,
  },
  {
    id: 1,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$781",
    star: 5,
    src: "img/products/f2.jpg",
    isNew: false,
    quantity: 1,
  },
  {
    id: 2,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$783",
    star: 5,
    src: "img/products/f3.jpg",
    isNew: false,
    quantity: 1,
  },
  {
    id: 3,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$784",
    star: 5,
    src: "img/products/f4.jpg",
    isNew: false,
    quantity: 1,
  },
  {
    id: 4,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$785",
    star: 5,
    src: "img/products/f5.jpg",
    isNew: false,
    quantity: 1,
  },
  {
    id: 5,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$786",
    star: 5,
    src: "img/products/f6.jpg",
    isNew: false,
    quantity: 1,
  },
  {
    id: 6,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$787",
    star: 5,
    src: "img/products/f7.jpg",
    isNew: false,
    quantity: 1,
  },
  {
    id: 7,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$788",
    star: 5,
    src: "img/products/f8.jpg",
    isNew: false,
    quantity: 1,
  },
  {
    id: 8,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$789",
    star: 5,
    src: "img/products/n1.jpg",
    isNew: true,
    quantity: 1,
  },
  {
    id: 9,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$790",
    star: 5,
    src: "img/products/n2.jpg",
    isNew: true,
    quantity: 1,
  },
  {
    id: 10,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$791",
    star: 5,
    src: "img/products/n3.jpg",
    isNew: true,
    quantity: 1,
  },
  {
    id: 11,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$792",
    star: 5,
    src: "img/products/n4.jpg",
    isNew: true,
    quantity: 1,
  },
  {
    id: 12,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$793",
    star: 5,
    src: "img/products/n5.jpg",
    isNew: true,
    quantity: 1,
  },
  {
    id: 13,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$794",
    star: 5,
    src: "img/products/n6.jpg",
    isNew: true,
    quantity: 1,
  },
  {
    id: 14,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$795",
    star: 5,
    src: "img/products/n7.jpg",
    isNew: true,
    quantity: 1,
  },
  {
    id: 15,
    brand: "adidas",
    title: "Cartoon Astronaut T-Shirts",
    price: "$7",
    star: 5,
    src: "img/products/n8.jpg",
    isNew: true,
    quantity: 1,
  },
];
const shippingFee = 10;

let smallProducts = [];
const featuredProductsSection = document.getElementById("featured-products");
const newArrivalsSection = document.getElementById("new-arrivals");
const proDetailsSection = document.getElementById("pro-details");
const shopProductsSection = document.getElementById("shop-products");
const tbodyCartItems = document.getElementById("all-cart-items");
const cartSubtotal = document.getElementById("subtotal");

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
  <button class="normal" onclick="addToCart()">Add To Cart</button>
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

//SEPET AKSIYONLARI
const CART_ITEMS_KEY = "cartItems";
const CART_ITEM_COUNT_KEY = "cartItemCount";
let cartItems = JSON.parse(localStorage.getItem(CART_ITEMS_KEY)) || [];
let cartItemCount = parseInt(cartItems.length) || 0;
const tableEl = document.querySelector("#cart table");

const calculateSubtotal = (item) => {
  const priceInt = parseInt(item.price.split("$")[1]);
  return `${priceInt * item.quantity}`;
};

const calculateCartSubTotal = (cart) => {
  let cartSubTotal = 0;
  cart.forEach((item) => {
    cartSubTotal += Number(calculateSubtotal(item));
  });
  return cartSubTotal;
};

const calculateCartTotal = (cart) => {
  const cartSubTotal = calculateCartSubTotal(cart);
  return `${cartSubTotal + (cart.length === 0 ? 0 : 10)}`;
};

const updateCartItemCount = (count) => {
  document.getElementById("cart-item-count").textContent = count;
};
const saveCartToLocalStorage = () => {
  localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(cartItems));
  localStorage.setItem(CART_ITEM_COUNT_KEY, cartItemCount);
};
const addToCart = () => {
  // localStorage'dan mevcut ürünü al

  const currentProduct = JSON.parse(localStorage.getItem("current"));

  // Eğer mevcut ürün yoksa işlemi durdur
  if (!currentProduct) return;

  // Sepette aynı ürün var mı kontrol et
  const existingItem = cartItems.find((item) => item.id === currentProduct.id);

  // Eğer sepette aynı ürün varsa miktarını artır, yoksa yeni bir öğe olarak ekle
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push(currentProduct);
    cartItemCount++;
  }

  // Sepet sayısını ve localStorage'ı güncelle
  saveCartToLocalStorage();

  // Sepet ikonundaki sayıyı güncelle
  updateCartItemCount(cartItemCount);
};

const getCartItems = () => {
  if (cartItems.length === 0) {
    tableEl.innerHTML = "";
  }
  tbodyCartItems.innerHTML = "";
  cartItems.forEach((item) => {
    tbodyCartItems.innerHTML += `
    <tr id="${item.id}">
    <td>
      <a href="#"><i class="far fa-times-circle" onclick="removeCartItem(this)"></i></a>
    </td>
    <td><img src="${item.src}" /></td>
    <td>${item.title}</td>
    <td>${item.price}</td>
    <td><input type="number" value="${item.quantity}" /></td>
    <td>$${calculateSubtotal(item)}</td>
  </tr>
    `;
  });
};

const removeCartItem = (el) => {
  const productId = Number(el.parentElement.parentElement.parentElement.id);
  const filteredProducts = cartItems.filter((item) => item.id !== productId);
  cartItems = filteredProducts;
  el.parentElement.parentElement.parentElement.remove();
  cartItemCount--;
  if (cartItemCount === 0) {
    getCartItems();
  }
  getCartTotalItems(cartItems);
  saveCartToLocalStorage();
  updateCartItemCount(cartItemCount);
};

const getCartTotalItems = (cart) => {
  cartSubtotal.innerHTML = `
  <h3>Cart Totals</h3>
        <table>
          <tr>
            <td>Cart Subtotal</td>
            <td>$${calculateCartSubTotal(cart)}</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>$${cart.length === 0 ? 0 : 10}</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>$${calculateCartTotal(cart)}</strong></td>
          </tr>
        </table>
        <button class="normal">Proceed to checkout</button>`;
};

//RUN
document.addEventListener("DOMContentLoaded", function () {
  updateCartItemCount(cartItemCount);
});

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

if (window.location.pathname === "/cart.html") {
  getCartItems();
  getCartTotalItems(cartItems);
}
