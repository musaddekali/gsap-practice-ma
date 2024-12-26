let heroTl = gsap.timeline();
heroTl.from(".logo", {
  y: 1000,
  duration: 1
});

heroTl.from(".menus li", {
  y: -30,
  opacity: 0,
  stagger: 0.15,
});

heroTl.from(".title", {
  scale: 0,
  stagger: 0.15,
});

gsap.from(".hero", 
  {
    backgroundPosition: "0 160%",
    duration: 1,
    scrollTrigger: {
      trigger: ".hero",
      scroller: "body",
      scrub: 1,
    }
  }
)

gsap.from(".title_2", {
  x: 500,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".title_2",
    scroller: "body",
    start: "top 50%",
    end: "top 20%",
    scrub: 1,
  },
});

gsap.from(".card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    end: "top 50%",
    scrub: 3,
  },
});


gsap.from(".box_wrap1 .box", {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".box_wrap1",
    scroller: "body",
    markers: true,
    scrub: 2,
    start: "top bottom",
    end: "top center"
  }
})

gsap.from(".box_wrap2 .box", {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: -0.25,
  scrollTrigger: {
    trigger: ".box_wrap2",
    scroller: "body",
    markers: true,
    scrub: 2,
    start: "top bottom",
    end: "top center"
  }
})

