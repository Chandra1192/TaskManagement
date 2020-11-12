import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public lists: any[];

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.lists = this.service.getData();
    //retrives the data when got updated
    this.service.dataUpdated.subscribe(data => {
      this.lists = this.service.getData();
    });
    
  }

  //method to add list to the board
  addList(){
    this.service.addList({
      listTitle : 'List ' + (this.lists.length+1),
      cards : []
    });
  }

  //method to remove the list from board
  removeList(index){
    this.service.deleteList(index);
  }
}
