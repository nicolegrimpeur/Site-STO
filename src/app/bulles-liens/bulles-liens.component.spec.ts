import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullesLiensComponent } from './bulles-liens.component';

describe('BullesLiensComponent', () => {
  let component: BullesLiensComponent;
  let fixture: ComponentFixture<BullesLiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullesLiensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BullesLiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
