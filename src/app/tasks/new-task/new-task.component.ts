import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NewTaskData, Task} from "../task/task.model";
import {FormsModule} from "@angular/forms";
import {User} from "../../user/user.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  @Input({required: true}) user!: User;
  @Output() submit = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<Task>();

  onSubmitTask(): void {
    this.add.emit(
      taskFactory(
        this.user.id,
        {
          title: this.enteredTitle,
          summary: this.enteredSummary,
          dueDate: this.enteredDate
        }
      )
    );
  }

  onCancel() {
    this.cancel.emit();
  }
}

export function taskFactory(
  userId: string,
  taskData: NewTaskData): Task {

  return {
          id: new Date().getTime().toString(),
          userId: userId,
          title: taskData.title,
          summary: taskData.summary,
          dueDate: taskData.dueDate
  };
}
