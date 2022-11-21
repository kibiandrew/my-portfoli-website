function check() {
  let dot = document.getElementById("dots");
  let more = document.getElementById("more");
  let button = document.getElementById("button");
  if (dot.style.display === "none") {
    dot.style.display = "inline";
    button.innerHTML = "Read More";
    more.style.display = "none";
  } else {
    dot.style.display = "none";
    button.innerHTML = "Read Less";
    more.style.display = "inline";
  }
}
