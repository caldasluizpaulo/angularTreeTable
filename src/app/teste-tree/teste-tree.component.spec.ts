import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteTreeComponent } from './teste-tree.component';

describe('TesteTreeComponent', () => {
  let component: TesteTreeComponent;
  let fixture: ComponentFixture<TesteTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
