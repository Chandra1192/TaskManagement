import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  data = [];
  //event emmiter when data being updated emit to the subscriber
  dataUpdated:EventEmitter<any> = new EventEmitter();

  currentCard: any;
  currentCardIndex: number;
  currentListIndex: number;
  
  setCurrentCardIndex(index){
    this.currentCardIndex = index;
  }

  getCurrentCardIndex(){
    return this.currentCardIndex;
  }

  setCurrentListIndex(index){
    this.currentListIndex = index;
  }

  getCurrentListIndex(){
    return this.currentListIndex;
  }
  
  setCard(card: any){
    this.currentCard = card;
  }

  getCard(){
    return this.currentCard;
  }

  setData(data: any){
    this.data = data;
    this.dataUpdated.emit(this.data);
  }

  getData(){
    return this.data;
  }

  addList(list: any){
    this.data.push(list);
  }

  deleteList(listIndex: number) {
    this.data.splice(listIndex, 1);
  }

  addCard(card: any, listIndex: number){
    this.data[listIndex].cards.push(card);
  }

  deleteCard(listIndex: number, cardIndex: number){
    this.data[listIndex].cards.splice(cardIndex, 1);
  }

  updateCard(listIndex: number, cardIndex: number, card: any){
    this.data[listIndex].cards.splice(cardIndex, 1, card);
  }
}
