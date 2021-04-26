import gsap from 'gsap';


export const handleProject = (messengerBackground, target, link, description, li) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${messengerBackground}) center center`,
    filter: "blur(3px)"
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
  gsap.to(link, {
    duration: 0,
    opacity: 0
  });
  gsap.to(description, {
    duration: 0,
    display: "block"
  });
  gsap.to(description, {
    duration: 0,
    delay: 0.3,
    opacity: 1
  });
  gsap.to(li, {
    y: -10,
    duration: 0.3
  });
};

export const handleProjectReturn = (target, link, description, li) => {
  gsap.to(target, {
    duration: 0.4,
    opacity: 0
  });
  gsap.to(link, {
    duration: 0,
    opacity: 1
  });
  gsap.to(description, {
    duration: 0,
    display: "none"
  });
  gsap.to(description, {
    duration: 0,
    delay: 0.3,
    opacity: 0
  });
  gsap.to(li, {
    y: 0,
    duration: 0.3
  });
};

export const fadeInMessenger = (messenger) => {
  gsap.from(messenger, {
    duration: 0.3,
    delay: 0.55,
    opacity: 0
  });
};

export const fadeInLocalDrive = (localDrive) => {
  gsap.from(localDrive, {
    duration: 0.3,
    delay: 0.75,
    opacity: 0
  });
};

export const backgroundSize = (div) => {
  gsap.to(div, {
    duration: .3,
    delay: 1,
    backgroundSize: "100% 100%"
  });
};

export const backgroundShadow = (div) => {
  gsap.from(div, {
    delay: 1.3,
    duration: 0.3,
    boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.5)"
  });
}; 

// gsap.from(project, {
//   delay: 1,
//   duration: 0.3,
//   backgroundSize: "0% 0%"
// });
// gsap.from(project, {
//   duration: 0.3,
//   delay: 1.5,
//   boxShadow: "0px 0px 0px 0px #D82222"
// });

// export const imageAnimation = (img) => {
//   gsap.fromTo(img, {
//      width: "40%",
//      height: "0vh",
//      y: 500,
//      duration: .5,
//   }, {
//     width: "60%",
//     height: "64vh",
//     y: 0,
//     delay: 1
//   });
// };

export const imageAnimation = (img) => {
  gsap.to(img, {
    height: "64vh",
    width: "60%",
    duration: .5,
    delay: 1
  });
};

// export const titleAnimation = (title) => {
//   gsap.from(title, {
//     fontSize: 0,
//   }, {
//     fontSize: "15vh",
//     delay: 1.3
//   });
// };

export const titleAnimation = (title) => {
  gsap.to(title, {
    fontSize: "15vh",
    delay: 1.6,
    duration: .1
  });
};

// export const subtitleAnimation = (subtitle, year) => {
//   gsap.from([subtitle, year], {
//     fontSize: "0%",
//     delay: 1.5
//   });
// };

export const subtitleAnimation = (subtitle, year) => {
  gsap.to(subtitle, {
    fontSize: "100%",
    duration: .3,
    delay: 2.1
  });
  gsap.to(year, {
    fontSize: "70%",
    duration: .3,
    delay: 2.1
  });
};

export const numberAnimation = (line, number) => {
  gsap.to(line, {
    width: "20%",
    delay: 2.2,
    duration: .2
  });
  gsap.to(number, {
    fontSize: "1.5vw",
    delay: 2.2,
    duration: .2
  });
}

export const counterAnimation = (counter) => {
  gsap.to(counter, {
    fontSize: 35,
    delay: 2.2,
    duration: .2
  });
}