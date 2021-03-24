import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SobreComponent} from './sobre/sobre.component';
import {ServicosComponent} from './servicos/servicos.component';
import {WebsitesComponent} from './servicos/websites/websites.component';
import {SeoComponent} from './servicos/seo/seo.component';
import {EcommerceComponent} from './servicos/ecommerce/ecommerce.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {FormComponent} from '../components/contact/form/form.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlashMessagesModule} from 'flash-messages-angular';

@NgModule({
    imports: [
        RouterModule,
        TooltipModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlashMessagesModule,
    ],
    declarations: [
        IndexComponent,
        SobreComponent,
        ServicosComponent,
        WebsitesComponent,
        SeoComponent,
        EcommerceComponent,
        FormComponent
    ],
    exports: [
        IndexComponent,
        SobreComponent,
        ServicosComponent,
        WebsitesComponent,
        SeoComponent,
        EcommerceComponent,
        FormComponent
    ],
    providers: []
})
export class PagesModule {
}
