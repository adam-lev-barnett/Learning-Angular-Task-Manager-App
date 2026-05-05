
import {Task, taskFactory} from "./task.model";


export const DummyTasks: Task[] = [
  taskFactory('t1', 'u1', 'Master Angular', 'Learn all the basics and stuff', '2025-12-31'),
  taskFactory('t2', 'u3', 'Eat a poodle', 'Figure out how to eat poodle', '2025-2-31'),
  taskFactory('t2', 'u3', 'Eat a potato', 'Figure out how to eat potato', '2025-2-31'),
]
