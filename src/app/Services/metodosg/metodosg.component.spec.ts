import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodosgComponent } from './metodosg.component';

describe('MetodosgComponent', () => {
  let component: MetodosgComponent;
  let fixture: ComponentFixture<MetodosgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetodosgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetodosgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
