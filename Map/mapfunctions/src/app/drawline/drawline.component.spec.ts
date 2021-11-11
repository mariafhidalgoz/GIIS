import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawlineComponent } from './drawline.component';

describe('DrawlineComponent', () => {
  let component: DrawlineComponent;
  let fixture: ComponentFixture<DrawlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
