import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxToastUiEditorComponent } from './ngx-toast-ui-editor.component';

describe('NgxToastUiEditorComponent', () => {
  let component: NgxToastUiEditorComponent;
  let fixture: ComponentFixture<NgxToastUiEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxToastUiEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxToastUiEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
