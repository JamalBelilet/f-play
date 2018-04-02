import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpPlayItemComponent } from './fp-play-item.component';

describe('FpPlayItemComponent', () => {
  let component: FpPlayItemComponent;
  let fixture: ComponentFixture<FpPlayItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpPlayItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpPlayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
