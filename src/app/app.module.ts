import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { TaskThreeComponent } from './task-three/task-three.component';
import { ExampleDirective } from './directive/example.directive';
import { TaskFourComponent } from './task-four/task-four.component';
import { TaskFiveComponent } from './task-five/task-five.component';
import { TaskSixComponent } from './task-six/task-six.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    TaskTwoComponent,
    TaskThreeComponent,
    ExampleDirective,
    TaskFourComponent,
    TaskFiveComponent,
    TaskSixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
