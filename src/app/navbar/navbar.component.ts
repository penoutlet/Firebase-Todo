import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
  }

  onDelete(){
    this.firebase.deleteToDos().subscribe((data)=>{
      console.log(data)
      console.log("Todos deleted.")
    });
  }
}
