import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawpolygonComponent } from './drawpolygon.component';

describe('DrawpolygonComponent', () => {
  let component: DrawpolygonComponent;
  let fixture: ComponentFixture<DrawpolygonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawpolygonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawpolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
