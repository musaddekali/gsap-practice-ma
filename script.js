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

gsap.from(".user_list li", {
   x: -100,
   stagger: 0.15,
   opacity: 0,
});
