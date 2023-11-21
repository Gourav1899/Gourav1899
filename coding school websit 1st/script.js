var crsr = document.querySelector("#curser");
var crsrs = document.querySelector("#curser-b");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + "px";
  crsrs.style.left = dets.x - 50 + "px";
  crsrs.style.top = dets.y - 50 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "black",
  //   duration: 200,
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 5,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
 scale:0.8,
  // opacity: 0,
  duration: 1,
   staggerr:0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1",{
  y:-70,
  x:-70,
  duration:.5,
  scrollTrigger:{
    trigger:"#colon1",
    scroll:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4,

  }
})
gsap.from("#colon2",{
  y:70,
  x:70,
  duration:.5,
  scrollTrigger:{
    trigger:"#colon2",
    scroll:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4,
    
  }
})
gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    
    trigger:"#page4 h1",
    scroll:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:3,
  }
})