import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaProjectDTComponent } from './maquina-project-dt.component';

describe('MaquinaProjectDTComponent', () => {
  let component: MaquinaProjectDTComponent;
  let fixture: ComponentFixture<MaquinaProjectDTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinaProjectDTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaProjectDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
