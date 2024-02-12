function handleShowPeople() {
  const arrowContainer = document.getElementById("message_section");
  const peopleWrapper = document.getElementById("peoples_wrapper");
  if (peopleWrapper.classList.contains("hid")) {
    peopleWrapper.classList.remove("hid");
    arrowContainer.removeChild(arrowContainer.firstElementChild);
    arrowContainer.insertAdjacentHTML(
      "afterbegin",
      '<span class="material-symbols-outlined"> keyboard_arrow_down</span>'
    );
  } else {
    peopleWrapper.classList.add("hid");
    arrowContainer.removeChild(arrowContainer.firstElementChild);
    arrowContainer.insertAdjacentHTML(
      "afterbegin",
      '<span class="material-symbols-outlined"> keyboard_arrow_right</span>'
    );
  }
}

function handleShowTextArea() {
  const messagingWrapper = document.getElementById("messaging_child");
  const messagingArea = document.getElementById("texting_area");
  messagingWrapper.classList.add("hid");
  messagingArea.classList.remove("hid");
}

function handleShowMessagingWrapper() {
  const messagingWrapper = document.getElementById("messaging_child");
  const messagingArea = document.getElementById("texting_area");
  messagingArea.classList.add("hid");
  messagingWrapper.classList.remove("hid");
}
