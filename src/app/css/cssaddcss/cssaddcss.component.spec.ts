import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSaddcssComponent } from './cssaddcss.component';

describe('CSSaddcssComponent', () => {
  let component: CSSaddcssComponent;
  let fixture: ComponentFixture<CSSaddcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSaddcssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSaddcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
