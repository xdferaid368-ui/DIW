import { Component } from '@angular/core';
import { Alumnado } from './alumnado';

@Component({
  selector: 'app-alumnado-daw',
  templateUrl: './alumnado-daw.component.html',
  styleUrl: './alumnado-daw.component.css'
})
export class AlumnadoDAWComponent {

  public alumnadoPrimero: Alumnado[] = [
    new Alumnado(
      "Juan",
      "Pérez Gómez",
      "12345678A",
      "2005-03-12",
      "Sevilla",
      "600123456",
      1,
      ["Programación", "Bases de Datos", "Entornos", "Lenguajes"]
    ),
    new Alumnado(
      "María",
      "López Ruiz",
      "87654321B",
      "2004-07-22",
      "Dos Hermanas",
      "611987654",
      1,
      ["Programación", "Sistemas", "Bases de Datos"]
    )
  ];

  public alumnadoSegundo: Alumnado[] = [
    new Alumnado(
      "Carlos",
      "Fernández Díaz",
      "11223344C",
      "2003-01-15",
      "Utrera",
      "622334455",
      2,
      ["Angular", "Servidor", "Empresa", "Interfaces"]
    ),
    new Alumnado(
      "Lucía",
      "Martín Sánchez",
      "44332211D",
      "2002-11-03",
      "Sevilla",
      "633445566",
      2,
      ["Angular", "Servicios", "Despliegue"]
    )
  ];

  public alumnadoMostrar: Alumnado[] = [];

  mostrarPrimero() {
    this.alumnadoMostrar = this.alumnadoPrimero;
  }

  mostrarSegundo() {
    this.alumnadoMostrar = this.alumnadoSegundo;
  }
}
