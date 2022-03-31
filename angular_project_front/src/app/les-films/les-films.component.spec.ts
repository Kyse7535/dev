import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesFilmsComponent } from './les-films.component';

describe('LesFilmsComponent', () => {
  let component: LesFilmsComponent;
  let fixture: ComponentFixture<LesFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
