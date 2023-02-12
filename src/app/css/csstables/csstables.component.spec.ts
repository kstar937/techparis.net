import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSStablesComponent } from './csstables.component';

describe('CSStablesComponent', () => {
  let component: CSStablesComponent;
  let fixture: ComponentFixture<CSStablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSStablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSStablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
