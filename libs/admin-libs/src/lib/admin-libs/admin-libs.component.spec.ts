import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLibsComponent } from './admin-libs.component';

describe('AdminLibsComponent', () => {
  let component: AdminLibsComponent;
  let fixture: ComponentFixture<AdminLibsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLibsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
