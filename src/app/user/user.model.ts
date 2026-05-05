import {DummyTasks} from "../tasks/task/task.data.dummy";
import {Task} from "../tasks/task/task.model";

let idCounter = 0;

export class User {
  id: string = "u" + idCounter++;
  avatar!: string;
  name!: string;
  taskList?: Task[] = [DummyTasks[0], DummyTasks[1], DummyTasks[2]];
}
