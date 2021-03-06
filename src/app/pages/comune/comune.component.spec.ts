import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComuneComponent } from './comune.component';

describe('ComuneComponent', () => {
  let component: ComuneComponent;
  let fixture: ComponentFixture<ComuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
