import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneprouctComponent } from './oneprouct.component';

describe('OneprouctComponent', () => {
  let component: OneprouctComponent;
  let fixture: ComponentFixture<OneprouctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneprouctComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneprouctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
