import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighmapComponent } from './highmap.component';

describe('HighmapComponent', () => {
  let component: HighmapComponent;
  let fixture: ComponentFixture<HighmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
