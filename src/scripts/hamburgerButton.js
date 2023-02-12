const hamburgerButton = document.querySelector("#hamburger-button");

export const burgerButton = () => {
  hamburgerButton.addEventListener("click", function () {
    const menu = document.querySelector("#menu");
    const menuIdioma = document.querySelector("#menuIdioma");
    const imgIdioma = document.querySelector("#imgIdioma");

    if(menuIdioma.className.includes("containerIdiomaOpen")){
      menuIdioma.classList.toggle("containerIdiomaOpen")
      imgIdioma.classList.toggle("imgidiomaClass_open")
    }

    menu.classList.toggle("hiddenMenu")
    hamburgerButton.classList.toggle("active");
  });
};

const hamburgerButton2 = document.querySelector("#hamburger-button2");

export const burgerButton2 = () => {
  hamburgerButton2.addEventListener("click", function () {
    const menu = document.querySelector("#menuIdioma");
    const menuHeader = document.querySelector("#menu");

    const img = document.querySelector("#imgIdioma");
    img.classList.toggle("imgidiomaClass_open")
    menu.classList.toggle("containerIdiomaOpen")

    if(hamburgerButton.className.includes("active")){
      menuHeader.classList.toggle("hiddenMenu")
      hamburgerButton.classList.toggle("active")
    }
  });
};


const hamburgerButton3 = document.querySelector("#hamburger-button3");

export const burgerButton3 = () => {
  hamburgerButton3.addEventListener("click", function () {
    const menu = document.querySelector("#menuIdioma");
    const img = document.querySelector("#imgIdiomaDektop");
    img.classList.toggle("imgidiomaClass_open")
    menu.classList.toggle("containerIdiomaOpen")
  });
};
