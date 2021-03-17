import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {SobreComponent} from './pages/sobre/sobre.component';
import {ServicosComponent} from './pages/servicos/servicos.component';
import {WebsitesComponent} from './pages/servicos/websites/websites.component';
import {SeoComponent} from './pages/servicos/seo/seo.component';
import {EcommerceComponent} from './pages/servicos/ecommerce/ecommerce.component';

const title = 'V12 Brasil - Agência de Marketing Digital e Consultoria';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        data: {
            title,
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de Inicio',
            gtagEventCategory: 'Início',
        }
    },
    {
        path: 'sobre',
        component: SobreComponent,
        data: {
            title,
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de Sobre a Agência',
            gtagEventCategory: 'Sobre',
        }
    },
    {
        path: 'servicos',
        component: ServicosComponent,
        data: {
            title,
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de Serviçoss',
            gtagEventCategory: 'Serviços',
        }
    },
    {
        path: 'servicos/websites',
        component: WebsitesComponent,
        data: {
            title,
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de  Websites',
            gtagEventCategory: 'Websites',
        }
    },
    {
        path: 'servicos/seo',
        component: SeoComponent,
        data: {
            title,
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de SEO',
            gtagEventCategory: 'SEO',
        }
    },
    {
        path: 'servicos/ecommerce',
        component: EcommerceComponent,
        data: {
            title,
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de Lojas Virtuais',
            gtagEventCategory: 'Lojas Virtuais',
        }
    },
    {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: false,
            initialNavigation: 'enabled',
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled'
        },)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
