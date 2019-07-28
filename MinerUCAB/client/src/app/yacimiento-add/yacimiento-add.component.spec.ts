import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YacimientoAddComponent } from './yacimiento-add.component';

describe('YacimientoAddComponent', () => {
  let component: YacimientoAddComponent;
  let fixture: ComponentFixture<YacimientoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YacimientoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YacimientoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
