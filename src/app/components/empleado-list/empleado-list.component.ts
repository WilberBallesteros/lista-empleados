import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleados: Empleado[] = [
    {identificador: 1, nombre: 'Fredy', apellido: 'Ballesteros', sexo: 'Masculino', salario: 1400000},
    {identificador: 2, nombre: 'Johana', apellido: 'Suarez', sexo: 'Femenino', salario: 1500000},
    {identificador: 3, nombre: 'Flor', apellido: 'Toloza', sexo: 'Femenino', salario: 1000000},
    {identificador: 4, nombre: 'Rodolfo', apellido: 'Santamaria', sexo: 'Masculino', salario: 1100000},
    {identificador: 5, nombre: 'Andres', apellido: 'Rojas', sexo: 'Masculino', salario: 5000000},
    {identificador: 6, nombre: 'Diego', apellido: 'Rivera', sexo: 'Masculino', salario: 1200000},

  ]

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(lista => lista.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(lista => lista.sexo === 'Masculino').length;
  }

}
