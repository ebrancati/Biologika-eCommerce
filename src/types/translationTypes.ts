export interface Translations {
    [language: string]: {
        [key: string]: string;
    };
}

export type Language = 'it' | 'ja' | 'en';
export type TranslationKeys = keyof Translations['it'];