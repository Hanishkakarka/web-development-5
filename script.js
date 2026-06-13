const products = [
{
name:"Nike Air Max",
price:4999,
rating:4.8,
category:"Shoes",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},

{
name:"Apple Watch",
price:24999,
rating:4.9,
category:"Electronics",
image:"https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
},

{
name:"Gaming Headphones",
price:2999,
rating:4.7,
category:"Electronics",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},

{
name:"Backpack",
price:1499,
rating:4.5,
category:"Accessories",
image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
},

{
name:"Laptop",
price:54999,
rating:4.9,
category:"Electronics",
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
},

{
name:"Sunglasses",
price:999,
rating:4.4,
category:"Accessories",
image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083"
}
];

const productContainer = document.getElementById("products");

function displayProducts(items){

productContainer.innerHTML="";

items.forEach(product=>{

productContainer.innerHTML += `
<div class="product-card">

<img src="${product.image}" loading="lazy">

<div class="product-info">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<p>⭐ ${product.rating}</p>

<p>${product.category}</p>

<button onclick="addToCart('${product.name}')">
Add To Cart
</button>

</div>

</div>
`;

});
}

displayProducts(products);

document.getElementById("search")
.addEventListener("input", function(){

const value = this.value.toLowerCase();

const filtered = products.filter(product =>
product.name.toLowerCase().includes(value)
);

displayProducts(filtered);

});

document.getElementById("category")
.addEventListener("change", function(){

const category = this.value;

if(category==="all"){
displayProducts(products);
return;
}

const filtered = products.filter(
product => product.category===category
);

displayProducts(filtered);

});

document.getElementById("sort")
.addEventListener("change", function(){

const sorted = [...products];

if(this.value==="low"){
sorted.sort((a,b)=>a.price-b.price);
}

if(this.value==="high"){
sorted.sort((a,b)=>b.price-a.price);
}

displayProducts(sorted);

});

function addToCart(name){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

cart.push(name);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert(name + " added to cart");

}

document.getElementById("themeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});