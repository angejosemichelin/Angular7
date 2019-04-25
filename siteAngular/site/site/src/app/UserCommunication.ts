import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class UserCommunication{
    private newUser = new Subject;
    newUserStream = this.newUser.asObservable();
    constructor(){}
    newUserCom(){
        this.newUser.next("newUser");
    }
}