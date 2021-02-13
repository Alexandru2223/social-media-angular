import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAllComponent } from './artist-all.component';

describe('ArtistAllComponent', () => {
  let component: ArtistAllComponent;
  let fixture: ComponentFixture<ArtistAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
