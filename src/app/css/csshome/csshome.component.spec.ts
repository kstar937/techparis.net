import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSShomeComponent } from './csshome.component';

describe('CSShomeComponent', () => {
  let component: CSShomeComponent;
  let fixture: ComponentFixture<CSShomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSShomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSShomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
