import {Component} from '@angular/core';
import {AnalyticsService} from '../../services/analytics.service';

@Component({
    selector: 'app-whatsapp',
    templateUrl: 'whatsapp.component.html'
})
export class WhatsappComponent {
    public phone = '5519998115055'
    public text = 'Olá, acessei seu site e estou interessado(a) em seus serviços, gostaria de agendar um horário para conversarmos melhor.';
    public url = 'https://api.whatsapp.com/send?phone='+this.phone+'&text='+this.text

    constructor(
        public analytics: AnalyticsService
    ){}
}
