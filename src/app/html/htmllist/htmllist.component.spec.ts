import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLlistComponent } from './htmllist.component';

describe('HTMLlistComponent', () => {
  let component: HTMLlistComponent;
  let fixture: ComponentFixture<HTMLlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTMLlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
