import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources.js";

const i18nextInstance = i18n.createInstance();

i18nextInstance.use(initReactI18next).init({
  resources,
  debug: false,
  lng: "ru",
});

export default i18nextInstance;
