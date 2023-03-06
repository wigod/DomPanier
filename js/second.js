/*alert('OKK');*/
let btnPlusAll = document.querySelectorAll('.qty-plus');
btnPlusAll.forEach((btn) => {btn.addEventListener('click', fnIncrementer)});
function fnIncrementer(){
    this.previousElementSibling.value = parseInt(this.previousElementSibling.value) +1;
   // document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value) +1;
    fnSubTotal(this);
}

let btnMinusAll = document.querySelectorAll('.qty-minus');
btnMinusAll.forEach((btn) => {btn.addEventListener('click', fnDecrementer)});

function fnDecrementer(){
    if(document.querySelector('.qty').value > 1){
        this.previousElementSibling.value = parseInt(this.previousElementSibling.value) -1;        
        fnSubTotal(this);
    }    
}

function fnSubTotal(elt){   
    let price = parseInt(elt.parentElement.nextElementSibling.innerText);
    let qty = parseInt(elt.previousElementSibling.value);
    let prixSubTotal = document.querySelector('.subtotal');
    prixSubTotal = price * qty;
    elt.parentElement.nextElementSibling.innerText = prixSubTotal + 'fr';
    
}

/*******************AJOUT ARTICLES*************************** */

let addArticle = document.querySelector('#add_button');
addArticle.addEventListener('click', fnAddArticle);

function fnAddArticle(){
    let name = document.querySelector('#name_product');
    let price = document.querySelector('#price_product');
    
    document.querySelector('#all_products').innerHTML += '<tr><td class="article--name"><div style="margin-right:1rem"><img src=""></div> <div><h3>'+ name_product.value +'<h3/> <a class="remove" id="1">Supprimer</a></div></td><td class="quantity"><button class="qty-minus" id="1">-</button><input type="text" readonly placeholder="Unit price"  class="qty" value="1" ><button class="qty-plus" id="1">+</button></td> <td class="price">' + price_product.value + ' fr' + '</td><td class="subtotal">' + price_product.value + ' fr' + '</td></tr>'
fnLoadNewElement();
}

function fnLoadNewElement(){

    let btnMinus = document.querySelector('.qty-minus');
    let btnPlus = document.querySelector('.qty-plus');

    btnMinus.addEventListener('click', fnDecrementer);
    btnPlus.addEventListener('click', fnIncrementer);s
}


