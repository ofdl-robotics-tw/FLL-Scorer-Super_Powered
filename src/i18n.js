import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import TranslationTW from './locales/zh-tw/translation.json';
import TranslationEN from './locales/en-us/translation.json';
import TranslationJP from './locales/jp/translation.json';


const Languages = ['zh' , 'en' , 'jp'];

const options = {
  order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lang',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: '/', sameSite: 'strict' }
}

i18n
  
  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    resources:{
        "zh":{
            translation:TranslationTW
        },
        "en":{
            translation:TranslationEN
        },
        "jp":{
          translation:TranslationJP
        }
    },
    fallbackLng: 'zh',
    // lng: 'tw',
    detection: options,
    debug: false,
    supportedLngs:Languages,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n