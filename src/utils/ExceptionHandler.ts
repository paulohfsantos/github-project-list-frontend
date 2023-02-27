import { useSnackbar } from "@/store/snackbar";

const snackbar = useSnackbar();

export const ExceptionHander = {
  handle(error: Error) {
    snackbar.showSnackbar(error.message, "error");
  },
}
