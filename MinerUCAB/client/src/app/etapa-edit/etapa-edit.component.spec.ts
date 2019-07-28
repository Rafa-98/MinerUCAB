import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaEditComponent } from './etapa-edit.component';

describe('EtapaEditComponent', () => {
  let component: EtapaEditComponent;
  let fixture: ComponentFixture<EtapaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
