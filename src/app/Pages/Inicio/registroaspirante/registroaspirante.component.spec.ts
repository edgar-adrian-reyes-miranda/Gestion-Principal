import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroaspiranteComponent } from './registroaspirante.component';

describe('RegistroaspiranteComponent', () => {
  let component: RegistroaspiranteComponent;
  let fixture: ComponentFixture<RegistroaspiranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroaspiranteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroaspiranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
