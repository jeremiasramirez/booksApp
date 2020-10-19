import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreshowPage } from './exploreshow.page';

describe('ExploreshowPage', () => {
  let component: ExploreshowPage;
  let fixture: ComponentFixture<ExploreshowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreshowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreshowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
