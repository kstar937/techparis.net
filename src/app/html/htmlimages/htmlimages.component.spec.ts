import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLimagesComponent } from './htmlimages.component';

describe('HTMLimagesComponent', () => {
  let component: HTMLimagesComponent;
  let fixture: ComponentFixture<HTMLimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLimagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTMLimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
