let heroTl = gsap.timeline();
heroTl.from(".logo", {
  y: -30,
  opacity: 0,
  scale: 10,
});

heroTl.from(".menus li", {
  y: -30,
  opacity: 0,
  stagger: 0.15,
});

heroTl.from(".title", {
  scale: 0,
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

gsap.from(".course_card", {
  x: -500,
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".course_card",
    scroller: "body",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.to(".pin_text", {
  //   transform: "translateX(-100%)",
  x: "-100%",
  scrollTrigger: {
    trigger: ".pin_section",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 1,
    pin: true,
  },
});

gsap.from(".img", {
  scaleX: 0.15,
  y: 100,
  scrollTrigger: {
    trigger: ".img",
    scrub: 2,
    end: "top 20%",
  },
});
