import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosComponent } from './servicos/servicos.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
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
