// Clock code (unchanged)
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector(".time").textContent = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
startTime();
// end
const coords = { x: 0, y: 0 };
const circle = document.querySelector(".circle");

// Skew ki intensity ko control karne ke liye factor
const skewFactor = 0.1;

function animateCircle() {
  circle.style.left = coords.x - 0 + "px"; // 12px circle ka half = 6
  circle.style.top = coords.y - 0 + "px";

  // Mouse ki movement ke adhar par skew calculate karein
  const deltaX = coords.x - (circle.offsetLeft + 10);
  const deltaY = coords.y - (circle.offsetTop + 10);

  // Skew ko apply karein
  circle.style.transform = `translate(-50%, -50%) skewX(${deltaX * skewFactor}deg) skewY(${deltaY * skewFactor}deg)`;

  requestAnimationFrame(animateCircle);
}

// Mouse move par coordinates update karein
window.addEventListener("mousemove", (e) => {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

// Animation loop start karein
animateCircle();

const imgparent = document.querySelector(".last")
const parentrimg = document.querySelector(".last img")
const sun = document.querySelector(".sun")
const sun1 = document.querySelector(".sun1")
const lastone = document.querySelector(".lastone");
const lastoneI = document.querySelector(".lastone I")

lastone.addEventListener("mouseenter", ()=>{
  parentrimg.style.transform = "Scale(1.1)"

   lastoneI.style.opacity = "100%"
}) 
lastone.addEventListener("mouseleave", ()=>{
  parentrimg.style.transform = "Scale(1)"

  lastoneI.style.opacity = "0%"
}) 


parentrimg.addEventListener("mouseenter", ()=>{
  parentrimg.style.transform = "Scale(1.1)"

   lastoneI.style.opacity = "100%"

}) 
parentrimg.addEventListener("mouseleave", ()=>{
  parentrimg.style.transform = "Scale(1)"

    lastoneI.style.opacity = "0%"
}) 

imgparent.addEventListener("mouseenter",()=>{
 
  sun.style.borderColor = "white";
  sun.style.width = "170px";
  sun.style.color ="#ff8c4a";
})
imgparent.addEventListener("mouseleave",()=>{
  sun.style.borderColor = "#FFFFFF";
  sun.style.width = "20px"
   sun.style.color = "white"
})


const redirectDiv = document.querySelector(".last")
redirectDiv.addEventListener("click",()=>{
  window.location.href = "https://daniyalhusain10.github.io/sun-down/"
})

const githubIcon =  document.querySelector(".githubIcon")
githubIcon.addEventListener("click",()=>{
window.location.href = "https://github.com/daniyalhusain10"
})


const sidebar = document.querySelector(".overlay");
const menuButton = document.querySelector(".container button");
const menuContainer = document.querySelector(".container");
const sidebarLinks = document.querySelectorAll(".overlay a");
const titleHeading = document.querySelector(".half h1");

menuButton.addEventListener("click", () => {
    const isOpen = sidebar.style.top === "0px";
    sidebar.style.top = isOpen ? "-100%" : "0";
    menuButton.innerHTML = isOpen ? "MENU" : "CLOSE";
    menuButton.style.color = isOpen ? "black" : "white";
    titleHeading.style.color = isOpen ? "black" : "white";
    menuContainer.style.borderColor = isOpen ? "black" : "white";
});

// Close sidebar on link click
sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.style.top = "-100%"; // Hide sidebar
        menuButton.innerHTML = "MENU"; // Reset button text
        menuButton.style.color = "black"; // Reset button color
        titleHeading.style.color = "black"; // Reset heading color
        menuContainer.style.borderColor = "black"; // Reset border color
    });
});

const projectsLink = document.querySelector("#projects");
projectsLink.addEventListener("click", () => {
    window.location.href = "#Projects";
});

const contactLink = document.querySelector("#lets-talk");
contactLink.addEventListener("click", () => {
    window.location.href = "https://mail.google.com/mail/u/0/#inbox?compose=new";
});

const projects = document.querySelector("#projects")
projects.addEventListener("click",()=>{
window.location.href="#Projects"
})
const letsTalk= document.querySelector("#lets-talk")
letsTalk.addEventListener("click",()=>{
window.location.href="https://mail.google.com/mail/u/0/#inbox?compose=new"
})
 


gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline();

tl.from(".header", {
  y: -20,
  opacity: 0,
  duration: 1,
})
  .from(".first", {
    x: -80,
    opacity: 0,
    duration: 0.4,
  })
  .from(".second", {
    x: 80,
    opacity: 0,
    duration: 0.4,
  })
  .from(".third", {
    y: 80,
    opacity: 0,
    duration: 0.7,
  })
  .from(".fourth", {
    x: -80,
    opacity: 0,
    duration: 0.7,
  })
  .from(".fivei", {
    x: 80,
    opacity: 0,
    duration: 0.7,
  })
  .from(".video", {
    y: 80,
    opacity: 0,
    duration: 0.7,
  });

// Standalone ScrollTrigger animation for .video
gsap.to(".video", {
  width: "100vw",
  scrollTrigger: {
    trigger: ".video",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 0.5,
     // Remove after debugging
  },
});













gsap.set("#you-para", { opacity: 1 }); // Set initial state
gsap.from("#you-para", {
    y:80,
  opacity: 0,
  duration: 1,
  stagger:1,
  scrollTrigger: {
    trigger: "#you-para",
    start: "top 60%", // Adjust as needed
    scrub: 1,
    // markers: true,
    end:"bottom 0%"
  },
});




gsap.set(".edit",{opacity : 1});
gsap.from(".edit",{
  x:-80,
  opacity: 0,
  duration: 3,
  stagger:1,
  scrollTrigger:{
    trigger:".edit",
    start: "top 95%",
  duration: 3,
  // markers:true,
    scrub: 1,
    end: "bottom 50%"
  }
}) 



gsap.set(".mywork", { opacity: 1 }); // Set initial state
gsap.from(".mywork", {
    y:80,
  opacity: 0,
  duration: 1,
  stagger:1,
  scrollTrigger: {
    trigger: ".mywork",
    start: "top 60%", // Adjust as needed
    scrub: 1,
    // markers: true,
    end:"bottom 80%"
  },
});



gsap.set(".left1",{opacity : 1});
gsap.from(".left1",{
   rotate: 10,
  x:80,
  opacity: 0,
  duration: 2,
  stagger:1,
  scrollTrigger:{
    trigger:".left1",
    start: "top 110%",
   duration: 3,
  // markers:true,
    scrub: 1,
    end: "bottom 120%"
  }
}) 

gsap.set(".right2",{opacity : 1});
gsap.from(".right2",{
  x: -80,
  opacity: 0,
  rotate: -10,
  duration: 3,
  stagger:1,
  scrollTrigger:{
    x:0,
    trigger:".right2",
    start: "top 100%",
  duration: 3,
  // markers:true,
    scrub: 1,
    end: "bottom 100%"
  }
}) 




