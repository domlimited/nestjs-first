import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  todoArry: Todo[] = [];
  addTodo(title: string, subtitle: string) {
    console.log(`title: ${title}, subtitle: ${subtitle}`);
    const todo = new Todo();
    todo.id = uuidv4();
    todo.title = title;
    todo.subtitle = subtitle;
    this.todoArry.push(todo);
  }

  getTodos() {
    return this.todoArry;
  }

  removeTodoById(id: string) {
    const found = this.todoArry.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException(`Todo with ${id} not found`);
    }

    this.todoArry = this.todoArry.filter((item) => {
      return item.id != id;
    });
    return this.todoArry;
  }
}
