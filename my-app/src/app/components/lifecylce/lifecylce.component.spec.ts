import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecylceComponent } from './lifecylce.component';

describe('LifecylceComponent', () => {
  let component: LifecylceComponent;
  let fixture: ComponentFixture<LifecylceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecylceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifecylceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
