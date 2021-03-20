import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router, RoutesRecognized} from '@angular/router';
import {environment} from '../../environments/environment.prod';
import {isPlatformBrowser} from '@angular/common';

// tslint:disable-next-line:ban-types
declare var gtag: Function;

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {
    gtagEventName: null;
    gtagEventValue: null;
    gtagEventLabel: null;
    gtagEventCategory: null;
    isBrowser: boolean;

    constructor(
        private router: Router,
        // tslint:disable-next-line:ban-types
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    public init() {
        this.listenForRouteChanges();

        try {
            this.generateGoogleScripts();
        } catch (ex) {
            console.error('Error appending google analytics');
            // console.error(ex);
        }

        try {
            this.generateSmartlookScripts();
        } catch (ex) {
            console.error('Error appending smartlook');
        }
    }

    /**
     * Generate Google Analytics Scripts and puts them inside HTML <head>
     */
    public generateGoogleScripts() {
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.googleAnalyticsKey;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '` + environment.googleAnalyticsKey + `', {'send_page_view': false});
        `;
        document.head.appendChild(script2);
    }

    /**
     * Generate Smartlook Scripts and puts them inside HTML <head>
     */
     public generateSmartlookScripts() {
         const script3 = document.createElement('script');
         script3.innerHTML = `
            window.smartlook||(function(d) {
                var o=smartlook=function(){o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
                var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', '2a67f26ace12ecb366c68457b4f2b4202fbbc078');
         `;
        document.head.appendChild(script3);
     }

    /**
     * Emmit a event thru 'gtag' so google analytics catch data
     */
    public emmitEvent(gtagEventName , gtagEventCategory, gtagEventLabel, gtagEventValue) {
        gtag('event', gtagEventName, {
            'event_category': gtagEventCategory,
            'event_label': gtagEventLabel,
            'value': gtagEventValue
        })
    }

    private listenForRouteChanges() {
        if (this.isBrowser) {
            this.router.events.subscribe(event => {
                if (event instanceof NavigationEnd) {
                    gtag('config', environment.googleAnalyticsKey, {
                        'page_path': event.urlAfterRedirects,
                        'cookie_flags': 'max-age=7200;secure;samesite=none',
                    });
                    // console.log('Sending Google Analytics hit for route', event.urlAfterRedirects);
                    // console.log('Property ID', environment.googleAnalyticsKey);
                }
                // if is a recognized route
                if (event instanceof RoutesRecognized) {
                    const route = event.state.root.firstChild;

                    this.gtagEventName = route.data.gtagEventName || '';
                    this.gtagEventCategory = route.data.gtagEventCategory || '';
                    this.gtagEventLabel = route.data.gtagEventLabel || '';
                    this.gtagEventValue = route.data.gtagEventValue || '';

                    try {
                        // Emitting the event thru 'gtag' with parameters
                        this.emmitEvent(
                            this.gtagEventName,
                            this.gtagEventCategory,
                            this.gtagEventLabel,
                            this.gtagEventValue,
                        );
                    } catch (ex) {
                        console.error('Error dispatching Google Analytics event');
                    }
                }
            });
        }
    }
}