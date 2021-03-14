import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-sobre',
    templateUrl: 'sobre.component.html'
})
export class SobreComponent implements OnInit, OnDestroy {
    isCollapsed = true;
    constructor() {}

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];

    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];

    }
}