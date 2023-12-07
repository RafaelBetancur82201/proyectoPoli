import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablarComponent } from './tablar.component';

describe('TablarComponent', () => {
  let component: TablarComponent;
  let fixture: ComponentFixture<TablarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablarComponent]
    });
    fixture = TestBed.createComponent(TablarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
