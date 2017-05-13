import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../models/task';

@Component({
  selector: 'task',
  templateUrl: './app/todo/components/task.html'
})
export class TaskComponent {
  @Input() task: Task;
  @Output() statusChanged: any = new EventEmitter<any>();

  toggleDone(): void {
    this.task.toggleDone();
    this.statusChanged.emit(null);
  }
}
