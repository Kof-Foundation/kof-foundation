import { useEffect } from "react";

const SOURCE_LANGUAGE = "pt";
const ELEMENT_ID = "google_translate_element";
const SCRIPT_SELECTOR = "script[data-google-translate]";
const SCRIPT_SRC =
  "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

type TranslateElementConstructor = new (
  options: { pageLanguage: string; autoDisplay?: boolean },
  elementId: string,
) => unknown;

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: { translate?: { TranslateElement?: TranslateElementConstructor } };
  }
}

function browserLanguage(): string {
  if (typeof navigator === "undefined") return SOURCE_LANGUAGE;
  const preferred = navigator.languages?.[0] ?? navigator.language ?? SOURCE_LANGUAGE;
  return preferred.split("-")[0]?.toLowerCase() ?? SOURCE_LANGUAGE;
}

function setGoogtransCookie(value: string | null) {
  const host = window.location.hostname;
  const expiry = value === null ? ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : "";
  const assignment = `googtrans=${value ?? ""}${expiry};path=/`;
  document.cookie = assignment;
  document.cookie = `${assignment};domain=${host}`;
  const root = host.split(".").slice(-2).join(".");
  if (root.includes(".")) document.cookie = `${assignment};domain=.${root}`;
}

export function GoogleTranslate() {
  useEffect(() => {
    const language = browserLanguage();
    setGoogtransCookie(language === SOURCE_LANGUAGE ? null : `/${SOURCE_LANGUAGE}/${language}`);

    window.googleTranslateElementInit = () => {
      const TranslateElement = window.google?.translate?.TranslateElement;
      if (!TranslateElement) return;
      new TranslateElement({ pageLanguage: SOURCE_LANGUAGE, autoDisplay: false }, ELEMENT_ID);
    };

    if (!document.querySelector(SCRIPT_SELECTOR)) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.setAttribute("data-google-translate", "true");
      document.body.appendChild(script);
    }
  }, []);

  return <div id={ELEMENT_ID} />;
}
