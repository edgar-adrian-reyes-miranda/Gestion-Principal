import {Universidad} from "./universidad";
import {Planesedu} from "./planesedu";
import { Periodo } from "./periodo";
import { ModEscolares } from "./ModEscolares";

export class Escolares {
  id_escolar?:number;
  correo_inst:string="";
  matricula:string="";
  carrera:string="";
  universidades:Universidad= new Universidad();
  modalidadesesco:ModEscolares= new ModEscolares();
  planeducativo:Planesedu= new Planesedu();
  periodo:Periodo= new Periodo();
}
