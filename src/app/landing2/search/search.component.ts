import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'gw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  public text = '7/1/2019';
  public messages = [];

  constructor(private messagesService: MessagesService) {
   
   }

  ngOnInit() {
    this.messages = this.messagesService.getMessagesByDate('7/2/2019')
  }

  onClick() {
    this.messages = this.messagesService.getMessagesByDate(this.text);
  }


}
