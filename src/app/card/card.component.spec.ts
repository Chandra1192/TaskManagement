import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppService } from '../app.service';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let MyMockedService = {
    method: () => {}
  }
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
      ],
      providers: [
        { provide: AppService, useValue: MyMockedService}]
    })
    .compileComponents();
  });

  beforeEach(() => {    
    fixture = TestBed.createComponent(CardComponent);
    let myMockedService = fixture.debugElement.injector.get(MyMockedService);
    spyOn(myMockedService, 'getCard');
    component = fixture.componentInstance;
    component.card = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
