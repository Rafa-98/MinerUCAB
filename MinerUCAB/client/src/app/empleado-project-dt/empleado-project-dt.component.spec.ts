import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoProjectDTComponent } from './empleado-project-dt.component';

describe('EmpleadoProjectDTComponent', () => {
  let component: EmpleadoProjectDTComponent;
  let fixture: ComponentFixture<EmpleadoProjectDTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoProjectDTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoProjectDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
