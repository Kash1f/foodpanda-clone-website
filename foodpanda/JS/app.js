//declaring variables
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

//listing products

let products = [
        {
            id: 1,
            name: 'Agha Juice',
            image: '1.jpg',
            price: 'Rs ' + 450
        },
        {
            id: 2,
            name: "Ghousia",
            image: '../image/ghousia.jpg',
            price: 'Rs ' + 1200
        },
        {
            id: 3,
            name: "McDonald's",
            image: '../image/5.jpg',
            price: 'Rs ' + 800
        },
        {
            id: 4,
            name: 'Subway',
            image: '3.jpg',
            price: 'Rs ' + 650
        },
        {
            id: 5,
            name: 'Hardees',
            image: '4.jpg',
            price: 'Rs ' + 3000
        },
        {
            id: 6,
            name: 'Soda Stream',
            image: '../image/sodastream.jpg',
            price: 'Rs ' + 700
        },
        {
            id: 7,
            name: 'Agha Juice',
            image: '1.jpg',
            price: 'Rs ' + 450
        },
        {
            id: 8,
            name: "Zam Zam Foods",
            image: '../image/zamzam.jpg',
            price: 'Rs ' + 1200
        },
        {
            id: 9,
            name: 'Subway',
            image: '3.jpg',
            price: 'Rs ' + 650
        },
        {
            id: 10,
            name: "Mehran Ice Cream",
            image: '../image/mehran.jpg',
            price: 'Rs ' + 400
        },
        {
            id: 11,
            name: 'Hardees',
            image: '4.jpg',
            price: 'Rs ' + 3000
        },
        {
            id: 12,
            name: 'KFC',
            image: '6.jpg',
            price: 'Rs ' + 700
        },
        
];
let listCards  = [];

//function to create items
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();

//function to add items

function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

//function to reload items
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
                `;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

//function to change quantity
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

//end