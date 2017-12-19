import { Injectable } from '@angular/core';
import { Contact } from '../../models/contact';
import { HttpClient } from '@angular/common/http';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ContactServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactServiceProvider {


  contacts: AngularFireList<Contact>;;

  
  constructor(public http: HttpClient, public contactsdb: AngularFireDatabase) {
    console.log('Hello ContactServiceProvider Provider');
    this.contacts = contactsdb.list('/contacts');
  }

  getContacts(): Observable<Contact[]>{
    //this.http.get('url');
    return this.contacts.valueChanges();
  }

  addContact(contact: Contact){
    this.contacts.push(contact);
  }

  /*filterContacts(searchQuery: String): Contact[]{
    return this.contacts.filter((contact) => {
      return contact.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }*/

}
