export const app = (fn) => {
  if (document.readyState != "loading") {
      fn();
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
};
export const calculatevh = () => {
  const doCalculate = () => {document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)};
  doCalculate()
  window.addEventListener('calculate-vh', () => {doCalculate();}, false);
  window.addEventListener('resize', () => {doCalculate()});
}
