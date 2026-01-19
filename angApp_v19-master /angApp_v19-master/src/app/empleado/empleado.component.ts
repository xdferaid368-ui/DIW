import { Component } from '@angular/core';
import { Empleado } from './empleado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  title: string = "Hola Empleado";

  public empleados: Empleado[];

  constructor() {
    this.empleados = [
      new Empleado("Miguel", "Pulido Carmona", 20, "Bufon", true),
      new Empleado("Ruben", "Lopez Rufino", 20, "Maquinover", false),
      new Empleado("Jaime", "Luna del valle", 19, "Programador", true),
      new Empleado("David", "Fernández Aido", 20, "CEO", false),
    ];
  }
}
