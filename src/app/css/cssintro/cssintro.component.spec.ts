import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSintroComponent } from './cssintro.component';

describe('CSSintroComponent', () => {
  let component: CSSintroComponent;
  let fixture: ComponentFixture<CSSintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSintroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
