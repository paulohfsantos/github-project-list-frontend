import { defineStore } from "pinia";

export const useCustomTheme = defineStore('theme', {
  state: () => ({
    dark: false,
  }),

  actions: {
    toggleTheme() {
      this.dark = !this.dark;
      localStorage.setItem('dark', JSON.stringify(this.dark));

      console.log(localStorage.getItem('dark'));
    }
  },
});
