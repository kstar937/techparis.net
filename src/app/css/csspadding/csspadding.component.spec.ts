import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSpaddingComponent } from './csspadding.component';

describe('CSSpaddingComponent', () => {
  let component: CSSpaddingComponent;
  let fixture: ComponentFixture<CSSpaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSpaddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSpaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
