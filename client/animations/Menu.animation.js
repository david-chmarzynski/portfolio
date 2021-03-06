import gsap from 'gsap';

// OPEN MENU
export const staggerReveal = (node1, node2, menu) => {
  gsap.to(menu, { duration: 0, css: { display: "block" } });
  gsap.to([node1, node2], {
    duration: 0,
    opacity: 1,
    height: "100%"
  });
  
  gsap.fromTo([node1, node2], 0.55, {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1
    }
  }, {
    height: "100vh",
    skewY: 0
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2, menu) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07
    }
  });
  gsap.to(menu, { duration: 1, css: { display: "none" } });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3
    }
  });
};

// Fade up for the additonal info on our menu
export const fadeInUp = node => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut"
  });
};

// adds city image once you hover on
export const handleInfo = (info, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${info}) center center`
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut"
  });
  gsap.from(target, {
    duration: 0.4,
    transformOrigin: "right top"
  });
};

// Removes the city image once you hover off
export const handleInfoReturn = target => {
  gsap.to(target, {
    duration: 0.4,
    opacity: 0
  });
};

// Hover on the link
export const handleHover = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power3.inOut"
  });
};

// Hover off the link
export const handleHoverExit = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power3.inOut"
  });
};