import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPaintingListComponent } from './all-painting-list.component';

describe('AllPaintingListComponent', () => {
  let component: AllPaintingListComponent;
  let fixture: ComponentFixture<AllPaintingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPaintingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPaintingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
