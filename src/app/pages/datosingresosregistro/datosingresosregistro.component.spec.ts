import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosingresosregistroComponent } from './datosingresosregistro.component';

describe('DatosingresosregistroComponent', () => {
  let component: DatosingresosregistroComponent;
  let fixture: ComponentFixture<DatosingresosregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosingresosregistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosingresosregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
