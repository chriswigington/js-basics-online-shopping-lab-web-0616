var cart = [];

function setCart(newCart) {
  cart = newCart;
}

// done
function getCart() {
  return cart;
}

// done
function addToCart(item_name) {
  var price = Math.floor(Math.random() * 100)
  var object = { [item_name]: price}
  cart.push(object)
  console.log(`${item_name} has been added to your cart.`)
  return cart
}

function removeFromCart(item_name) {
  not_in_cart = true;
  for (var i = 0; i < cart.length; i++) {
    var object = cart[i];
    if (Object.keys(object)[0] === item_name){
      cart.splice(i, 1);
      in_cart = false;
    }
  }
  if (not_in_cart) {
    console.log("That item is not in your cart.");
  }
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return "Your shopping cart is empty."
  } else {
    var string = "In your cart, you have";
    for (var i = 0; i < cart.length; i++) {
      var object = cart[i];
      var item_name = Object.keys(object)[0];
      var price = object[item_name]
      string = string.concat(` ${item_name} at $${price}`);
      if (i < cart.length - 1) {
        string = string.concat(",");
      } else {
        string = string.concat(".");
      }
    }
    console.log(string);
    return string;
  }
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function placeOrder(cc_info) {
  if (cc_info === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card 123.`);
    setCart([]);
  }
}
