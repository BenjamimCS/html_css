
(function() {
const burgerMenu = document.getElementById("burger-menu")
const menu = document.querySelector("menu > ul")

var menuIsOpen = false

burgerMenu.addEventListener("click", () => {
  if(!menuIsOpen) {
    menuIsOpen = true
    menu.style.display = "block"
  } else {
    menuIsOpen = false
    menu.style.display = "none"
  }
})
})()