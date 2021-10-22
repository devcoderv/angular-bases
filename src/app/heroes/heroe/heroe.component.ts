import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  name: string = 'Ironman';
  age: number = 45;

  get nameCapitalizado(): string {
    return this.name.toUpperCase();
  }

  method(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName() {
    this.name = 'Spiderman';
  }
  changeAge() {
    this.age = 30;
  }
}
