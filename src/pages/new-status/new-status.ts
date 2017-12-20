import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Status } from '../../models/status';

/**
 * Generated class for the NewStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-status',
  templateUrl: 'new-status.html',
})
export class NewStatusPage {
  public status: Status = new Status();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewStatusPage');
  }

  uploadStatus(){
    
  }

}
