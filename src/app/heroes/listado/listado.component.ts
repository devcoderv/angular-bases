import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Spideman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
