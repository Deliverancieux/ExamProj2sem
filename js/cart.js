let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Product1',
        tag: 'product1',
        price: 167,
        inCart: 0
    },
    {
        name: 'Product2',
        tag: 'product2',
        price: 220,
        inCart: 0
    },
    {
        name: 'Product3',
        tag: 'product3',
        price: 200,
        inCart: 0
    }

];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.nav_item span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.nav_item span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.nav_item span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }


    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product){
    //console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);
    
    if(cartCost != null) {
            cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
          localStorage.setItem("totalCost", product.price)  
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    if(cartItems && productContainer) {
       productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="product">
                    <ion-icon name="close-circle-outline"></ion-icon>
                    <img src="https://via.placeholder.com/150x200">
                    <span>${item.name}</span>
                </div>
                <div class="price">${item.price},00</div>
                <div class="quantity">
<ion-icon name="remove-circle-outline"></ion-icon>
<span>${item.inCart}</span>
<ion-icon name="add-circle-outline"></ion-icon>
</div>
<div class="total">
${item.inCart * item.price},00
</div>
`;
        });
        productContainer.innerHTML +=`
<div class="basketTotalContainer">
<h4 class="basketTotalTitle">Total:&nbsp</h4>
<h4 class="basketTotal">${cartCost},00</h4>
<a class="checkout" href="#">Checkout</a>
</div>
`
    }
}
onLoadCartNumbers();
displayCart();