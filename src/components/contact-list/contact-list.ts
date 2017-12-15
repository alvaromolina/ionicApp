import { Contact } from './../../models/contact';
import { Component, Input } from '@angular/core';

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

  @Input() listContacts: Contact[];

  constructor() {
    console.log('Hello ContactListComponent Component');
  }

}
