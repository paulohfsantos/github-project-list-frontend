import { App } from "vue";

export default {
  install(app: App) {
    app.config.globalProperties.$lowercase = function (str: string) {
      return str.toLowerCase();
    };

    app.provide("dashRemove", undefined);
  }
}
