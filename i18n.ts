import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { ko } from "./ko/ko";
import { en } from "./en/en";
import { ja } from "./ja/ja";
import { zhTW } from "./zh-TW/zhTW";
import { zhCN } from "./zh-CN/zhCN";

const resources = {
  ko: ko,
  en: en,
  ja: ja,
  "zh-TW": zhTW, // 번체
  "zh-CN": zhCN // 간체
};

const defaultLng = window.localStorage.getItem("i18nextLng") ?? "ko";
document.documentElement.lang = defaultLng ?? "ko";

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources,
    lng: defaultLng ?? "ko",
    fallbackLng: defaultLng ?? "ko",
    defaultNS: "signin",
    ns: [
      "sidebar",
      "signin",
      "footer",
      "profile",
      "navbar",
      "main",
      "analysis",
      "payment",
      "resources",
      "inquiry",
      "account",
      "company",
      "table",
      "sales"
    ],
    // debug: true,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "./{{lng}}/{{ns}}/", // load json file path
    },
    react: {
      useSuspense: false,
    },
  });

export const changeLocale = (locale: string) => {
  document.documentElement.lang = locale;

  switch (locale) {
    case "ko":
      document.documentElement.lang = 'ko';
      break;
    case "en":
      document.documentElement.lang = 'en';
      break;
    case "ja":
      document.documentElement.lang = 'ja';
      break;
    default:
      document.documentElement.lang = 'ko';
      break;
  }

  return i18n.changeLanguage(locale);
};

export const getCurrentLocale = () => {
  return window.localStorage.getItem("i18nextLng") || null;
};

export const isLocaleKo = () => {
  return window.localStorage.getItem("i18nextLng") === "ko";
}

export const isLocaleEn = () => {
  return window.localStorage.getItem("i18nextLng") === "en";
}

export const isLocaleJa = () => {
  return window.localStorage.getItem("i18nextLng") === "ja";
}

export const isLocaleZhTW = () => {
  return window.localStorage.getItem("i18nextLng") === "zh-TW";
}

export const isLocaleZhCN = () => {
  return window.localStorage.getItem("i18nextLng") === "zh-CN";
}

export const COUNTRY_KO = ["대한민국", "일본"];
export const COUNTRY_JA = ["韓国", "日本"];

export default i18n;
