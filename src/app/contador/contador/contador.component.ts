import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>La base es{{ base }}</h3>
    <button (click)="acc(base)">+{{ base }}</button>
    <span>{{ number }}</span>

    <button (click)="acc(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  title: string = 'Contador app';
  number: number = 10;
  base: number = 5;

  acc(value: number) {
    this.number += value;
  }
}
