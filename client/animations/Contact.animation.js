import gsap from 'gsap';

export const fadeInTitle = (title) => {
  gsap.from(title, {
    duration: .3,
    opacity: 0,
    delay: .8,
    y: -20
  });
};

export const fadeInput1 = (input1) => {
  gsap.from(input1, {
    delay: .8,
    x: -500,
    opacity: 0,
    duration: .3
  });
};

export const fadeInput2 = (input2) => {
  gsap.from(input2, {
    delay: .8,
    x: 500,
    opacity: 0,
    duration: .3
  });
};

export const fadeInput3 = (input3) => {
  gsap.from(input3, {
    delay: .8,
    x: -500,
    opacity: 0,
    duration: .3
  });
};

export const fadeInButton = (button) => {
  gsap.from(button, {
    delay: 1,
    duration: .3,
    opacity: 0,
    y: 20
  });
};

export const backgroundPin = (pin) => {
  gsap.from(pin, {
    delay: 1,
    duration: .3,
    backgroundSize: "0% 0%",
  });
};


export const shadowPin = (pin) => {
  gsap.from(pin, {
    delay: 1.2,
    duration: .3,
    boxShadow: "0px 0px 0px black"
  });
};