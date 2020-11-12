import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'process';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: any;
  @Input() listIndex: number;
  boardLists: any;
  @Output() removeItem = new EventEmitter();

  draggedCard: any;


  constructor(private service: AppService, private router: Router) { }

  ngOnInit(): void {    
    this.boardLists = this.service.getData();
  }
  //Method to add card for current list
  addCard(){
    this.list.cards.push({
      cardTitle: "Card " + (this.list.cards.length + 1),
      cardDescription: "",
      cardComments : [],
      listIndex: this.listIndex
    });
  }

  //method to set card as current card
  setCard(card: any, cardIndex: number){
    this.service.setCard(card);
    this.service.setCurrentListIndex(this.listIndex);
    this.service.setCurrentCardIndex(cardIndex);
    this.router.navigate(['card']);
  }
  //method to remove list from board
  removeListItem(){
    this.removeItem.emit();
  }
  //allowing drop in the list 
  allowDrop(event) {
    event.preventDefault();
  }
  //method to set card and list while dragging
  drag(event) {    
    event.dataTransfer.setData("draggedCard", event.target.id);
    event.dataTransfer.setData("list", this.listIndex);
  }
  //method to add dropped card in the list
  drop(ev) {
    ev.preventDefault();
    var index = ev.dataTransfer.getData("draggedCard");
    var list = ev.dataTransfer.getData("list");
    this.draggedCard = this.boardLists[list].cards.splice(index, 1);
    this.boardLists[this.listIndex].cards.push(this.draggedCard[0]);
    this.service.setData(this.boardLists);
  }

}
