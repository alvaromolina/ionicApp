import { Contact } from './../../models/contact';
import { Component } from '@angular/core';

/**
 * Generated class for the ContactListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contact-list',
  templateUrl: 'contact-list.html'
})
export class ContactListComponent {

  listContacts: Contact[] = [
    { name: 'Juan'

    },
    { name: 'John'
    
    }
  ];

  constructor() {
    console.log('Hello ContactListComponent Component');
  }

}
