import { Component, OnInit } from '@angular/core';
import { calculadora } from '../calculadora';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  calculadora: calculadora ={
    nombre: 'Calculadora',
    valor1: 5,
    valor2: 10,
    resultado: 15
  }
  constructor() { }

  ngOnInit(): void {
  }

}
