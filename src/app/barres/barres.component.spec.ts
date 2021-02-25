import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarresComponent } from './barres.component';

describe('BarresComponent', () => {
  let component: BarresComponent;
  let fixture: ComponentFixture<BarresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
