import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCommunication } from '../UserCommunication';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  private url = "http://localhost:2403/utilisateurs";
  utilisateurs:any = [];
  constructor(private http:HttpClient, private router: Router, private userCom:UserCommunication) { }
  email:any = new FormControl('email', [Validators.required, Validators.email]);
  motdepasse:any = new FormControl('motdepasse', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]); 
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'Veuillez entrer un email.' : this.email.hasError('email') ? "L'email n'est pas valide.": '';
  }
  formValid(){
    if(this.email.valid === true && this.motdepasse.valid === true && !this.errorFinal()){
      return true;
    } else {
      return false;
    }
  }
  getErrorMessageMotDePasse() {
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
  ngOnInit() {
    this.loadUsers();
  }
  @Input()
  errorFinal(){
    for (let userFor of this.utilisateurs){
      if(userFor.email === this.email.value){
        return true;
      }else{
        break;
      }
    }
    return false;
  }
  inscription(email,motdepasse){
    var user:any = {
      id:"",
      email:email,
      motdepasse:motdepasse
    }
    this.http.post(this.url, user).toPromise().then(response=>{
      this.userCom.newUserCom();
      this.router.navigate(['/']);
    });
  }
  private loadUsers(){
    this.http.get(this.url).toPromise().then(response=>{
      this.utilisateurs = response;
    });
  }
}
