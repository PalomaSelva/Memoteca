import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePensamentosComponent } from './create-pensamentos.component';

describe('CreatePensamentosComponent', () => {
  let component: CreatePensamentosComponent;
  let fixture: ComponentFixture<CreatePensamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePensamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
