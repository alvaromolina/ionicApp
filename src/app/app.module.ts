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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactListComponent,
    PruebaPipe,
    ContactInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactListComponent,
    ContactInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactServiceProvider
  ]
})
export class AppModule {}
