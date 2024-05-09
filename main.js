let div = document.querySelector(`.good`);
let katta = document.querySelector(`.katta`);
let kichik = document.querySelector(`.kichik`);


div.addEventListener(`click`,()=>{
    if(kichik.classList.contains(`new`)){
        kichik.classList.remove(`new`);
        katta.classList.add(`new`);
    } else{
        kichik.classList.add(`new`);
        katta.classList.remove(`new`);
    }
});