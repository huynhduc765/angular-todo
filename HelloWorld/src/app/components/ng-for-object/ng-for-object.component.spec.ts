import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForObjectComponent } from './ng-for-object.component';

describe('NgForObjectComponent', () => {
  let component: NgForObjectComponent;
  let fixture: ComponentFixture<NgForObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
