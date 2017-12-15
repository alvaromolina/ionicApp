import { Injectable } from '@angular/core';
import { Contact } from '../../models/contact';

/*
  Generated class for the ContactServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactServiceProvider {

  contacts: Contact[] = [
    { name: 'Juan'

    },
    { name: 'John'
    
    }
  ];

  constructor() {
    console.log('Hello ContactServiceProvider Provider');
  }

  getContacts(): Contact[]{
    return this.contacts;
  }

  filterContacts(searchQuery: String): Contact[]{
    return this.contacts.filter((contact) => {
      return contact.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
    });
  }

}
