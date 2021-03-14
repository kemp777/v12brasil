import {Component, OnInit, Renderer2, Inject, HostListener, NgModule} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
    isCollapsed = true;

    constructor(
        private renderer: Renderer2,
        @Inject(DOCUMENT) document
    ) { }

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
}
