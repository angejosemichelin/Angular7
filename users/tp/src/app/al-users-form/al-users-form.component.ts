import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCommunication } from '../UserCommunication';

@Component({
  selector: 'app-al-users-form',
  templateUrl: './al-users-form.component.html',
  styleUrls: ['./al-users-form.component.css']
})

export class AlUsersFormComponent implements OnInit {

  private url = "http://localhost:2403/users";
  users:object = [];
  constructor(private http:HttpClient, private userCom:UserCommunication) { }

  ngOnInit() {
    this.loadUsers();
  }

  doSubmit(user:any){
    this.http.post(this.url, user).toPromise().then(response=>this.userCom.newUserCom());
  }

  private loadUsers(){
    this.http.get(this.url).toPromise().then(response=>{
      this.users = response;
    });
  }
}
