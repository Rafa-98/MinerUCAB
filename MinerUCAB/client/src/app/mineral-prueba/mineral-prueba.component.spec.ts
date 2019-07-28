import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralPruebaComponent } from './mineral-prueba.component';

describe('MineralPruebaComponent', () => {
  let component: MineralPruebaComponent;
  let fixture: ComponentFixture<MineralPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineralPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
