import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpHandlerComponent } from './http-handler.component';

describe('HttpHandlerComponent', () => {
  let component: HttpHandlerComponent;
  let fixture: ComponentFixture<HttpHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
