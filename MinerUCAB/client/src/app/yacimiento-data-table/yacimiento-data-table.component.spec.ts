import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YacimientoDataTableComponent } from './yacimiento-data-table.component';

describe('YacimientoDataTableComponent', () => {
  let component: YacimientoDataTableComponent;
  let fixture: ComponentFixture<YacimientoDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YacimientoDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YacimientoDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
