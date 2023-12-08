import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1sComponent } from './c1s.component';

describe('C1sComponent', () => {
  let component: C1sComponent;
  let fixture: ComponentFixture<C1sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1sComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
