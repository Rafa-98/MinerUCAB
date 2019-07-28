import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModEmpleadoComponent } from './add-mod-empleado.component';

describe('AddModEmpleadoComponent', () => {
  let component: AddModEmpleadoComponent;
  let fixture: ComponentFixture<AddModEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
