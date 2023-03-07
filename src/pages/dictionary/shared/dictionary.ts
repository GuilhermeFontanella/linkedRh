export interface Dictionary {
    id: number;
    name: string;
    description: string;
}

export interface WordList {
    id: number;
    word: string;
    meaning: string;
    extraMeaning: string;
}

export interface DictionaryData {
    id: number;
    parentDictionaryId: number,
    wordList: WordList[];
}
