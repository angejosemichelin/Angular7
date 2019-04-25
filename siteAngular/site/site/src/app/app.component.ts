import { Component } from '@angular/core';
import { AuthService } from './AuthService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _auth:AuthService){

  }
  estConnecte = this._auth.estConnecte;
  titreSite = 'Orage';
}
