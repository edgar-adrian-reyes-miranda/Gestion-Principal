import {Universidad} from "./universidad";
import {Planesedu} from "./planesedu";
import { Periodo } from "./periodo";
import { ModalidadEscolar } from "./modalidad-escolar";

export class Escolares {
  id_escolar?:number;
  correo_inst?:string;
  matricula?:string;
  carrera?:string;
  universidades:Universidad= new Universidad();
  modalidadesesco:ModalidadEscolar= new ModalidadEscolar();
  planeducativo:Planesedu= new Planesedu();
  periodo:Periodo= new Periodo();
}
