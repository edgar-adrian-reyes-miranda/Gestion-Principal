import {Universidad} from "./universidad";
import {Modalidad} from "./modalidad";
import {Planesedu} from "./planesedu";

export class Escolares {
  id_escolar:number=0;
  correo_ins:string="";
  matricula:string="";
  universidades:Universidad= new Universidad();
  modalidadesesco:Modalidad= new Modalidad();
  planeducativo:Planesedu= new Planesedu();
}
