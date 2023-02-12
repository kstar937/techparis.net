import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSlinksComponent } from './csslinks.component';

describe('CSSlinksComponent', () => {
  let component: CSSlinksComponent;
  let fixture: ComponentFixture<CSSlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSlinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
