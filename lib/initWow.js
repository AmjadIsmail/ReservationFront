import { WOW } from "wowjs";

export const initWow = () => {
  if (typeof window !== "undefined") {
    const wow = new WOW();
    wow.init();
  }
};
