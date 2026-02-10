// main.js
let targetElement = document.querySelector("h2");

conesole.log(targetElement.outerHTML);

targetElement.addEventListener("mouseover", function () {
    console.log(this.innerText);
    this.innerText = "TIME";
    this.style = "cursor: wait";
});

targetElement.addEventListener("mouseout", function () {
    this.innerText = "IKEA";
    this.style = "cursor: cursor pointer";
}
console.log("Hello, World!");