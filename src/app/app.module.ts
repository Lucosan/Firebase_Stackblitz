import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { IndexComponent } from './index/index.component';
import { FirelistComponent } from './firelist/firelist.component';
import { AuthService } from './auth.service';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: IndexComponent},
      {path: 'firelist', component: FirelistComponent}
          ]),
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBR1J2Yl2wJ5YoC0mwDCyeaAqBXsO_w460",
        authDomain: "angularativ.firebaseapp.com",
        projectId: "angularativ",
        storageBucket: "angularativ.appspot.com",
        messagingSenderId: "558943623519",
        appId: "1:558943623519:web:83011fdfc91fae1f413eea"
      }
    ),
    AngularFireDatabaseModule,
  ],
  declarations: [ AppComponent, HelloComponent, IndexComponent, FirelistComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }