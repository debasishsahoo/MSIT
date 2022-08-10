import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBlogListComponent } from './latest-blog-list.component';

describe('LatestBlogListComponent', () => {
  let component: LatestBlogListComponent;
  let fixture: ComponentFixture<LatestBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestBlogListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
