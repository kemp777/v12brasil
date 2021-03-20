import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {AnalyticsService} from './services/analytics.service';

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
        this.domain = 'https://www.v12brasil.com.br';
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
            this.analytics.init();

            const body = document.getElementsByTagName('body')[0];
            this.title = this.titleService.getTitle();
            this.router.events.pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => {
                    const child = this.activatedRoute.firstChild;
                    if (child.snapshot.data.title) {
                        return child.snapshot.data.gtagEventCategory + ' - ' + child.snapshot.data.title;
                    }
                    return this.fallBackTitle;
                })
            ).subscribe((ttl: string) => {
                this.titleService.setTitle(ttl);
            });
            body.classList.add('index-page');
        }
    }
}
