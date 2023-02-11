import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlbasicexamplesComponent } from './htmlbasicexamples.component';

describe('HtmlbasicexamplesComponent', () => {
  let component: HtmlbasicexamplesComponent;
  let fixture: ComponentFixture<HtmlbasicexamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlbasicexamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlbasicexamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
