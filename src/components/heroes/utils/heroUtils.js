const transformMission = () => {
  // higher number for more zoom
  const scale = window.scrollY * .0001 + 1;
  const translate = (window.scrollY * .2 + 1) * -1; // Title speed

  document.querySelector('.hero--mission').style.transform = `scale(${scale}) translateY(${translate}px)`;
};

export {
  transformMission,
};
