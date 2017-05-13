import { Component, OnInit } from '@angular/core';

import { Task } from '../models/task';
import { TaskService } from '../services/task-service';
import { TaskComponent } from './task.component';

@Component({
  selector: 'task-list',
  templateUrl: './app/todo/components/task-list.html',
  styleUrls: ['./app/todo/components/task-list.css'],
  providers: [TaskService]
})
export class TaskListComponent implements OnInit {

  todoCount: number;
  selectedTask: Task;
  tasks: Array<Task>;

  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this._taskService.getTasks();
    this.calculateTodoCount();
    console.log(`Todo component initialized with ${this.tasks.length} tasks.`);
  }

  calculateTodoCount(): void {
    this.todoCount = this.tasks.filter(t => !t.done).length;
  }

  select(task: Task): void {
    this.selectedTask = task;
  }
}
