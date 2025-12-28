import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DTOs } from './DTOs';

describe('DTOs', () => {
  let component: DTOs;
  let fixture: ComponentFixture<DTOs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DTOs],
    }).compileComponents();

    fixture = TestBed.createComponent(DTOs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
