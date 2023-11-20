import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorbusquedaComponent } from './motorbusqueda.component';

describe('MotorbusquedaComponent', () => {
  let component: MotorbusquedaComponent;
  let fixture: ComponentFixture<MotorbusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorbusquedaComponent]
    });
    fixture = TestBed.createComponent(MotorbusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
