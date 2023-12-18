import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosingresosComponent } from './datosingresos.component';

describe('DatosingresosComponent', () => {
  let component: DatosingresosComponent;
  let fixture: ComponentFixture<DatosingresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosingresosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosingresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
