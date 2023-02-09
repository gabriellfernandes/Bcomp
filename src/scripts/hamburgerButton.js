const hamburgerButton = document.querySelector("#hamburger-button");

export const burgerButton = () => {
  hamburgerButton.addEventListener("click", function () {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hiddenMenu")
    hamburgerButton.classList.toggle("active");
  });
};
