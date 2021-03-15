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
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: IndexComponent, data: {title: 'Início - ' + title}},
    {path: 'sobre', component: SobreComponent, data: {title: 'Sobre - ' + title}},
    {path: 'servicos', component: ServicosComponent, data: {title: 'Serviços - ' + title}},
    {path: 'servicos/websites', component: WebsitesComponent, data: {title: 'Serviços - Websites - ' + title}},
    {path: 'servicos/seo', component: SeoComponent, data: {title: 'Serviços - SEO - ' + title}},
    {path: 'servicos/ecommerce', component: EcommerceComponent, data: {title: 'Serviços - E-Commerce - ' + title}},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: false,
            initialNavigation: 'enabled',
            anchorScrolling: 'enabled'
        },)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
