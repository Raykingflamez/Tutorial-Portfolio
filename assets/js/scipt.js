// GET ACCESS TO THE NAVBAR FROM THE HTML
const navItemContainer = document.getElementById("nav-item-wrapper");

// FUNCTION THAT OPENS AND CLOSES THE NAVBAR
function toggleNavBar(){
    navItemContainer.classList.toggle("open-nav-items");
}