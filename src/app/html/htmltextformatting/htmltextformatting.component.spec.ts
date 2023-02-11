import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLtextformattingComponent } from './htmltextformatting.component';

describe('HTMLtextformattingComponent', () => {
  let component: HTMLtextformattingComponent;
  let fixture: ComponentFixture<HTMLtextformattingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLtextformattingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTMLtextformattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
