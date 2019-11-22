import { Component, OnInit, Input } from '@angular/core';
import { ToDoService } from '../services/todo.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Todo } from '../todo.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: any;
  timestamp: Date;
  route: string;
  hide: boolean = false;
  
  // dateConverter
  constructor(private fire: FirebaseService, private router: Router) { }

  ngOnInit() {
    console.log(this.router.url)
    this.route=this.router.url;
    // this.todo.submittedAt = new Date(this.todo.submittedAt);
    // this.todo.completedAt = new Date(this.todo.completedAt);
    // this.todo.completedAt = this.datepipe.transform(this.todo.completedAt, 'yyyy-mm-dd');
  }

  complete(){
    this.todo.isComplete = true;
    this.todo.completedAt = new Date();
    console.log(this.todo);
    this.fire.updateToDo(this.todo).subscribe(todo=>{
      this.todo = todo;
      console.log(todo)
    })
  }

  delete(){
    this.hide = !this.hide;
  }

  clear(){
    this.hide = !this.hide;
  }
}
