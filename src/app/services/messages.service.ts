import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public messages = [
    {text: 'Hello', author: 'Jake', date: '7/1/2019'},
    {text: 'Its me', author: 'Joe', date: '7/2/2019'},
    {text: 'rm -rf yourself buddy', author: 'Joe', date: '7/2/2019'},
  ];

  constructor() { }

  public getMessagesFrom(username) {
    return this.messages.filter( message => {
      return message.author === username;
    });
  }

  public getMessagesByDate(date) {
    return this.messages.filter( message => {
      return message.date === date;
    });
  }
}
