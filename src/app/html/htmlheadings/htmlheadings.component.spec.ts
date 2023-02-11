import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlheadingsComponent } from './htmlheadings.component';

describe('HtmlheadingsComponent', () => {
  let component: HtmlheadingsComponent;
  let fixture: ComponentFixture<HtmlheadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlheadingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlheadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
