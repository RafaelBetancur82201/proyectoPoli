import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndextrabajadorComponent } from './indextrabajador.component';

describe('IndextrabajadorComponent', () => {
  let component: IndextrabajadorComponent;
  let fixture: ComponentFixture<IndextrabajadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndextrabajadorComponent]
    });
    fixture = TestBed.createComponent(IndextrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
