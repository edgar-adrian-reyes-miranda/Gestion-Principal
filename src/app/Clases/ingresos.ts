import { Horario } from "./horario";
import { Modalidad } from "./modalidad";
import { Perfilamiento } from "./perfilamiento";
import { Tramite } from "./tramite";
import { Turno } from "./turno";

export class Ingresos {
  id_ingreso?:number;
  horario:Horario= new Horario();
  tramite:Tramite= new Tramite();
  modalidad:Modalidad= new Modalidad();
  turno:Turno= new Turno();
  perfilamiento:Perfilamiento= new Perfilamiento();
  historial_Academico:string="";
  cv:string="";
}
