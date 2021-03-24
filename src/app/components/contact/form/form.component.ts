import { Component, OnInit, OnDestroy } from '@angular/core';
import { SendEmailService } from '../../../services/send-email.service';
import {FlashMessagesService} from 'flash-messages-angular';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
    selector: 'app-contact-form',
    templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit, OnDestroy {
    FormData: FormGroup;

    constructor(
        private flashMessages: FlashMessagesService,
        private sendEmailService: SendEmailService,
        public formBuilder: FormBuilder,
        private http: HttpClient
    ) {
    }

    sent = false;
    focus = false;
    focus1 = false;
    focus2 = false;
    focus3 = false;
    focus4 = false;
    focus5 = false;

    ngOnInit() {
        this.FormData = this.formBuilder.group({
            name: new FormControl('', [Validators.required]),
            telephone: new FormControl(''),
            website: new FormControl(''),
            // investment: new FormControl(''),
            email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
            message: new FormControl('', [Validators.required])
        })
    }

    async onSubmit(FormData) {
        // console.log(FormData)
        this.sendEmailService.sendEmail(FormData)
            .subscribe(response => {
                // console.log(response)
                this.flashMessages.show('Sua mensagem foi enviada, em breve retornaremos o contato!',
                {cssClass: 'flashfade alert-success', timeout: 5000}
                );
                this.sent = true
            }, error => {
                // console.warn(error.responseText)
                // console.log({ error })
                this.flashMessages.show('Ops, aconteceu algum erro ao enviar sua mensagem, tente novamente.',
                {cssClass: 'flashfade alert-warning', timeout: 5000}
                );
            });
    }

    ngOnDestroy() {

    }
}
