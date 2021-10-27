import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNgsxComponent } from './todo-ngsx.component';

describe('TodoNgsxComponent', () => {
  let component: TodoNgsxComponent;
  let fixture: ComponentFixture<TodoNgsxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoNgsxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNgsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
