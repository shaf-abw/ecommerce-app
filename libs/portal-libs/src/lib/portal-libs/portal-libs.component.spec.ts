import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortalLibsComponent } from './portal-libs.component';

describe('PortalLibsComponent', () => {
  let component: PortalLibsComponent;
  let fixture: ComponentFixture<PortalLibsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalLibsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortalLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
