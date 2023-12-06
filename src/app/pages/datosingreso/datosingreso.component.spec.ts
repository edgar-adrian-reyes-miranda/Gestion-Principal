import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosingresoComponent } from './datosingreso.component';

describe('DatosingresoComponent', () => {
  let component: DatosingresoComponent;
  let fixture: ComponentFixture<DatosingresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosingresoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
