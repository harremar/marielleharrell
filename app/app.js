const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const link = document.querySelector(".links a");
const additembtn = document.getElementsByClassName("additembtn");

const circle = document.querySelector(".circleCount");

//when hamburger is clicked activate mobileMenu function
hamburger.addEventListener("click", mobileMenu);

//this function makes menu active
function mobileMenu() {
  // turns hamburger into X
  hamburger.classList.toggle("active");
  // opens up navigation links
  navMenu.classList.toggle("active");
}

let cartNumbers = 0;
function addCart() {
  alert("Item has been added to cart");
  cartNumbers = cartNumbers + 1;
  console.log(cartNumbers);
  circle.style.display = "flex";
  circle.innerHTML = cartNumbers;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hidden2Elements = document.querySelectorAll(".hidden2");
hidden2Elements.forEach((el) => observer.observe(el));
