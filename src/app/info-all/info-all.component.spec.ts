import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAllComponent } from './info-all.component';

describe('InfoAllComponent', () => {
  let component: InfoAllComponent;
  let fixture: ComponentFixture<InfoAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
