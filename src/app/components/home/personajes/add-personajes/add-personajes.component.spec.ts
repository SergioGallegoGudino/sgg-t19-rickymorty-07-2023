import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonajesComponent } from './add-personajes.component';

describe('AddPersonajesComponent', () => {
  let component: AddPersonajesComponent;
  let fixture: ComponentFixture<AddPersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPersonajesComponent]
    });
    fixture = TestBed.createComponent(AddPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
