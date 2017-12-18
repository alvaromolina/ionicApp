import { HttpClient } from '@angular/common/http';
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
  contacts: Contact[] = new Array();

  constructor(public navCtrl: NavController, 
    public contactService: ContactServiceProvider ) {

    contactService.getContacts().subscribe(data => {
        data.forEach(contact => {
          console.log(contact);
          this.contacts.push({name: contact.name})
        });
      }
    );
    
    //this.contacts = contactService.getContacts();
  }
  
  /*updateContacts(){
    console.log(this.searchQuery);
    this.contacts = this.contactService.filterContacts(this.searchQuery);
  }*/



}
