let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'SELGA wafers',
        tag: '01',
        price: 9,
        inCart: 0
    },
    {
        name: 'Jaunpils curd 9%',
        tag: '02',
        price: 20,
        inCart: 0
    },
    {
        name: 'Smoked&nbsp;cheese&nbsp;sausage',
        tag: '03',
        price: 30,
        inCart: 0
    },
        {
        name: 'Medalus&nbsp;Original&nbsp;beer',
        tag: '04',
        price: 40,
        inCart: 0
    },
        {
        name: 'Sweet&nbsp;curd&nbsp;cheese&nbsp;with&nbsp;caramel',
        tag: '05',
        price: 7,
        inCart: 0
    },
        {
        name: 'RIGA&nbsp;BLACK&nbsp;BALSAM&nbsp;blackcurrant',
        tag: '06',
        price: 250,
        inCart: 0
    },
        {
        name: 'TIGERS&nbsp;Cooked&nbsp;sausage&nbsp;for&nbsp;kids',
        tag: '07',
        price: 30,
        inCart: 0
    },
        {
        name: 'Jubilejas&nbsp;Sausage',
        tag: '08',
        price: 35,
        inCart: 0
    },
        {
        name: 'Asorti&nbsp;sweets',
        tag: '09',
        price: 50,
        inCart: 0
    },
        {
        name: 'VIČI&nbsp;Crispy&nbsp;fish',
        tag: '10',
        price: 25,
        inCart: 0
    },
        {
        name: 'RIGAS&nbsp;BRUT&nbsp;Sparkling&nbsp;wine',
        tag: '11',
        price: 59,
        inCart: 0
    },
        {
        name: 'Cabanos&nbsp;sausages',
        tag: '12',
        price: 25,
        inCart: 0
    },
        {
        name: 'Valmiermuižas&nbsp;dark&nbsp;beer',
        tag: '13',
        price: 70,
        inCart: 0
    },
        {
        name: 'Yzwiecka&nbsp;turkey&nbsp;meat',
        tag: '14',
        price: 17,
        inCart: 0
    },
        {
        name: 'Mici&nbsp;extra',
        tag: '15',
        price: 9,
        inCart: 0
    },
        {
        name: 'Egri&nbsp;bikavér',
        tag: '16',
        price: 167,
        inCart: 0
    },
        {
        name: 'Egri&nbsp;bikavér&nbsp;dry&nbsp;wine',
        tag: '17',
        price: 60,
        inCart: 0
    },
        {
        name: 'Иван&nbsp;cheese',
        tag: '18',
        price: 125,
        inCart: 0
    },
        {
        name: 'Gyulai&nbsp;tradidional&nbsp;sausage',
        tag: '19',
        price: 125,
        inCart: 0
    },
        {
        name: 'KĀRUMS&nbsp;sweet&nbsp;chocolate&nbsp;curd&nbsp;cheese',
        tag: '20',
        price: 9,
        inCart: 0
    },
    
    {
        name: 'Cozomac&nbsp;sweet&nbsp;pastry',
        tag: '21',
        price: 30,
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
                    <img src="../files/products/${item.tag}.png">
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
</div>
`
    }
}
onLoadCartNumbers();
displayCart();