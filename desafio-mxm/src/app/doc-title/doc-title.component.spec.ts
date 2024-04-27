import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTitleComponent } from './doc-title.component';

describe('DocTitleComponent', () => {
  let component: DocTitleComponent;
  let fixture: ComponentFixture<DocTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
