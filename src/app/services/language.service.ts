import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    public localesList = [
        { code: 'pt', label: 'Português', flag: 'br' },
        { code: 'en-US', label: 'English', flag: 'us' },
    ]
    public language;
    public dropdownItem: any;

    constructor(@Inject(DOCUMENT) document) {
        this.language = document.documentElement.lang;
        this.dropdownItem = this.localesList.find(f => f.code === this.language);
    }
}