import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexclienteComponent } from './indexcliente.component';

describe('IndexclienteComponent', () => {
  let component: IndexclienteComponent;
  let fixture: ComponentFixture<IndexclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexclienteComponent]
    });
    fixture = TestBed.createComponent(IndexclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
