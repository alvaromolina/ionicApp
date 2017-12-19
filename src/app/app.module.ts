import { ChatPage } from './../pages/chat/chat';
import { ContactsPage } from './../pages/contacts/contacts';
import { PruebaPipe } from './../pipes/prueba/prueba';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactListComponent } from '../components/contact-list/contact-list';
import { ContactInfoPage } from '../pages/contact-info/contact-info';
import { ContactServiceProvider } from '../providers/contact-service/contact-service';
import { StatusPage } from '../pages/status/status';
import { StartPage } from '../pages/start/start';
import { LoginPage } from '../pages/login/login';
import { StatusServiceProvider } from '../providers/status-service/status-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';


export const configFirebase = {
  apiKey: "AIzaSyBlYS5RgazMMuOp5IhhVjFu8C2ZNZ8gF4I",
  authDomain: "ionic-chat-77c25.firebaseapp.com",
  databaseURL: "https://ionic-chat-77c25.firebaseio.com",
  projectId: "ionic-chat-77c25",
  storageBucket: "ionic-chat-77c25.appspot.com",
  messagingSenderId: "922431712855"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PruebaPipe,
    ContactInfoPage,
    StartPage,
    LoginPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(configFirebase),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactInfoPage,
    StartPage,
    LoginPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactServiceProvider,
    StatusServiceProvider,
    HttpClient,
    AngularFireDatabase
  ]
})
export class AppModule {}
