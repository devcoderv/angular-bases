import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { HeroeComponent } from './heroe.component';

@NgModule({
  declarations: [ListadoComponent, HeroeComponent],
  exports: [ListadoComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
