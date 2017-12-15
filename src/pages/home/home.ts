import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contact } from '../../models/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts: Contact[] = [
    { name: 'Juan'

    },
    { name: 'John'
    
    }
  ];
  constructor(public navCtrl: NavController) {

  }

}
