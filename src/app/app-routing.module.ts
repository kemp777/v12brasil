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
                agencia marketing digital campinas,
                inbound marketing campinas,
                agência digital full service,
                agencia digital full service,
                agência de marketing digital full service,
                agencia de marketing digital full service,
                agência de marketing digital campinas,
                agencia de marketing digital campinas,
                agência marketing digital campinas,
                agencias de marketing digital em campinas,
                marketing digital em campinas,
                agencia seo,
                agencia seo brasil,
                agência seo,
                agência seo brasil,
                agencia especializada seo,
                agencia especializada em seo,
                agência especializada seo,
                agência especializada em seo,
                agencia seo marketing,
                agencia ux,
                agência ux,
                agencia ux campinas,
                agência ux campinas,
                agencia ux em campinas,
                agência ux em campinas,
                agencia ux design,
                agência ux design,
                agencia ux design campinas,
                agência ux design campinas,
                agencia ux design em campinas,
                agência ux design em campinas,
                agencia ux ui design,
                agência ux ui design,
                agencia ux ui design em campinas,
                agência ux ui design em campinas,
                agencias de ux ui design,
                agências de ux ui design,
                agencia seo online,
                agência seo online,
                agencia ux ui design,
                agência ux ui design,
                consultoria ux,
                empresas de ux,
                empresas de ux design
            `,
            description: 'A agência V12 Brasil é uma agencia de marketing digital especializada em SEO e UX UI design, sediada em Campinas/SP que atende empresas de todos os portes'

        }
    },
    {
        path: 'sobre',
        component: SobreComponent,
        data: {
            title: titleBrand + ' Sobre a Agência de Marketing Digital',
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de Sobre a Agência',
            gtagEventCategory: 'Sobre',
            keywords: 'sobre a agencia de marketing digital campinas/sp',
            description: ''
        }
    },
    {
        path: 'servicos',
        component: ServicosComponent,
        data: {
            title: titleBrand + ' - ' + 'Serviços de Marketing Digital & SEO personalizados para cada cliente',
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de Serviçoss',
            gtagEventCategory: 'Serviços',
            keywords: `serviços de marketing digital`,
            description: ''
        }
    },
    {
        path: 'servicos/websites',
        component: WebsitesComponent,
        data: {
            title: titleBrand + ' - ' + 'Um tipo de website para cada necessidade',
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de  Websites',
            gtagEventCategory: 'Websites',
            keywords: '',
            description: ''
        }
    },
    {
        path: 'servicos/seo',
        component: SeoComponent,
        data: {
            title: titleBrand + ' - ' + 'Apareça na primeira página do Google',
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de SEO',
            gtagEventCategory: 'SEO',
            keywords: '',
            description: ''
        }
    },
    {
        path: 'servicos/ecommerce',
        component: EcommerceComponent,
        data: {
            title: titleBrand + ' - ' + 'Vantagens de uma Loja Virtual',
            gtagEventName: 'click',
            gtagEventValue: '',
            gtagEventLabel: 'Acesso ao link(rota) de Lojas Virtuais',
            gtagEventCategory: 'Lojas Virtuais',
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
