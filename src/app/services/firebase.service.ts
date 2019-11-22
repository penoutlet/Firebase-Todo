import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Todo } from '../todo.model';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    url: string = "https://angular-practice-f832c.firebaseio.com/";
    constructor(private http: HttpClient){}
    uploadToDo(todo){
        return this.http.post(this.url + "/todos.json", todo).pipe(map(res => res as Todo));

    }

    //this method loops over the properties of each incoming object, and pushes them into an array of objects.
    fetchToDos(){
        return this.http.get<{ [key: string]: Todo}>
        (this.url + "/todos.json")
        .pipe(
            map(res => {
                const todosArray: Todo[] = [];
                for(const key in res) {
                    if(res.hasOwnProperty(key)){
                        todosArray.push({ ...res[key], id: key});
                    }
                }
                    return todosArray;
            }))
    }

    fetchAll(){
        return this.http.get(this.url + "/todos.json").pipe(map(res => res as Todo[]));
    }

    updateToDo(todo){
        return this.http.put(this.url + "/todos.json", todo).pipe(map(res => res as any));
    }
    deleteToDos(){
        return this.http.delete(this.url + "/todos.json").pipe(map(res => res as any))
    }
}
