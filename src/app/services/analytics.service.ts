import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RoutesRecognized} from '@angular/router';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

// tslint:disable-next-line:ban-types
declare var gtag: Function;

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {
    gtagEventName = null;
    gtagEventValue = null;
    gtagEventLabel = null;
    gtagEventCategory = null;

    constructor(
        private router: Router,
    ) {

    }

    public init() {
        this.listenForRouteChanges();

        try {
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
        } catch (ex) {
            console.error('Error appending google analytics');
            // console.error(ex);
        }
    }

    // Emmit a event thru 'gtag' so google analytics catch data
    public emmitEvent(gtagEventName , gtagEventCategory, gtagEventLabel, gtagEventValue) {
        gtag('event', gtagEventName, {
            'event_category': gtagEventCategory,
            'event_label': gtagEventLabel,
            'value': gtagEventValue
        })
    }

    private listenForRouteChanges() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                gtag('config', environment.googleAnalyticsKey, {
                    'page_path': event.urlAfterRedirects,
                });
                // console.log('Sending Google Analytics hit for route', event.urlAfterRedirects);
                // console.log('Property ID', environment.googleAnalyticsKey);
            }
            // if is a recognized route emmit a event to google analytics
            if (event instanceof RoutesRecognized) {
                const route = event.state.root.firstChild;

                this.gtagEventName = route.data.gtagEventName || '';
                this.gtagEventCategory = route.data.gtagEventCategory || '';
                this.gtagEventLabel = route.data.gtagEventLabel || '';
                this.gtagEventValue = route.data.gtagEventValue || '';

                // Setting 'gtag' event parameters
                this.emmitEvent(
                    this.gtagEventName,
                    this.gtagEventCategory,
                    this.gtagEventLabel,
                    this.gtagEventValue,
                );
            }
        });
    }
}