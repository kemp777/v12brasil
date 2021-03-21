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

const titleDescription = 'Agência de Marketing Digital, SEO e UX UI Design';
const titleBrand = 'V12 Brasil'

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        data: {
            title: titleBrand + ' ' + titleDescription,
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de Inicio',
            gtagEventCategory: 'Início',
            keywords: `
                agencia de marketing digital em campinas,
                agencia digital campinas,
                agencia digital em campinas,
                agência marketing digital,
                agencia marketing digital,
                agência de marketing campinas,
                agencia de marketing digital,
                agencia de marketing digital seo,
                agência de marketing digital seo,
                marketing digital campinas/sp,
                agencia marketing digital campinas/sp,
                agencia marketing digital em campinas/sp,
                agencia de marketing digital campinas/sp,
                agencia de marketing digital em campinas/sp,
                marketing digital em campinas/sp,
                agencia digital em campinas,
                agencia marketing digital campinas
            `,
            description: 'A agência V12 Brasil é uma agencia de marketing digital especializada em SEO e UX UI design, sediada em Campinas/SP que atende empresas de todos os portes.'

        }
    },
    {
        path: 'sobre',
        component: SobreComponent,
        data: {
            title: 'Sobre a Agência ' + titleBrand + ' especializada em SEO e UX UI design',
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de Sobre a Agência',
            gtagEventCategory: 'Sobre',
            keywords: `
                agencia seo,
                agencia seo brasil,
                agência seo,
                agência seo brasil,
                agencia especializada seo,
                agencia especializada em seo,
                agencia seo marketing,
                agencia ux ui design,
                agência ux ui design,
                agencia ux ui design em campinas
            `,
            description: 'A agência V12 Brasil é uma agencia de marketing digital especializada em SEO e UX UI design, sediada em Campinas/SP.'
        }
    },
    {
        path: 'servicos',
        component: ServicosComponent,
        data: {
            title: 'Serviços de Marketing Digital para empresas - Agência ' + titleBrand,
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de Serviçoss',
            gtagEventCategory: 'Serviços',
            keywords: `
                serviços de marketing digital,
                servicos de marketing digital,
                serviços de marketing digital campinas,
                servicos de marketing digital campinas,
                serviços marketing digital,
                servicos marketing digital,
                serviços marketing digital campinas,
                servicos marketing digital campinas,
                serviços de agencia de marketing digital,
                marketing digital empresa de serviços
            `,
            description: 'A V12 Brasil é uma agência sediada em Campinas que presta serviços de Marketing Digital e SEO para empresas de pequeno, médio e grande porte.'
        }
    },
    {
        path: 'servicos/websites',
        component: WebsitesComponent,
        data: {
            title: 'Criação e desenvolvimento de Websites em Campinas | Agência V12',
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de  Websites',
            gtagEventCategory: 'Serviços',
            keywords: `
                criação de sites,
                desenvolvimento de sites,
                agencia de sites,
                agência de sites,
                agencia criação de sites,
                agencia criação sites,
                agencia criação de sites em campinas,
                agencia criação sites campinas,
                agencia de criação de sites,
                agência de criação de sites,
                desenvolvimento de sites em campinas
            `,
            description: 'A V12 Brasil é uma agência sediada em Campinas que presta serviços de criação e desenvolvimento de sites para empresas de pequeno, médio e grande porte.'
        }
    },
    {
        path: 'servicos/seo',
        component: SeoComponent,
        data: {
            title: titleBrand + ' | ' + 'Apareça na primeira página do Google',
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de SEO',
            gtagEventCategory: 'Serviços',
            keywords: '',
            description: ''
        }
    },
    {
        path: 'servicos/ecommerce',
        component: EcommerceComponent,
        data: {
            title: titleBrand + ' | ' + 'Vantagens de uma Loja Virtual',
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de Lojas Virtuais',
            gtagEventCategory: 'Serviços',
            keywords: '',
            description: ''
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
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
