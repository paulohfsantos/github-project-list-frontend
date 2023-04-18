import { useSnackbar } from "@/store/snackbar";
import pinia from "../store";

const snackbar = useSnackbar(pinia);

export const ExceptionHander = {
  handle(error: Error) {
    snackbar.showSnackbar(error.message, "error");
  },
}
