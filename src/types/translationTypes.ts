export interface Translations {
    [language: string]: {
        [key: string]: string;
    };
}

export type Language = keyof Translations;
export type TranslationKeys = keyof Translations['it'];