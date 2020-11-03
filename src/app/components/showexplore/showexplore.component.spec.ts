import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowexploreComponent } from './showexplore.component';

describe('ShowexploreComponent', () => {
  let component: ShowexploreComponent;
  let fixture: ComponentFixture<ShowexploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowexploreComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
