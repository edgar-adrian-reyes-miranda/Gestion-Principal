import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTDComponent } from './ftd.component';

describe('FTDComponent', () => {
  let component: FTDComponent;
  let fixture: ComponentFixture<FTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FTDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
