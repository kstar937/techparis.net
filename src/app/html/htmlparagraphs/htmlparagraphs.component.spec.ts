import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlparagraphsComponent } from './htmlparagraphs.component';

describe('HtmlparagraphsComponent', () => {
  let component: HtmlparagraphsComponent;
  let fixture: ComponentFixture<HtmlparagraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlparagraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlparagraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
