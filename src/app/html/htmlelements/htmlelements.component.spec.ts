import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlelementsComponent } from './htmlelements.component';

describe('HtmlelementsComponent', () => {
  let component: HtmlelementsComponent;
  let fixture: ComponentFixture<HtmlelementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlelementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
