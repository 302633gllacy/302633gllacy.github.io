var popupButton = document.querySelector(".btn-feedback");
var popup = document.querySelector(".modal-feedback");
var popupClose = popup.querySelector(".modal-feedback-close");

popupButton.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-feedback-show");
});

popupClose.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-feedback-show");
});

window.addEventListener("keydown", function(event) {
  if(event.keyCode === 27) {
    if(popup.classList.contains("modal-feedback-show")) {
      popup.classList.remove("modal-feedback-show");
    }
  }
});
