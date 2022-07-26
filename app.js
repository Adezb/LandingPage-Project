var harmbuger_menu;
var bigWrapper;

function declare() {
    harmbuger_menu = document.querySelector(".harmbuger-menu");
    bigWrapper = document.querySelector(".big_wrapper");
}

const main = document.querySelector("main");

declare();

function events() {
    harmbuger_menu.addEventListener("click", () => {
        bigWrapper.classList.toggle("active");
    });
    
}


events();