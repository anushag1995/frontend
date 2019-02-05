import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracComponent } from './extrac.component';

describe('ExtracComponent', () => {
  let component: ExtracComponent;
  let fixture: ComponentFixture<ExtracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
