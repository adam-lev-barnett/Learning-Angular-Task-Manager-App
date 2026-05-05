import {Component, Input} from "@angular/core";
import {TaskComponent} from "./task/task.component";
import {DummyTasks} from "./task/task.data.dummy";
import {User} from "../user/user.model";
import {Task} from "./task/task.model";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class Tasks {
  tasks: Task[] = DummyTasks;
  @Input() user!: User;

  get selectedUserTasks() {
    return this.tasks.filter((t: Task) => t.userId === this.user.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

}
