import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-four',
  templateUrl: './task-four.component.html',
  styleUrls: ['./task-four.component.scss']
})
export class TaskFourComponent implements OnInit {
  data: any;

  constructor() {}

  ngOnInit(): void {
    this.data = {
      name: 'Ivan',
      age: 33
    }
  }

  updateData(data: string) {
    this.data[`${data}`] = data;
  }

}
