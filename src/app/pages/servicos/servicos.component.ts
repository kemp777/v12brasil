import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-servicos',
    templateUrl: 'servicos.component.html'
})
export class ServicosComponent implements OnInit, OnDestroy {
    isCollapsed = true;
    constructor() {}

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];

    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];

    }
}