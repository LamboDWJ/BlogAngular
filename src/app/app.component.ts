import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


constructor() {
    const config = {
      apiKey: "AIzaSyC-1RsHgOEjstaOOz7ZdVPHTAZlGTWse1U",
      authDomain: "blog-75ee7.firebaseapp.com",
      databaseURL: "https://blog-75ee7.firebaseio.com",
      projectId: "blog-75ee7",
      storageBucket: "",
      messagingSenderId: "873875575085",
      appId: "1:873875575085:web:10f2bfa87033d46f"
};
     firebase.initializeApp(config);

   
  }
}

  

