import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralCompraComponent } from './mineral-compra.component';

describe('MineralCompraComponent', () => {
  let component: MineralCompraComponent;
  let fixture: ComponentFixture<MineralCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineralCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
