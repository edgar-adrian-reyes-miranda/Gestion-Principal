import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosftdComponent } from './datosftd.component';

describe('DatosftdComponent', () => {
  let component: DatosftdComponent;
  let fixture: ComponentFixture<DatosftdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosftdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosftdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
