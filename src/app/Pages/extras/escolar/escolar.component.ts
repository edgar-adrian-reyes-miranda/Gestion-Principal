import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {ModescapiService} from "../../../Services/modescapi.service";
import {ModEscolares} from "../../../Clases/ModEscolares";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-escolar',
  standalone: true,
    imports: [CommonModule, HttpClientModule, ],
  templateUrl: './escolar.component.html',
  styleUrl: './escolar.component.css'
})
export class EscolarComponent implements OnInit {
  escolares: ModEscolares[] = [];

  constructor(private modaEsc: ModescapiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.modaEsc.getModEscolar().subscribe(
      (data: ModEscolares[]) => {
        this.escolares = data;
        this.cdr.detectChanges(); // Forzar la detección de cambios
      },
      error => console.error('Error al obtener la lista', error)
    );
  }
}
