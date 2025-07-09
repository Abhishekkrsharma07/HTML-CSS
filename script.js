let cart = [];
let watchLater = [];

function addToCart(product) {
  if (!cart.includes(product)) {
    cart.push(product);
    updateCartCount();
    alert(product + " added to cart!");
  } else {
    alert(product + " is already in cart.");
  }
}

function addToWatchLater(product) {
  if (!watchLater.includes(product)) {
    watchLater.push(product);
    updateWatchCount();
    alert(product + " saved to Watch Later!");
  } else {
    alert(product + " is already in Watch Later.");
  }
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

function updateWatchCount() {
  document.getElementById('watch-count').textContent = watchLater.length;
}

function viewCart() {
  alert("Cart contains: " + (cart.length ? cart.join(", ") : "nothing"));
}

function viewWatchLater() {
  alert("Watch Later list: " + (watchLater.length ? watchLater.join(", ") : "nothing"));
}
