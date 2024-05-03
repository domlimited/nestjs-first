import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodo() {
    return this.todoService.getTodos();
  }

  @Post()
  postTodo(@Body('title') title: string, @Body('subtitle') subtitle: string) {
    this.todoService.addTodo(title, subtitle);
    return 'สำเร็จ';
  }

  @Delete('/:id')
  deleteTodoById(@Param('id') id: string) {
    return this.todoService.removeTodoById(id);
  }
}
