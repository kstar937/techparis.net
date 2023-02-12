import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSdimensionComponent } from './cssdimension.component';

describe('CSSdimensionComponent', () => {
  let component: CSSdimensionComponent;
  let fixture: ComponentFixture<CSSdimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSdimensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSdimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
