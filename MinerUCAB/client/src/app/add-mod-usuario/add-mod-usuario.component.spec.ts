import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModUsuarioComponent } from './add-mod-usuario.component';

describe('AddModUsuarioComponent', () => {
  let component: AddModUsuarioComponent;
  let fixture: ComponentFixture<AddModUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
