export const initHeader = () => {
  if (hasHeaderComponent()) {
      start();
  }
};

/**
* @return {Boolean}
*/
const hasHeaderComponent = () => {
  return document.querySelectorAll("[x-data^='header']").length > 0;
};

const start = () => {
  window.header = () => {
      return {
          scrolled: false,
          expanded: false,
          init() {
              this.doScroll();
          },
          doScroll() {
              if (window.scrollY > 10) {
                  this.scrolled = true;
              } else {
                  this.scrolled = false;
              }
          },
          interactions: {
              ["@scroll.document.passive"]() {
                  this.doScroll();
              },
          },
      };
  };
};
