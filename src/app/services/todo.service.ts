import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { asap } from 'rxjs/internal/scheduler/asap';

@Injectable({
    providedIn: 'root'
})

export class ToDoService implements OnInit {
    private url = "http://localhost:9007/TodoApp/";
    // error: string;
//     private httpOptons = {
//        HttpHeaders(
//         "accepts": "application/json"
//     )
// }
    constructor(private http: HttpClient){}

    ngOnInit(){

    }

    getAllToDos(){

        return this.http.get(this.url + "allToDos").pipe(
            map (res => res as any)
        )
}

    addToDo(todo){
        return this.http.post(this.url + "addToDo", todo).pipe(
            map(res => res as any)
        )
    }

    updateToDo(todo){
        return this.http.put(this.url + "updateToDo", todo).pipe(
            map(res=>res as any)
        )
    }

    deleteToDo(todo){
        let jToDo = JSON.stringify(todo);
        return this.http.delete(this.url + "deleteToDo", todo).pipe(
            map(res=> res as any)
        )
    }

    deleteToDoById(todoId){
        return this.http.delete(this.url + "deleteById/" + todoId).pipe(
            map(res=> res as any)
        )
    }

    filterToDos(todos, complete:boolean){
        let completed = [];
        let incompleted = [];
    
        for(let td of todos){
          if (!td.isComplete){
            incompleted.push(td);
          }
          else {
            completed.push(td)
          }
        }

        if(complete){
            return completed;
          }
          else{
            return incompleted;
          }
      }
}