import { Component, OnInit, OnChanges } from '@angular/core';
import { ToDoService } from '../services/todo.service';
import { Todo } from '../todo.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit, OnChanges {
  todos: any[];
  isFetching: boolean;
  numRows: number;
  error = null;
  constructor(private fire: FirebaseService) { }

  ngOnInit() {
    this.isFetching = true;
    let newTodos = []
    this.fire.fetchToDos().subscribe((todos)=>{
      for(let td of todos){
        let todoString;
        if(td.text){
          let todoObj = new Todo( td.text,td.id, td.isComplete,td.submittedAt, td.completedAt);
          newTodos.push(todoObj)
        }

      }
      this.todos = newTodos;
    })

    // this.fire.fetchAll().subscribe(todos => {
    //   console.log(todos)
    //   for(let td of todos){
    //     this.todos.push(td);
    //   }
    // });
  }

  ngOnChanges(){

  }
}
