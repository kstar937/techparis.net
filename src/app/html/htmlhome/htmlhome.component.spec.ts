import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlhomeComponent } from './htmlhome.component';

describe('HtmlhomeComponent', () => {
  let component: HtmlhomeComponent;
  let fixture: ComponentFixture<HtmlhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
