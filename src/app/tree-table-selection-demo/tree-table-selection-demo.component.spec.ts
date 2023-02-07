import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTableSelectionDemoComponent } from './tree-table-selection-demo.component';

describe('TreeTableSelectionDemoComponent', () => {
  let component: TreeTableSelectionDemoComponent;
  let fixture: ComponentFixture<TreeTableSelectionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeTableSelectionDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeTableSelectionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
