import {Component} from '@angular/core';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {WhatsappService} from '../../services/whatsapp.service';
import {AnalyticsService} from '../../services/analytics.service';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent {
    public faFacebook = faFacebook;
    public faTwitter = faTwitter;
    public faWhasapp = faWhatsapp;

    constructor(
        public analytics: AnalyticsService,
        public whatsapp: WhatsappService
    ){}
}
