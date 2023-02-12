import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSlayoutComponent } from './csslayout.component';

describe('CSSlayoutComponent', () => {
  let component: CSSlayoutComponent;
  let fixture: ComponentFixture<CSSlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSSlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
