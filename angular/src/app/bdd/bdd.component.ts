import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../TodoService';
//import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-bdd',
  templateUrl: './bdd.component.html',
  styleUrls: ['./bdd.component.css']
})
export class BddComponent implements OnInit {
  todos:object = [];
  private todosUrl = 'api/todos';

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    //this.todos = this.http.get<todos[]>(this.todosUrl);
    this.http.get(this.todosUrl).toPromise().then(response=>{
      this.todos = response;
    });
  }

  createTodo(todo:any){
    this.http.post(this.todosUrl, todo).toPromise().then(response=>{
      this.loadData();
    });
  }
}
