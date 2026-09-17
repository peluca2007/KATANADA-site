let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container"); 
let items = document.querySelectorAll(".list .item");
let indicator = document.querySelector(".indication");
let dots = document.querySelectorAll(".indication ul li");
let numberDisplay = document.querySelector(".number"); 

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
   
    let itemOld = document.querySelector(".list .item.active");
    itemOld.classList.remove("active");

    let dotOld = document.querySelector(".indication ul li.active");
    dotOld.classList.remove("active");


    items[active].classList.add("active");
    dots[active].classList.add("active");

    
    numberDisplay.innerHTML = `0${active + 1}`;
}


nextButton.onclick = () => {
   
    active = active + 1 > lastPosition ? firstPosition : active + 1;
    setSlider(); 
};

// Botão de Voltar
prevButton.onclick = () => {
 
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSlider(); 
};