import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSbordersComponent } from './cssborders.component';

describe('CSSbordersComponent', () => {
  let component: CSSbordersComponent;
  let fixture: ComponentFixture<CSSbordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSbordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSbordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
