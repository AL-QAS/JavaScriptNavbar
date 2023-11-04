const selectElement = (selector) =>{
    const element = document.querySelector(selector);
    if(element){
        return element
    } else{
        throw new Error(`something is wrong with the ${selector} chosen`)
    }
}

//openm & close menu

const menuIcon = selectElement("#menu-icon");
const menu = selectElement("#menu");

function menuToggle () {
    menu.classList.toggle("activated");
    menuIcon.classList.toggle("activated");
}

menuIcon.addEventListener("click", menuToggle)