import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/todo.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  todos: Array<any>;
  error = null;
  constructor(private fire: FirebaseService) { }

  ngOnInit() {
    this.fire.fetchToDos().subscribe(todos=>{
      console.log(todos)
      for(let td of todos){
        if(td.text && td.isComplete){
          this.todos.push(td);
        }

      }
    })
    
  }

  sortToDos(todos){
    return this.todos.sort(todos.submittedAt)
  }

}
