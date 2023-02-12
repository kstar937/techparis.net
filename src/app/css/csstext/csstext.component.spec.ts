import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSStextComponent } from './csstext.component';

describe('CSStextComponent', () => {
  let component: CSStextComponent;
  let fixture: ComponentFixture<CSStextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSStextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSStextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
