
const products = [
    {
      id: 0,
      name: "Skateboard 1",
      price: 29.99,
      instock: 100,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "https://i.postimg.cc/25hLDyz7/2507643.jpg",
    },
    {
      id: 1,
      name: "Skateboard 2",
      price: 24.99,
      instock: 43,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "https://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpg",
    },
    {
      id: 2,
      name: "Skateboard 3",
      price: 19.99,
      instock: 10,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "https://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpg",
    },
    {
      id: 3,
      name: "Skateboard 4",
      price: 25.99,
      instock: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "https://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpg",
    },
    {
      id: 4,
      name: "Skateboard 5",
      price: 29.99,
      instock: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "https://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpg",
    },
    {
      id: 5,
      name: "Skateboard 6",
      price: 39.99,
      instock: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
      imgSrc: "https://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpghttps://i.postimg.cc/25hLDyz7/2507643.jpg",
    },
  ];
  
  // SELECT ELEMENTS
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// RENDER PRODUCTS
function renderProdcuts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}" alt="${product.name}">
                    </div>
                    <div class="desc">
                        <h2>${product.name}</h2>
                        <h2>R${product.price}</h2>
                        <p>
                            ${product.description}
                        </p>
                    </div>
                    <div class="add-to-cart" onclick="addToCart(${product.id})">
                        <button class="add-to-cart">Add to cart</button>
                    </div>
                </div>
            </div>
        `;
  });
}
renderProdcuts();

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
// updateCart();

// ADD TO CART
function addToCart(id) {
  // check if product already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): R${totalPrice.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItems;
}

// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                <small>R</small>${item.price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
        </div>
      `;
  });
}

// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}
