import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCommunication } from '../UserCommunication';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {
  private url = "http://localhost:2403/utilisateurs";
  utilisateurs:any;
  email = new FormControl('email', [Validators.required, Validators.email]);
  motdepasse = new FormControl('motdepasse', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]);
  
  getErrorMessageEmail(){
    return this.email.hasError('required') ? 'Veuillez entrer un email.' : this.email.hasError('email') ? "L'email n'est pas valide.": '';
  }

  getErrorMessageMotDePasse(){
    if(this.motdepasse.hasError('required')){
      return 'Veuillez entrer un mot de passe.';
    } else if(this.motdepasse.hasError('minlength')){
      return "Le mot de passe est trop court.";
    } else if(this.motdepasse.hasError('maxlength')){
      return "Le mot de passe est trop long.";
    } else {
      return "";
    }
  }

  formValid(){
    if(this.email.valid === true && this.motdepasse.valid === true){
      return true;
    } else {
      return false;
    }
  }

  constructor(private http:HttpClient, private router: Router, private userCom:UserCommunication) {}
  
  ngOnInit(){
    this.loadUsers();
  }

  connexion(user:any){
    for (let userFor of this.utilisateurs){
      if(userFor.email === user.email && userFor.motdepasse === user.motdepasse){
        this.router.navigate(['/accueilConnecte']);
      }
    }
  }

  private loadUsers(){
    this.http.get(this.url).toPromise().then(response=>{
      this.utilisateurs = response;
    });
  }
}
