import {Component} from '@angular/core';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {WhatsappComponent} from '../whatsapp/whatsapp.component';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent {
    public faFacebook = faFacebook;
    public faTwitter = faTwitter;
    public faWhasapp = faWhatsapp;
}
