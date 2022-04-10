import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import collapse from "@alpinejs/collapse";
import persist from "@alpinejs/persist";
import morph from "@alpinejs/morph";
import focus from "@alpinejs/focus";

import { app, calculatevh } from "@assets/js/utils";
import { initHeader } from "@assets/js/header.js";
import { initScrollableMenu } from "@assets/js/scrollableMenu.js";


Alpine.plugin(intersect);
Alpine.plugin(collapse);
Alpine.plugin(persist);
Alpine.plugin(morph);
Alpine.plugin(focus);
window.Alpine = Alpine;

app(() => {
  initHeader();
  initScrollableMenu();
  calculatevh();
});

Alpine.start();
