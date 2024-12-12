let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector(' .total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add( 'active' );

})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name:  'TOMATO',
        image: 'product-1.png',
        price: 12250
       
    },

    {
        id: 2,
        name:  'BERRY',
        image: 'product-2.png',
        price: 5050
     
    },

    {
        id: 3,
        name:  'ORANGE',
        image: 'product-3.png',
        price: 3250
       
    },

    {
        id: 4,
        name:  'RED APPLE',
        image: 'product-4.png',
        price: 12000
        
    },

    {
        id: 5,
        name:  'ONION',
        image: 'Onions.jpeg',
        price: 3500
       
    },

    {
        id: 6,
        name:  'CORN',
        image: 'Corn.jpeg',
        price: 1500
       
    },


    {
        id: 7,
        name:  'PRAWN CRAYFISH',
        image: 'Prawn crayfish.jpeg',
        price: 1250
       
    },
    {
        id: 8,
        name:  'PEPPER',
        image: 'Pepper.jpeg',
        price: 1200
       
    },

    {
        id: 9,
        name:  'SWEET POTATO',
        image: 'Sweet Potato.jpeg',
        price: 2000
       
    },

    {
        id: 10,
        name:  'BEANS',
        image: 'Beans.jpeg',
        price: 16000
       
    },
    
    {
        id: 11,
        name:  'RICE',
        image: 'product-5.jpg',
        price: 78000
       
    },
    {
        id: 12,
        name:  'GARRI',
        image: 'product-6.jpg',  
        price:40200
        
    },

   
];

let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
           <img src="images/${value.image}"/>
           <div class="title">${value.name}</div>
           <div class="price">${value.price.toLocaleString()}</div>
           <button onclick="addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv);

    })
    
}
initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML =`
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>${value.quantity}</div>
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
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price; 
    }
    reloadCard();
}
