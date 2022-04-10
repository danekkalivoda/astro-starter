export const initScrollableMenu = () => {
  if (hasScrollableMenuComponent()) {
    start();
  }
};

/**
 * @return {Boolean}
 */
const hasScrollableMenuComponent = () => {
  return document.querySelectorAll("[x-data^='scrollableMenu']").length > 0;
};

const start = () => {
  document.addEventListener("alpine:init", () => {
    Alpine.data("scrollableMenu", () => ({
      contentHeight: null,
      init() {
        this.contentHeight =
          this.$refs.content.scrollHeight - this.$refs.wrapper.offsetHeight;
        this.onscroll();
      },
      scrollableArea: {
        ["@submenu-toggle.window"]() {
          this.contentHeight =
            this.$refs.content.scrollHeight - this.$refs.wrapper.offsetHeight;
          this.onscroll();
        },
        ["@scroll.passive"]() {
          this.onscroll();
        },
      },
      onscroll() {
        if (this.contentHeight > 0) {
          if (this.$refs.content.scrollTop == 0) {
            this.$refs.shadowTop.style.opacity = 0;
          } else {
            this.$refs.shadowTop.style.opacity = 1;
          }
          if (this.$refs.content.scrollTop == this.contentHeight) {
            this.$refs.shadowBottom.style.opacity = 0;
          } else {
            this.$refs.shadowBottom.style.opacity = 1;
          }
        } else {
          this.$refs.shadowTop.style.opacity = 0;
          this.$refs.shadowBottom.style.opacity = 0;
        }
      },
    }));
  });
};
