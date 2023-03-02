// vue 3 plugin
import { App } from "vue";

export default {
  install(app: App) {
    app.config.globalProperties.$dashRemove = function (str: string) {
      return str.replace(/-/g, " ");
    };

    app.provide("dashRemove", undefined);
  }
}
