

const listaGifts = document.querySelector('#gifts__cards');
const ventanaModal = document.querySelector('#modal');






//
//


cargarEventListeners();
function cargarEventListeners(){
    listaGifts.addEventListener('click', mostrarGift);
}

function mostrarGift(e){
    //e.preventDefault();
    //verifico que se haga click en el boton y leo los datos de la card
    if(e.target.classList.contains('mostrarGift')){
        const giftSeleccionado = e.target.parentElement;

        leerDatosGift(giftSeleccionado);
    }
}


function leerDatosGift(gift){

    const infoGift ={
        img: gift.querySelector('img').src,
        titulo: gift.querySelector('h2').textContent,
        precio: gift.querySelector('p').textContent,
        id: gift.querySelector('button').getAttribute('data-id')
    }
    console.log(infoGift);
}

function mostrarDatosGift(gift){
    leerDatosGift(giftSeleccionado);

}



//ventanaModal.addEventListener('click', ()=>ventanaModal.classList.remove('modal--show'));
listaGifts.addEventListener('click', ()=>ventanaModal.classList.add('modal--show'));


ventanaModal.addEventListener('click', (e)=>{
    if( e.target.classList.contains('modal') ){
        ventanaModal.classList.remove('modal--show');
    }
});