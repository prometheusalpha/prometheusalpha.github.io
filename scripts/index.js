var svgCursor = document.getElementById('svg-cursor');

document.querySelector("#select").addEventListener("mousemove", function (event) {
  svgCursor.style.display = 'block';
  moveCursor(event);
});

document.querySelector("#select").addEventListener("mouseleave", function () {
  svgCursor.style.display = 'none';
});

function moveCursor(e) {
  var x = e.clientX + window.pageXOffset + 5,
    y = e.clientY + window.pageYOffset;
  svgCursor.setAttribute('style', 'left: ' + x + 'px; top: ' + y + 'px');
}
