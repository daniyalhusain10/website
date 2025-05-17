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
const skewFactor = 0.060;

function animateCircle() {
  circle.style.left = coords.x - 0 + "px"; // 12px circle ka half = 6
  circle.style.top = coords.y - 0 + "px";

  // Mouse ki movement ke adhar par skew calculate karein
  const deltaX = coords.x - (circle.offsetLeft + 1);
  const deltaY = coords.y - (circle.offsetTop + 1);

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

const click = document.querySelector(".click")
const overlay = document.querySelector(".overlay")
const i  = document.querySelector(".ri-close-large-fill")
const home  = document.querySelector(".home")
const about  = document.querySelector(".about")
const project  = document.querySelector(".project")
const contact  = document.querySelector(".contact")


click.addEventListener("click",()=>{
  overlay.style.top = "-0vh"
})
i.addEventListener("click",()=>{
  overlay.style.top = "-110vh"
})
home.addEventListener("click",()=>{
  overlay.style.top = "-110vh"
})
about.addEventListener("click",()=>{
  overlay.style.top = "-110vh"
})
project.addEventListener("click",()=>{
  overlay.style.top = "-110vh"
})
contact.addEventListener("click",()=>{
  overlay.style.top = "-110vh"
})





lastone.addEventListener("mouseenter", ()=>{
  parentrimg.style.transform = "Scale(1.05)"
   sun.style.color ="#FFAA78"
   lastoneI.style.opacity = "100%"
}) 
lastone.addEventListener("mouseleave", ()=>{
  parentrimg.style.transform = "Scale(1)"
sun.style.color ="white"
  lastoneI.style.opacity = "0%"
}) 


parentrimg.addEventListener("mouseenter", ()=>{
  parentrimg.style.transform = "Scale(1.05)"
   sun.style.color ="#FFAA78"

   lastoneI.style.opacity = "100%"

}) 
parentrimg.addEventListener("mouseleave", ()=>{
  parentrimg.style.transform = "Scale(1)"
sun.style.color ="white"

    lastoneI.style.opacity = "0%"
}) 


const redirectDiv = document.querySelector(".last")
redirectDiv.addEventListener("click",()=>{
  window.location.href = "https://daniyalhusain10.github.io/sun-down/"
})

const githubIcon =  document.querySelector(".githubIcon")
githubIcon.addEventListener("click",()=>{
window.location.href = "https://github.com/daniyalhusain10"
})

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const typingGif = document.getElementById("typingGif");
const submitButton = document.getElementById("submitButton"); 

function checkInputs() {
  if (
    nameInput.value.length > 0 ||
    emailInput.value.length > 0 ||
    messageInput.value.length > 0
  ) {
    typingGif.style.display = "block";
  } else {
    typingGif.style.display = "none";
  }
}

nameInput.addEventListener("input", checkInputs);
emailInput.addEventListener("input", checkInputs);
messageInput.addEventListener("input", checkInputs);



window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('formSubmitted') === 'true') {
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    typingGif.style.display = "none";
    
    const newUrl = window.location.pathname;
    window.history.pushState({}, document.title, newUrl);
  }
});


const projectsLink = document.querySelector("#projects");
projectsLink.addEventListener("click", () => {
    window.location.href = "#projects";
});

const contactLink = document.querySelector("#lets-talk");
contactLink.addEventListener("click", () => {
    window.location.href = "https://web.whatsapp.com/";
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
 if (window.innerWidth > 768) {
  // .from animation
  gsap.from(".video", {
    y: 80,
    opacity: 0,
    duration: 0.7,
  });

  // ScrollTrigger .to animation
  gsap.to(".video", {
    width: "100vw",
    scrollTrigger: {
      trigger: ".video",
      start: "top 70%",
      end: "bottom 20%",
      scrub: 0.5,
    },
  });
} else {
  // Reset styles for mobile
  gsap.set(".video", {
    clearProps: "all",
  });
}










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
  x:10,
  opacity: 0,
  duration: 2,
  stagger:1,
  scrollTrigger:{
    trigger:".left1",
    start: "top 100%",
   duration: 3,
  // markers:true,
    scrub: 1,
    end: "bottom 100%"
  }
}) 

gsap.set(".right2",{opacity : 1});
gsap.from(".right2",{
  x: -10,
  opacity: 0,
  rotate: -10,
  duration: 3,
  stagger:1,
  scrollTrigger:{
    x:0,
    trigger:".right2",
    start: "top 50%",
  duration: 3,
  // markers:true,
    scrub: 1,
    end: "bottom 60%"
  }
}) 




