import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDataTableComponent } from './empleado-data-table.component';

describe('EmpleadoDataTableComponent', () => {
  let component: EmpleadoDataTableComponent;
  let fixture: ComponentFixture<EmpleadoDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
