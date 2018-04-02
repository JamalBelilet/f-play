import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpPlayComponent } from './fp-play.component';

describe('FpPlayComponent', () => {
  let component: FpPlayComponent;
  let fixture: ComponentFixture<FpPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
