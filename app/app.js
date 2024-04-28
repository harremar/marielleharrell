const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const link = document.querySelector(".links a");
const links = document.querySelector(".testingdiv");
const mobilelink = document.querySelectorAll(".testingdiv .mobileLinks a ");
//when hamburger is clicked activate mobileMenu function
hamburger.addEventListener("click", mobileMenu);
mobilelink.forEach((link) => {
  link.addEventListener("click", mobileMenu);
});
//this function makes menu active
function mobileMenu() {
  // turns hamburger into X
  hamburger.classList.toggle("active");
  // opens up navigation links
  links.classList.toggle("active");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
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
