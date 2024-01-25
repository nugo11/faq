let span = document.getElementsByClassName("hide");
let faq = document.getElementsByClassName("faq");
let show = document.getElementsByTagName("h1");

for (let i = 0; i < span.length; i++) {
  span[i].style.opacity = "0";
  span[i].style.position = "absolute";
  span[i].style.transition = "0.2s";

  faq[i].addEventListener("click", () => {
    if (span[i].style.opacity === "0") {
      span[i].style.opacity = "1";
      span[i].style.position = "relative";
      show[i].style.fontWeight = "bold";
    } else {
      span[i].style.opacity = "0";
      span[i].style.position = "absolute";
      show[i].style.fontWeight = "normal";
    }
  });
}
