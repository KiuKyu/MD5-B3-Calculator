import {Component, OnInit} from '@angular/core';
import {ICalculator} from '../calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculator: ICalculator = {};

  constructor() {
  }

  ngOnInit() {
  }

  calculate() {
    switch (this.calculator.operand) {
      case 'add':
        this.calculator.result = this.calculator.num1 + this.calculator.num2;
        break;
      case 'subtract':
        this.calculator.result = this.calculator.num1 - this.calculator.num2;
        break;
      case 'divide':
        this.calculator.result = this.calculator.num1 / this.calculator.num2;
        break;
      case 'multiply':
        this.calculator.result = this.calculator.num1 * this.calculator.num2;
        break;
      default:
        alert('Chưa nhập phép tính');
        break;
    }
  }
}
