import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2directiveComponent } from './bt2directive.component';

describe('Bt2directiveComponent', () => {
  let component: Bt2directiveComponent;
  let fixture: ComponentFixture<Bt2directiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bt2directiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2directiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
