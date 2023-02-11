import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLlinksComponent } from './htmllinks.component';

describe('HTMLlinksComponent', () => {
  let component: HTMLlinksComponent;
  let fixture: ComponentFixture<HTMLlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLlinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTMLlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
