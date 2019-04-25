import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { User } from './user';

@Injectable()
export class AuthService implements CanActivate{
    url:string = "http://localhost:2403/utilisateurs";
    constructor(private http:HttpClient){}

    public login(email:string,motdepasse:string){
        this.url += "?email=" + email + "&motdepasse=" + motdepasse;
        return this.http.get(this.url).pipe(map((response)=>{
            let utilisateur:{};
            if(JSON.stringify(response).length > 0){
                utilisateur = JSON.stringify(response)[0];
                localStorage.setItem('currentUser', JSON.stringify(utilisateur))
            } else {
                throw new Error("Auth error");
            }
            return utilisateur;
        }));
    }

    public canActivate(){
        let utilisateur:User = JSON.parse(localStorage.getItem('currentUser')) as User;
        let res = false;

    }
}