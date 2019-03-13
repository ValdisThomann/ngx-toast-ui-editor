import { TestBed } from '@angular/core/testing';

import { NgxToastUiEditorService } from './ngx-toast-ui-editor.service';

describe('NgxToastUiEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxToastUiEditorService = TestBed.get(NgxToastUiEditorService);
    expect(service).toBeTruthy();
  });
});
