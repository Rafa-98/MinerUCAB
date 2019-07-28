import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearYacimientoComponent } from './crear-yacimiento.component';

describe('CrearYacimientoComponent', () => {
  let component: CrearYacimientoComponent;
  let fixture: ComponentFixture<CrearYacimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearYacimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearYacimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
