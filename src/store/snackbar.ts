import { defineStore } from "pinia";

export const useSnackbar = defineStore("snackbar", {
  state: () => ({
    show: false,
    message: "",
    color: "",
    timeout: 3000,
  }),

  actions: {
    showSnackbar(message: string, color: string) {
      this.show = true;
      this.message = message;
      this.color = color;
      setTimeout(() => {
        this.hideSnackbar();
      });
    },
    hideSnackbar() {
      this.show = false;
      this.message = "";
      this.color = "";
    },
  },
});
