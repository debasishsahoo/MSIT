import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogComponent } from './edit-blog.component';

describe('EditBlogComponent', () => {
  let component: EditBlogComponent;
  let fixture: ComponentFixture<EditBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
