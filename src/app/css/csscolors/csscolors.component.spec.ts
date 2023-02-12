import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSScolorsComponent } from './csscolors.component';

describe('CSScolorsComponent', () => {
  let component: CSScolorsComponent;
  let fixture: ComponentFixture<CSScolorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSScolorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSScolorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
