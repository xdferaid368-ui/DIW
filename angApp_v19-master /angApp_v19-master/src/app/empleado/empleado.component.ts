import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  title:string = 'Hola Empleado';
  public empleado:Empleado;
  public empleadoExt:Empleado;
  public trabajadores:Array<Empleado>=[];
  public trabajadorExterno:boolean=true;

constructor() {
  this.empleado = new Empleado("Juan", "Pérez", 21, "Programador", true);
  this.empleadoExt = new Empleado("Lucia", "Gómez", 21, "Administrativa", true);

  this.trabajadores = [
    new Empleado("David", "Fernández", 25, "Limpiador", false),
    new Empleado("María", "López", 30, "Diseñadora", false),
    new Empleado("Carlos", "Ruiz", 28, "Tester", false),

    // internos
    new Empleado("Ana", "Martín", 35, "Jefa de proyecto", true),
    new Empleado("Pablo", "Sánchez", 24, "Frontend", true)
  ];
}

  cambiarExterno(valor:boolean){
    this.trabajadorExterno = valor;
  }
}
