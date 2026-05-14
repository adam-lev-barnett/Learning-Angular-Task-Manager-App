import {Component, Input} from "@angular/core";
import {TaskComponent} from "./task/task.component";
import {DummyTasks} from "./task/task.data.dummy";
import {User} from "../user/user.model";
import {NewTaskData, Task} from "./task/task.model";
import {NewTaskComponent, taskFactory} from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class Tasks {
  tasks: Task[] = DummyTasks;
  isAddingTask = false;
  @Input() user!: User;

  get selectedUserTasks() {
    return this.tasks.filter((t: Task) => t.userId === this.user.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(task: Task) {
    this.tasks.unshift(task);
    this.isAddingTask = false;
  }

}
