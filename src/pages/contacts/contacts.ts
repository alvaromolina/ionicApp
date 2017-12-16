import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../models/contact';
import { ContactServiceProvider } from '../../providers/contact-service/contact-service';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  searchQuery: String;
  contacts: Contact[];

  constructor(public navCtrl: NavController, 
    public contactService: ContactServiceProvider ) {
    this.contacts = contactService.getContacts();
  }
  
  updateContacts(){
    console.log(this.searchQuery);
    this.contacts = this.contactService.filterContacts(this.searchQuery);
  }



}
