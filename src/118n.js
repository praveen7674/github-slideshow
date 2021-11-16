import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next"; 
import LanguageDetector from 'i18next-browser-languagedetector';

import english from "./Assets/Translation/english.json";
import hindi from "./Assets/Translation/hindi.json";
import arabic from "./Assets/Translation/arabic.json";
import french from  "./Assets/Translation/french.json";
import russian from "./Assets/Translation/russian.json";
import spanish from "./Assets/Translation/spanish.json";

i18n

.use(Backend)
.use(initReactI18next)
.use(LanguageDetector)
.init({

  lng: "english",   //default language

  fallbackLng: "english", //when specified language translations not present 

  debug: true,

  /* translation file path */

  resources: {

english:{
  translations: english
},
hindi:{
  translations: hindi
},
arabic:{
  translations: arabic
},
french:{
  translations: french
},
russian:{
  translations: russian
},
spanish:{
  translations: spanish
}
  },


/* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */


  ns: ["translations"],

  defaultNS: "translations",

  keySeparator: false,

  interpolation: {

    escapeValue: false,

    formatSeparator: ",",

  },

  react: {

    wait: true,

  },

});


export default i18n;