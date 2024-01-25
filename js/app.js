let span = document.getElementsByClassName("hide");
let faq = document.getElementsByClassName("faq");
let show = document.getElementsByTagName("h1");
let arrow = document.getElementsByTagName('span');

for (let i = 0; i < span.length; i++) {
  span[i].style.height = "0";
  span[i].style.overflow = "hidden";
  span[i].style.transition = "height 0.2s ease-in-out";

  faq[i].addEventListener("click", () => {
    for (let j = 0; j < span.length; j++) {
      if (j !== i) {
        span[j].style.height = "0";
        show[j].style.fontWeight = "normal";
        arrow[j].style.transform = "none";
      }
    }

    if (span[i].style.height === "0px") {
      span[i].style.height = span[i].scrollHeight + "px";
      show[i].style.fontWeight = "bold";
      arrow[i].style.transform = "rotate(180deg)";
    } else {
      span[i].style.height = "0";
      show[i].style.fontWeight = "normal";
      arrow[i].style.transform = "none";
    }
  });
}
