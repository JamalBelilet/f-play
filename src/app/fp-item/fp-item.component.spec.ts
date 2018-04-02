import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpItemComponent } from './fp-item.component';

describe('FpItemComponent', () => {
  let component: FpItemComponent;
  let fixture: ComponentFixture<FpItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
