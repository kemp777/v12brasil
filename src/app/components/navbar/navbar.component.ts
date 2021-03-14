import {Component, OnInit, HostListener} from '@angular/core';

@Component(
    {
        selector: 'app-navbar',
        templateUrl: 'navbar.component.html'
    }
)

export class NavbarComponent implements OnInit {
    isCollapsed = true;

    constructor() { }

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
