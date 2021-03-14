import {Component, OnInit, OnDestroy, Renderer2, Inject, HostListener} from '@angular/core';
import {DOCUMENT, Location} from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {
    isCollapsed = true;
    constructor(
        private renderer: Renderer2,
        public location: Location,
        @Inject(DOCUMENT) document
    ) {}
    @HostListener('window:scroll', ['$event'])
    // Aqui altera a cor da Navbar
    onWindowScroll(e) {
        if (window.pageYOffset > 100) {
            const element = document.getElementById('navbar-top');
            if (element) {
                element.classList.remove('navbar-transparent');
                element.classList.add('bg-rainbow');
            }
        } else {
            const element = document.getElementById('navbar-top');
            if (element) {
                element.classList.add('navbar-transparent');
                element.classList.remove('bg-rainbow');
            }
        }
    }
    ngOnInit() {
        this.onWindowScroll(event);
    }

    ngOnDestroy() {

    }
}
