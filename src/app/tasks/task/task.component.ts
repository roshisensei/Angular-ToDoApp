import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import {type Task} from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;

  private taskService = inject(TasksService);
  OnCompleteTask(){
    this.taskService.removeTask(this.task.id);
  }
}
