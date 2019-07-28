import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoDataTatbleComponent } from './proyecto-data-tatble.component';

describe('ProyectoDataTatbleComponent', () => {
  let component: ProyectoDataTatbleComponent;
  let fixture: ComponentFixture<ProyectoDataTatbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoDataTatbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoDataTatbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
