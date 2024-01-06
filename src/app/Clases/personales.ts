import {Genero} from "./genero";

export class Personales {
  id_person?:number;
  nombre:string="";
  p_apellido:string="";
  s_apellido:string="";
  correo:string="";
  edad:string="";
  telefono:string="";
  telefono_casa:string="";
  tipo_genero?:Genero= new Genero();
  curp:string="";
  direccion:string="";
  estados:string="";
  municipio:string="";
}
