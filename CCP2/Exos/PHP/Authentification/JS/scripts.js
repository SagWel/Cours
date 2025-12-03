function showPopUp(message) {
  const popUp = document.getElementById("popUp");
  const text = document.getElementById("errorMessageText");

  text.innerText = message;
  popUp.style.display = "block";

  setTimeout(() => {
    closePopUp();
  }, 1500);
}

function closePopUp() {
  const popUp = document.getElementById("popUp");
  popUp.style.display = "none";
}
