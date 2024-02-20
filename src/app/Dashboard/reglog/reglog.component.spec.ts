import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl } from '@angular/forms';
import { ReglogComponent } from './reglog.component';

describe('ReglogComponent', () => {
  let component: ReglogComponent;
  let fixture: ComponentFixture<ReglogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReglogComponent,FormGroup,FormControl]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
