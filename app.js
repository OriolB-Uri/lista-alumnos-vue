import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const students = createApp({
  setup() {
    const students = ref([
      "Albertina",
      "Katerina",
      "Ester",
      "Galis",
      "Oriol",
      "Susana",
      "McCarmen",
      "Gerard",
      "Dayane",
      "Diego",
      "Maria",
    ]);

    const nameLength = (s) => {
      if (s.length >= 7) return "yellow";
    }

    return {
      students,
      nameLength
    };
  },
}).mount("#app");
