import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtDataBindingComponent } from './bt-data-binding.component';

describe('BtDataBindingComponent', () => {
  let component: BtDataBindingComponent;
  let fixture: ComponentFixture<BtDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
