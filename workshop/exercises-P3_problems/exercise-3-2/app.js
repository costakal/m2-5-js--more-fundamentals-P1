// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const buttonList = document.querySelector("#btn-list");

for (let i = 1; i <= 4; i++) {
  const button = document.getElementById(`btn-${i}`);

  button.style.backgroundColor = "gold";
}

const toggleColor = (id, color) => {
  const btnElement = document.getElementById(id);
  const currentColor = btnElement.style.backgroundColor;

  if (currentColor === color) {
    btnElement.style.backgroundColor = "gold";
  } else {
    btnElement.style.backgroundColor = color;
  }
};

const toggleOpacity = (id, opacity) => {
  const btnElement = document.getElementById(id);
  const currentOpacity = btnElement.style.opacity;

  if (currentOpacity === opacity) {
    btnElement.style.opacity = "100";
  } else {
    btnElement.style.opacity = opacity;
  }
};

const clicker = (event) => {
  const btnId = event.target.id;
  const btnElement = document.getElementById(btnId);
  switch (btnId) {
    case "btn-1":
      toggleOpacity(btnId, "0");
      break;
    case "btn-2":
      toggleColor(btnId, "red");
      break;
    case "btn-3":
      toggleColor(btnId, "blue");
      break;
    case "btn-4":
      btnElement.classList.toggle("jitters");
      break;
    default:
      break;
  }
};

buttonList.addEventListener("click", clicker);
