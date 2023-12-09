import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListappartementsComponent } from './listappartements.component';

describe('ListappartementsComponent', () => {
  let component: ListappartementsComponent;
  let fixture: ComponentFixture<ListappartementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListappartementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListappartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
