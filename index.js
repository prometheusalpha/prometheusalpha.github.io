window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight) - 0.02
    );
  },
  false
);

function count() {
  var number = document.getElementById("mark");
  number.style.display = "block";
  var count = document.getElementById("count");
  var i = Number(count.innerHTML);
  i += 1;
  count.innerHTML = i;
}
