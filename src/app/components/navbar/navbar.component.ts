import {Component, OnInit, Renderer2, Inject, HostListener, Input} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {faWhatsappSquare, faFacebookSquare, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import {LanguageService} from '../../services/language.service';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
    public faFacebookSquare = faFacebookSquare;
    public faTwitterSquare = faTwitterSquare;
    public faWhasappSquare = faWhatsappSquare;
    isCollapsed = true;
    isBrowser: boolean;

    constructor(
        private renderer: Renderer2,
        public languageService: LanguageService,
        @Inject(DOCUMENT) document,
        // tslint:disable-next-line:ban-types
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }


    @HostListener('window:scroll', ['$event'])
    // Aqui altera a cor da Navbar
    onWindowScroll(e) {
        if (this.isBrowser) {
            // do something with window here
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

    }

    ngOnInit() {
        this.onWindowScroll(UIEvent);
    }
}
