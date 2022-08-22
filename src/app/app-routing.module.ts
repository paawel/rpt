import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOneComponent } from "./task-one/task-one.component";
import { TaskTwoComponent } from "./task-two/task-two.component";
import { TaskThreeComponent } from "./task-three/task-three.component";
import { TaskFourComponent } from "./task-four/task-four.component";

const routes: Routes = [
  {
    path:'/application',
    component: TaskOneComponent
  },
  {
    path:'two',
    component: TaskTwoComponent
  },
  {
    path:'three',
    component: TaskThreeComponent
  },
  {
    path:'four',
    component: TaskFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
