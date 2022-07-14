import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOneComponent } from "./task-one/task-one.component";
import { TaskTwoComponent } from "./task-two/task-two.component";

const routes: Routes = [
  {
    path:'/application',
    component: TaskOneComponent
  },
  {
    path:'/two',
    component: TaskTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
