import { Component, OnInit } from '@angular/core';
import { estudiante } from '../estudiante';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudiante : estudiante = {
    nombre: 'Esdras Mefiboseth Morales Espina',
    carnet: '0907-18-9909',
    docente: 'Ing. Carlos Hernández'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
