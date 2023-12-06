import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosescolaresComponent } from './datosescolares.component';

describe('DatosescolaresComponent', () => {
  let component: DatosescolaresComponent;
  let fixture: ComponentFixture<DatosescolaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosescolaresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosescolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
