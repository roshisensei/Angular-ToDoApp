import { Component, EventEmitter, Input, Output } from '@angular/core';
import {type Task} from './task.model';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() complete = new EventEmitter<string>();
  OnCompleteTask(){
    this.complete.emit(this.task.id)
  }
}
