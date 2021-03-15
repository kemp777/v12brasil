import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SobreComponent} from './sobre/sobre.component';
import {ServicosComponent} from './servicos/servicos.component';
import {WebsitesComponent} from './servicos/websites/websites.component';
import {SeoComponent} from './servicos/seo/seo.component';

@NgModule({
    imports: [
        RouterModule,
    ],
    declarations: [
        IndexComponent,
        SobreComponent,
        ServicosComponent,
        WebsitesComponent,
        SeoComponent
    ],
    exports: [
        IndexComponent,
        SobreComponent,
        ServicosComponent,
        WebsitesComponent,
        SeoComponent
    ],
    providers: []
})
export class PagesModule {
}
