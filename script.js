var containers;
function initDrawers() {
  containers = document.querySelectorAll(".container");
  setHeights();
  wireUpTriggers();
  window.addEventListener("resize", setHeights);
}

window.addEventListener("load", initDrawers);

function setHeights() {
  containers.forEach((container) => {
    let content = container.querySelector(".content");
    content.removeAttribute("aria-hidden");
    let heightOfContent = content.getBoundingClientRect().height;
    container.style.setProperty("--containerHeight", `${heightOfContent}px`);
    setTimeout((e) => {
      container.classList.add("height-is-set");
      content.setAttribute("aria-hidden", "true");
    }, 0);
  });
}

function wireUpTriggers() {
  containers.forEach((container) => {
    let btn = container.querySelector(".btn");
    let content = container.querySelector(".content");
    btn.addEventListener("click", () => {
      btn.setAttribute(
        "aria-expanded",
        btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
      );
      container.setAttribute(
        "data-drawer-showing",
        container.getAttribute("data-drawer-showing") === "true"
          ? "false"
          : "true"
      );
      content.setAttribute(
        "aria-hidden",
        content.getAttribute("aria-hidden") === "true" ? "false" : "true"
      );
    });
  });
}
function checkAnswer1() {
  var answer1 = document.getElementById("answer1").value;
  if (answer1 === "night") {
    document.getElementById("answer1").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer1").style.backgroundColor = "red";
  }
  var answer2 = document.getElementById("answer2").value;
  if (answer2 === "day") {
    document.getElementById("answer2").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer2").style.backgroundColor = "red";
  }
  var answer3 = document.getElementById("answer3").value;
  if (answer3 === "bills") {
    document.getElementById("answer3").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer3").style.backgroundColor = "red";
  }
  var answer4 = document.getElementById("answer4").value;
  if (answer4 === "penny") {
    document.getElementById("answer4").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer4").style.backgroundColor = "red";
  }
  var answer5 = document.getElementById("answer5").value;
  if (answer5 === "dreams") {
    document.getElementById("answer5").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer5").style.backgroundColor = "red";
  }
  var answer6 = document.getElementById("answer6").value;
  if (answer6 === "wealthy") {
    document.getElementById("answer6").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer6").style.backgroundColor = "red";
  }
  var answer7 = document.getElementById("answer7").value;
  if (answer7 === "funny") {
    document.getElementById("answer7").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer7").style.backgroundColor = "red";
  }
  var answer8 = document.getElementById("answer8").value;
  if (answer8 === "sunny") {
    document.getElementById("answer8").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer8").style.backgroundColor = "red";
  }
  var answer9 = document.getElementById("answer9").value;
  if (answer9 === "mind") {
    document.getElementById("answer9").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer9").style.backgroundColor = "red";
  }
  var answer10 = document.getElementById("answer10").value;
  if (answer10 === "free") {
    document.getElementById("answer10").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer10").style.backgroundColor = "red";
  }
  var answer11 = document.getElementById("answer11").value;
  if (answer11 === "fortune") {
    document.getElementById("answer11").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer11").style.backgroundColor = "red";
  }
  var answer12 = document.getElementById("answer12").value;
  if (answer12 === "funny") {
    document.getElementById("answer12").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer12").style.backgroundColor = "red";
  }
  var answer13 = document.getElementById("answer13").value;
  if (answer13 === "sunny") {
    document.getElementById("answer13").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("answer13").style.backgroundColor = "red";
  }
}
