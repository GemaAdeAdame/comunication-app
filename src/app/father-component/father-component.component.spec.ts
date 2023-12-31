import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponentComponent } from './father-component.component';

describe('FatherComponentComponent', () => {
  let component: FatherComponentComponent;
  let fixture: ComponentFixture<FatherComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherComponentComponent]
    });
    fixture = TestBed.createComponent(FatherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
