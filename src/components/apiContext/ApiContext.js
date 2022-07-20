import React,{useState, createContext} from "react";
import { I18nProvider } from "../../internalization/Index";
import { LOCALES } from "../../internalization/Locale";

export const LocaleContext= createContext()

export const LocaleProvider =props=>{

    const  [locale, setLocale] = useState(LOCALES.ENGLISH)

    return(
        <I18nProvider locale={locale}>
        <LocaleContext.Provider value={[locale,setLocale,LOCALES]}> 
        {props.children}
        </LocaleContext.Provider>
        </I18nProvider>
    )
}