const values = ["about", "experiences", "contacts"];

document.querySelector("#cd").addEventListener("input", function () {
  suggest();
});

document.querySelector("#cd").addEventListener("keyup", function (event) {
  // key right keycode
  const arrowRight = 39;
  if (event.keyCode == arrowRight) {
    tabListener();
  }
  // enter keycode
  const enter = 13;
  if (event.keyCode == enter) {
    enterListener();
  }
});

function suggest() {
  let cdVal = document.querySelector("#cd").value;
  for (let i = 0; i < values.length; i++) {
    // check if current value starts with cdVal
    if (values[i].startsWith(cdVal) && cdVal != "") {
      // change value of placheholder
      document.querySelector("#placeholder").innerText = values[i];
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
}
