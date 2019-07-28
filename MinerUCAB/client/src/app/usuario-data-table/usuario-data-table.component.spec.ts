import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDataTableComponent } from './usuario-data-table.component';

describe('UsuarioDataTableComponent', () => {
  let component: UsuarioDataTableComponent;
  let fixture: ComponentFixture<UsuarioDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
