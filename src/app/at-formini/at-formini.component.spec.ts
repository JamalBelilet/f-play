import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtForminiComponent } from './at-formini.component';

describe('AtForminiComponent', () => {
  let component: AtForminiComponent;
  let fixture: ComponentFixture<AtForminiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtForminiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtForminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
