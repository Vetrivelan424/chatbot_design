const counters = document.querySelectorAll(".counter");
const boxes = document.querySelectorAll(".container");
const boxes2= document.querySelectorAll(".transform");
const boxes1 = document.querySelectorAll(".container-grid");
window.addEventListener("scroll", checkBoxes);
window.addEventListener("scroll", checkBoxes1);
window.addEventListener("scroll", checkBoxes2);
checkBoxes();
checkBoxes1();
checkBoxes2();
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 2000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 120);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
function checkBoxes() {

  const triggerBottom = (window.innerHeight / 5) * 5;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
function checkBoxes1() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes1.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
function checkBoxes2() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes2.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
  
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
