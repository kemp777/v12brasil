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

        // try {
        //     this.generateHotJarScripts();
        // } catch (ex) {
        //     console.error('Error appending hotjar');
        // }

        try {
            this.generateMicrosoftClarity();
        } catch (ex) {
            console.error('Error appending microsoft clarity');
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

     public generateMicrosoftClarity() {
        const script1 = document.createElement('script');
        script1.innerHTML = `
             (function(c,l,a,r,i,t,y){
                 c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                 t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                 y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
             })(window, document, "clarity", "script", "5wrsm4371j");
        `;
        document.head.appendChild(script1);
     }

     // public generateHotJarScripts() {
     //     const script1 = document.createElement('script');
     //     script1.innerHTML = `
     //         (function(h,o,t,j,a,r){
     //            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
     //            h._hjSettings={hjid:2307939,hjsv:6};
     //            a=o.getElementsByTagName('head')[0];
     //            r=o.createElement('script');r.async=1;
     //            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
     //            a.appendChild(r);
     //         })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
     //     `;
     //     document.head.appendChild(script1);
     // }

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