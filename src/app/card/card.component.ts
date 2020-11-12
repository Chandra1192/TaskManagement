import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  card: any;
  cardIndex: number;
  listIndex: number;
  comment : string;

  constructor(private service: AppService, private router: Router) { }

  //initializing the current card and index values
  ngOnInit(): void {
    this.card = this.service.getCard();
    this.cardIndex = this.service.getCurrentCardIndex();
    this.listIndex = this.service.getCurrentListIndex();
  }

  //method to add comments for card
  addComment(){
    this.card.cardComments.push({
      comment: this.comment,
      date: `${new Date().getDate()} ${new Date().getUTCMonth()} ${new Date().getFullYear()}`
    });
    this.comment = "";
  }
  //method to add remove card
  deleteCard(){
    this.service.deleteCard(this.listIndex, this.cardIndex);
    this.router.navigate(['board']);
  }
  //method to add update card
  updateCard(card: any){
    this.service.updateCard(this.listIndex, this.cardIndex, card);
    this.router.navigate(['board']);
  }

}
