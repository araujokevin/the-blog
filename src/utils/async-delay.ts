import { logColor } from "./log-color";

export async function asyncDelay(milleseconds: number = 0, verbose = false) {
  if (milleseconds <= 0) return;

  if (verbose) {
    logColor(`Delaying for ${milleseconds / 1000}s`);
  }

  await new Promise((resolve) => setTimeout(resolve, milleseconds));
}
