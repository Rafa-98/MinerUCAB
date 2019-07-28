import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaAddComponent } from './maquina-add.component';

describe('MaquinaAddComponent', () => {
  let component: MaquinaAddComponent;
  let fixture: ComponentFixture<MaquinaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
