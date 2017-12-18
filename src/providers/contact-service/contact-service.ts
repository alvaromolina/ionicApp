import { Injectable } from '@angular/core';
import { Contact } from '../../models/contact';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the ContactServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactServiceProvider {


  constructor(public http: HttpClient) {
    console.log('Hello ContactServiceProvider Provider');
  }

  getContacts(){
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

  /*filterContacts(searchQuery: String): Contact[]{
    return this.contacts.filter((contact) => {
      return contact.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }*/

}
