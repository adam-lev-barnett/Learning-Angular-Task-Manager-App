import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "./user.model";
import {Task} from "../tasks/task/task.model";
import {CardComponent} from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  get taskList() {
    return this.user.taskList;
  }

  onSelectUser() {
      this.select.emit(this.user.id);
  }

  addTask(t: Task): void {
    if (this.user.taskList === undefined) this.user.taskList = [];
    this.user.taskList.push(t);
  }

}
