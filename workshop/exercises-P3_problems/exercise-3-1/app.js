// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const buttonList = document.querySelector("#btn-list");

const clicker = (event) => {
  const btnId = event.target.id;
  const btnElement = document.getElementById(btnId);
  switch (btnId) {
    case "btn-1":
      return (btnElement.style.opacity = 0);
    case "btn-2":
      return (btnElement.style.backgroundColor = "red");
    case "btn-3":
      return (btnElement.style.backgroundColor = "blue");
    case "btn-4":
      btnElement.classList.add("jitters");
      break;
    default:
      break;
  }
};

buttonList.addEventListener("click", clicker);
