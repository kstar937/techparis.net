import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLiframeComponent } from './htmliframe.component';

describe('HTMLiframeComponent', () => {
  let component: HTMLiframeComponent;
  let fixture: ComponentFixture<HTMLiframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLiframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTMLiframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
