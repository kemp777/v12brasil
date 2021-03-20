import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SobreComponent} from './sobre/sobre.component';
import {ServicosComponent} from './servicos/servicos.component';
import {WebsitesComponent} from './servicos/websites/websites.component';
import {SeoComponent} from './servicos/seo/seo.component';
import {EcommerceComponent} from './servicos/ecommerce/ecommerce.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';

@NgModule({
    imports: [
        RouterModule,
        TooltipModule,
    ],
    declarations: [
        IndexComponent,
        SobreComponent,
        ServicosComponent,
        WebsitesComponent,
        SeoComponent,
        EcommerceComponent
    ],
    exports: [
        IndexComponent,
        SobreComponent,
        ServicosComponent,
        WebsitesComponent,
        SeoComponent,
        EcommerceComponent
    ],
    providers: []
})
export class PagesModule {
}
