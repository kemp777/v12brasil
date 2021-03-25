import {Component} from '@angular/core';
import {AnalyticsService} from '../../services/analytics.service';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {WhatsappService} from '../../services/whatsapp.service';

@Component({
    selector: 'app-whatsapp',
    templateUrl: 'whatsapp.component.html'
})
export class WhatsappComponent {
    public faWhatsapp = faWhatsapp;

    constructor(
        public analytics: AnalyticsService,
        public whatsappService: WhatsappService
    ){}
}
