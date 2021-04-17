import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PagesModule} from './pages/pages.module';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {ContactComponent} from './components/contact/contact.component';
import {CustomersComponent} from './components/customers/customers.component';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {AlertModule} from 'ngx-bootstrap/alert';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BrowserModule, Title} from '@angular/platform-browser';
import {WhatsappComponent} from './components/whatsapp/whatsapp.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FundoComponent} from './components/fundo/fundo.component';
import {FlashMessagesModule} from 'flash-messages-angular';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ContactComponent,
        CustomersComponent,
        FooterComponent,
        WhatsappComponent,
        FundoComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        FontAwesomeModule,
        BrowserAnimationsModule,
        FlashMessagesModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        CollapseModule,
        PagesModule,
        BsDropdownModule.forRoot(),
        ProgressbarModule.forRoot(),
        TooltipModule.forRoot(),
        CollapseModule.forRoot(),
        TabsModule.forRoot(),
        PaginationModule.forRoot(),
        AlertModule.forRoot(),
        BsDatepickerModule.forRoot(),
        CarouselModule.forRoot(),
        ModalModule.forRoot(),
    ],
    providers: [
        Title,
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        },
        {
            provide: LOCALE_ID,
            useValue: 'pt'
        }
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
