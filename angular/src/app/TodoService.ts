import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TodoService implements InMemoryDbService{
    createDb(){
        const todos = [
            {id:1,nom:"Michelin",prenom:"Ange-José"},
            {id:2,nom:"Coulibaly",prenom:"Karim"},
            {id:3,nom:"Valverde",prenom:"Akilis"},
            {id:4,nom:"Serapa",prenom:"Dalila"}
        ];
        return {todos}
    }
}