import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSfontComponent } from './cssfont.component';

describe('CSSfontComponent', () => {
  let component: CSSfontComponent;
  let fixture: ComponentFixture<CSSfontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSfontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSfontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
