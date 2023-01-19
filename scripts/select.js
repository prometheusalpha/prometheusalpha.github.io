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

// scroll to top on click
document.querySelector("#top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
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
  if (placeholder == "" || !values.includes(placeholder)) {
    return;
  }
  window.location.href = `#${placeholder}`;
  scrollToSection(placeholder);
  document.querySelector("#cd").value = "";
}

// scroll to selected section function
function scrollToSection(hash) {
  if (hash == "") {
    return;
  }
  let section = document.querySelector("#" + hash);
  section.scrollIntoView({ behavior: "smooth" });
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

async function convertString(str1, str2) {
  let len = strings[0].length;
  let swappeds = new Array(len).fill(false);
  while (swappeds.includes(false)) {
    // random position
    let ranPos = Math.floor(Math.random() * len);
    if (swappeds[ranPos]) {
      continue;
    }
    // replace a character
    str1 = str1.replaceAt(ranPos, str2[ranPos]);
    document.querySelector("#glitch").innerText = str1;
    await sleep(60);
    swappeds[ranPos] = true;
  }
}

let strings = ["Nguyễn Huy Hoàng", "a developer     "];

async function animate() {
  convertString(strings[0], strings[1]);
  await sleep(3000);
  convertString(strings[1], strings[0]);
}

setInterval(animate, 5000);
