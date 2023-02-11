import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLclassComponent } from './htmlclass.component';

describe('HTMLclassComponent', () => {
  let component: HTMLclassComponent;
  let fixture: ComponentFixture<HTMLclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTMLclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
