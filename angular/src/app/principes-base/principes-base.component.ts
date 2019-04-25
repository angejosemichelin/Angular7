import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principes-base',
  templateUrl: './principes-base.component.html',
  styleUrls: ['./principes-base.component.css']
})
export class PrincipesBaseComponent implements OnInit {

  constructor() {}

  valeurs:string[] = ["valeur1","valeur2","valeur3","valeur3"];

  name:string = "Ange-José Michelin";
  title:string = 'Hello world!';
  colorChange:string = "red";
  twowaydatabinding:string = "Ecrivez..";

  changerCouleur(){
    if(this.colorChange == "red"){
      this.colorChange = "blue";
    } else if(this.colorChange = "blue") {
      this.colorChange = "red";
    }
  }

  ngOnInit(){}

}
