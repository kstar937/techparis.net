import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSbackgroundComponent } from './cssbackground.component';

describe('CSSbackgroundComponent', () => {
  let component: CSSbackgroundComponent;
  let fixture: ComponentFixture<CSSbackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSbackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
