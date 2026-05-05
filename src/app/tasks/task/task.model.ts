export interface Task {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string
}

export function taskFactory(
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string): Task {
  return {
    id: id,
    userId: userId,
    title: title,
    summary: summary,
    dueDate: dueDate,
  };
}
