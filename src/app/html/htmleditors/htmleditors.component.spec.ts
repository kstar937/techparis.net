import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmleditorsComponent } from './htmleditors.component';

describe('HtmleditorsComponent', () => {
  let component: HtmleditorsComponent;
  let fixture: ComponentFixture<HtmleditorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmleditorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmleditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
