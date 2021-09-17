import { Component, OnInit } from '@angular/core';
import { calculadora } from '../calculadora';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent implements OnInit {

  operaciones : calculadora ={
    valor1: 0,
    valor2: 0,
    resultado: 0
  }

  onSumar(): void {
    this.operaciones.resultado = (this.operaciones.valor1*1) + (this.operaciones.valor2*1);
  }

  onRestar(): void {
    this.operaciones.resultado = this.operaciones.valor1 - this.operaciones.valor2;
  }

  onMultiplicar(): void {
    this.operaciones.resultado = this.operaciones.valor1 * this.operaciones.valor2;
  }

  onDividir(): void {
    this.operaciones.resultado = this.operaciones.valor1 / this.operaciones.valor2;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
