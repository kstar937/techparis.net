import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSsyntaxComponent } from './csssyntax.component';

describe('CSSsyntaxComponent', () => {
  let component: CSSsyntaxComponent;
  let fixture: ComponentFixture<CSSsyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSsyntaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSsyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
