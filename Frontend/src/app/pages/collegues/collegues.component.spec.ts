import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleguesComponent } from './collegues.component';

describe('ColleguesComponent', () => {
  let component: ColleguesComponent;
  let fixture: ComponentFixture<ColleguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColleguesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColleguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
