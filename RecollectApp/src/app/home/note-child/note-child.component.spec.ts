import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteChildComponent } from './note-child.component';

describe('NoteChildComponent', () => {
  let component: NoteChildComponent;
  let fixture: ComponentFixture<NoteChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
