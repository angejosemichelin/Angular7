import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCommunication } from '../UserCommunication';

@Component({
  selector: 'app-al-users-table',
  templateUrl: './al-users-table.component.html',
  styleUrls: ['./al-users-table.component.css']
})
export class AlUsersTableComponent implements OnInit {

  private url = "http://localhost:2403/users";
  users:object = [];
  constructor(private http:HttpClient, private userCom:UserCommunication) { }

  ngOnInit() {
    this.loadUsers();
    this.userCom.newUserStream.subscribe(p=>this.loadUsers());
  }

  doDelete(user:any){
    this.http.delete(this.url+"/"+user.id).toPromise().then(response=>{
      this.loadUsers();
    });
  }

  private loadUsers(){
    this.http.get(this.url).toPromise().then(response=>{
      this.users = response;
    });
  }

}
