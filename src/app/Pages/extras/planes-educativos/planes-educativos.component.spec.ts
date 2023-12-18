import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesEducativosComponent } from './planes-educativos.component';

describe('PlanesEducativosComponent', () => {
  let component: PlanesEducativosComponent;
  let fixture: ComponentFixture<PlanesEducativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanesEducativosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanesEducativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
