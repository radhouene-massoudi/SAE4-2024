import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2sComponent } from './c2s.component';

describe('C2sComponent', () => {
  let component: C2sComponent;
  let fixture: ComponentFixture<C2sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2sComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C2sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
