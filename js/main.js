var modalOpenButton = document.querySelector(".header__button");
var elModal = document.querySelector(".modal");
var modalCloseButton = document.querySelector(".modal__close__btn")

modalOpenButton.addEventListener("click", function(){
    elModal.classList.add("modal--active");
})

modalCloseButton.addEventListener("click", function(){
    elModal.classList.remove("modal--active")
});

