import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class SendEmailService {

    constructor(private https: HttpClient) {
    }

    sendEmail(FormData) {
        const uri = '/send-email';

        return this.https.post(
            uri,
            FormData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'https://localhost:4200',
                    // tslint:disable-next-line:max-line-length
                    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent',
                    'Access-Control-Allow-Methods': 'POST',

                },
                responseType: 'text'
            }
        );
    }
}