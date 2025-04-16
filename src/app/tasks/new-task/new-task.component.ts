import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { newTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!:string;
  @Output() close = new EventEmitter<void>();
  @Output() add  = new EventEmitter<newTaskData>();

  // this will create a  singleton instance of taskService which can be used throughout the application
  private taskService = inject(TasksService);

  enteredTitle ='';
  enteredSummary ='';
  enteredDate = '';

  onClose(){
    this.close.emit();
  }
  onSubmit(){
    this.taskService.addTask({
      title: this.enteredTitle,
      summary:this.enteredSummary,
      dueDate:this.enteredDate,
    }, this.userId);
    this.close.emit();
  }
}
