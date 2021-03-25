import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WhatsappService {
    public phone = '5519998115055'
    public text = 'Olá, acessei seu site e estou interessado(a) em seus serviços, gostaria de agendar um horário para conversarmos melhor.';
    public url = 'https://api.whatsapp.com/send?phone='+this.phone+'&text='+this.text
}