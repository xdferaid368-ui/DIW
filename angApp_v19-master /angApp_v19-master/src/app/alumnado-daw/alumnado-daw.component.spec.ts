import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnadoDawComponent } from './alumnado-daw.component';

describe('AlumnadoDawComponent', () => {
  let component: AlumnadoDawComponent;
  let fixture: ComponentFixture<AlumnadoDawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnadoDawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnadoDawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
