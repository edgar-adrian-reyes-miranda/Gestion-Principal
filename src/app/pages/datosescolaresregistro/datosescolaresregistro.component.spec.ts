import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosescolaresregistroComponent } from './datosescolaresregistro.component';

describe('DatosescolaresregistroComponent', () => {
  let component: DatosescolaresregistroComponent;
  let fixture: ComponentFixture<DatosescolaresregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosescolaresregistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosescolaresregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
