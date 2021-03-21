import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {AnalyticsService} from './services/analytics.service';
import {environment} from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    isBrowser: boolean;
    title: string;
    domain: string
    country: string;
    fallBackTitle: string;

    constructor(
        private renderer: Renderer2,
        @Inject(DOCUMENT) document,
        private analytics: AnalyticsService,
        // tslint:disable-next-line:no-shadowed-variable
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        // tslint:disable-next-line:ban-types
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
        this.fallBackTitle = 'V12 Brasil - Agência de Marketing Digital e Consultoria';
        this.domain = 'https://v12brasil.com.br';
        this.country = 'pt-br';
        document.documentElement.lang = this.country;
    }

    ngOnInit() {
        if (this.isBrowser) {
            const linkElement = document.createElement('link');
            this.renderer.setAttribute(linkElement, 'rel', 'alternate');
            this.renderer.setAttribute(linkElement, 'hreflang', this.country);
            this.renderer.setAttribute(linkElement, 'href', this.domain);
            this.renderer.appendChild(document.head, linkElement);

            const metaElement = document.createElement('meta');
            this.renderer.setAttribute(metaElement, 'name', 'keywords');
            this.router.events.pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => {
                    const child = this.activatedRoute.firstChild;
                    if (child.snapshot.data.keywords) {
                        return child.snapshot.data.keywords;
                    }
                })
            ).subscribe((keywords: string) => {
                this.renderer.setAttribute(metaElement, 'content',keywords);
                // só vai 'cuspir' as keywords quando estiver rodando o projeto em ambiente local
                if (environment.production) {
                    // for production
                } else {
                    console.log(keywords)
                }
            });
            this.renderer.appendChild(document.head, metaElement);

            const metaElementDescription = document.createElement('meta');
            this.renderer.setAttribute(metaElementDescription, 'name', 'description');
            this.router.events.pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => {
                    const child = this.activatedRoute.firstChild;
                    if (child.snapshot.data.description) {
                        return child.snapshot.data.description;
                    }
                })
            ).subscribe((description: string) => {
                this.renderer.setAttribute(metaElementDescription, 'content',description);
            });
            this.renderer.appendChild(document.head, metaElementDescription);

            this.analytics.init();

            const body = document.getElementsByTagName('body')[0];
            this.title = this.titleService.getTitle();
            this.router.events.pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => {
                    const child = this.activatedRoute.firstChild;
                    if (child.snapshot.data.title) {
                        return child.snapshot.data.title;
                    }
                    return this.fallBackTitle;
                })
            ).subscribe((title: string) => {
                this.titleService.setTitle(title);
            });
            body.classList.add('index-page');
        }
    }
}
