import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDoService } from '../services/todo.service';
import { Router, NavigationEnd } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css']
})
export class NewToDoComponent implements OnInit {
  addToDoForm: FormGroup;
  mySubscription: any;
  constructor(
              private router: Router,
              private firebase: FirebaseService) { }

  ngOnInit() {
    this.addToDoForm = new FormGroup({
      'text': new FormControl(null, Validators.required),
    })
  }

  onSubmit(){

    let todo: Todo = {
      "text": this.addToDoForm.value.text,
      "id": null,
      "submittedAt": new Date(),
      "completedAt": null,
      "isComplete": false
    };

    this.firebase.uploadToDo(todo).subscribe((data)=>{
      console.log("Firebase data:")
      console.log(data)
    })
    this.addToDoForm.reset();
  }


}
