import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstnumber: number;
  secondnumber: number;
  subinput1: number;
  subinput2: number;
  mulinput1: number;
  mulinput2: number;
  divinput1: number;
  divinput2: number;
  sum = 0;
  sub = 0;
  mul = 0;
  div = 0;

  addition() {
    this.sum = this.firstnumber + this.secondnumber;
    return this.sum;
  }

  subtraction() {
    this.sub = this.subinput1 - this.subinput2;
    return this.sub;
  }

  multiplication() {
    this.mul = this.mulinput1 * this.mulinput2;
    return this.mul;
  }

  division() {
    this.div = this.divinput1 / this.divinput2;
    return this.div;
  }
}
