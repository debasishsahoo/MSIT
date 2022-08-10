import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBlogListComponent } from './featured-blog-list.component';

describe('FeaturedBlogListComponent', () => {
  let component: FeaturedBlogListComponent;
  let fixture: ComponentFixture<FeaturedBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedBlogListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
