import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtDirectiveComponent } from './bt-directive.component';

describe('BtDirectiveComponent', () => {
  let component: BtDirectiveComponent;
  let fixture: ComponentFixture<BtDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
