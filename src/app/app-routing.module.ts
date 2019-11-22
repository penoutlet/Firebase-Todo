import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { NewToDoComponent } from './new-to-do/new-to-do.component';
import { CompletedComponent } from './completed/completed.component';


const routes: Routes = [{path:'todolist', component:ToDoListComponent},
                        {path: 'addtodo', component: NewToDoComponent},
                        {path: 'completedlist', component: CompletedComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
