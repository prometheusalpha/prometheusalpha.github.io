document.querySelector("#email").addEventListener("click", () => {
  navigator.clipboard.writeText("hoangnguyen.hn212.hn@gmail.com");
})

class TxtType {
  constructor(target, alternating_words) {
    this.alternating_words = alternating_words;
    this.target = target;
    this.loopNum = 0;
    this.txt = "";
    this.isDeleting = false;
    this.tick();
  }
  tick = () => {
    var i = this.loopNum % this.alternating_words.length;
    var fullTxt = this.alternating_words[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.target.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    let delta = 150;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = 1000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++; 
      delta = 500;
    }

    setTimeout(() => {
      that.tick();
    }, delta);
  }
}

window.onload = () => {
  var element = document.querySelector("#typewrite");
  var alternating_words = element.getAttribute("data-type");
  if (alternating_words) {
    new TxtType(element, JSON.parse(alternating_words));
  }
};
