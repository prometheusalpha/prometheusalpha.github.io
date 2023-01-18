const values = ["about", "experiences", "contacts"];

// focus on input on load
window.onload = function () {
  document.querySelector("#cd").focus();
};

document.querySelector("#cd").addEventListener("input", function () {
  suggest();
});

document.querySelector("#cd").addEventListener("keyup", function (event) {
  const arrowRight = 39;
  if (event.keyCode == arrowRight) {
    tabListener();
  }
  const enter = 13;
  if (event.keyCode == enter) {
    enterListener();
  }
});

function suggest() {
  let cdVal = document.querySelector("#cd").value;
  // for each
  for (let value of values) {
    if (value.startsWith(cdVal) && cdVal != "") {
      document.querySelector("#placeholder").innerText = value;
      break;
    } else {
      document.querySelector("#placeholder").innerText = "";
    }
  }
  if (cdVal == "") {
    document.querySelector("#placeholder").innerText = "about";
  }
}

function tabListener() {
  let placeholder = document.querySelector("#placeholder").innerText;
  document.querySelector("#cd").value = placeholder;
}

function enterListener() {
  let placeholder = document.querySelector("#placeholder").innerText;
  // check if placeholder is empty or not in values
  if (placeholder == "" || !values.includes(placeholder)) {
    return;
  }
  window.location.href = `#${placeholder}`;
  // clear input
  document.querySelector("#cd").value = "";
}
