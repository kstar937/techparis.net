import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLtablesComponent } from './htmltables.component';

describe('HTMLtablesComponent', () => {
  let component: HTMLtablesComponent;
  let fixture: ComponentFixture<HTMLtablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLtablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTMLtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
