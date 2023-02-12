import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSlistComponent } from './csslist.component';

describe('CSSlistComponent', () => {
  let component: CSSlistComponent;
  let fixture: ComponentFixture<CSSlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
