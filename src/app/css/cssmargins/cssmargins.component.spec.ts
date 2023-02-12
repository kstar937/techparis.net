import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSmarginsComponent } from './cssmargins.component';

describe('CSSmarginsComponent', () => {
  let component: CSSmarginsComponent;
  let fixture: ComponentFixture<CSSmarginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSmarginsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSmarginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
