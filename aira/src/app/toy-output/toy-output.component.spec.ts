import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyOutputComponent } from './toy-output.component';

describe('ToyOutputComponent', () => {
  let component: ToyOutputComponent;
  let fixture: ComponentFixture<ToyOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
