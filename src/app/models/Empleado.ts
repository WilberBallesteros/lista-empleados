export class Empleado {
  identificador: number;
  nombre: string;
  apellido: string;
  sexo: string;
  salario: number;

  constructor(iden: number, nombre: string, apellido: string, sexo: string, salario: number) {
    this.identificador = iden;
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.salario = salario;

  }
}
