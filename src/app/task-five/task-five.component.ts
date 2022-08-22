import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-task-five',
  templateUrl: './task-five.component.html',
  styleUrls: ['./task-five.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFiveComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  get _keys() {
    return Object.keys(this.data);
  }

  get _values() {
    return Object.values(this.data);
  }
}
