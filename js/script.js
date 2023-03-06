let btnPlusAll = document.querySelectorAll('.qty-plus');
let btnMinusAll = document.querySelectorAll('.qty-minus');
let addButton = document.querySelector('#add_button');

btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
btnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});

addButton.addEventListener('click', addArticle);

function increaseQuantity(){
    this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1;    
    subtotal();
}

function decreaseQuantity(){
    if(document.querySelector('.qty').value > 0){
        document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value) - 1;
        subtotal();
    }    
}

function subtotal(){
    let price = parseInt(document.querySelector('.price').innerText);
    let qty = parseInt(document.querySelector('.qty').value);
    let subt = price*qty;

    document.querySelector('.subtotal').innerText = subt + ' fr';
}

function addArticle(){
    let name = document.querySelector('#name_product');
    let price = document.querySelector('#price_product');
    
    document.querySelector('#all_products').innerHTML = document.querySelector('#all_products').innerHTML + '<tr><td class="article--name"><div style="margin-right:1rem"><img src=""></div> <div><h3>' + name.value + '<h3/> <a class="remove" id="1">Supprimer</a></div></td><td class="quantity"><button class="qty-minus" id="1">-</button><input type="text" readonly placeholder="Unit price"  class="qty" value="1" ><button class="qty-plus" id="1">+</button></td><td class="price">'+ price.value +' fr' + '</td><td class="subtotal">'+ price.value +' fr' + '</td></tr>'
    loadNewElement();
}

function loadNewElement(){
    let btnPlusAll = document.querySelectorAll('.qty-plus');
    let btnMinusAll = document.querySelectorAll('.qty-minus');

    btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)});
    btnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)});

}