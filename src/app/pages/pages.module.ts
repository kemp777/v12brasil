import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosComponent } from './servicos/servicos.component';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    IndexComponent,
    SobreComponent,
    ServicosComponent
  ],
  exports: [
    IndexComponent,
    SobreComponent,
    ServicosComponent
  ],
  providers: []
})
export class PagesModule {}
