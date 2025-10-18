window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".menu-icon").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".login").addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector(".floating-signup-wrapper")
    .classList.toggle("slideWrapper");
  console.log("hey");
});

document.querySelector(".signup").addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector(".floating-signup-wrapper")
    .classList.toggle("slideWrapper");
});

document.querySelector("#year").textContent = new Date().getFullYear();
