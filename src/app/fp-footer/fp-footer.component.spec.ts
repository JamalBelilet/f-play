import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpFooterComponent } from './fp-footer.component';

describe('FpFooterComponent', () => {
  let component: FpFooterComponent;
  let fixture: ComponentFixture<FpFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
