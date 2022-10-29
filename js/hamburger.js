

export const hamburgerMenu = ()=>{
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click",()=>{
        hamburger.classList.toggle("active")
        hamburger.setAttribute("src","../assets/images/icon-close.svg")
        navMenu.classList.toggle("active")
    })
};