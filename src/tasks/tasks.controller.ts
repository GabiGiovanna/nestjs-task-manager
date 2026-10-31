import { Controller, Param, Query } from '@nestjs/common';
import { Get,Post } from '@nestjs/common';
import { TasksService } from './tasks.service.js';
import { identifierToKeywordKind } from 'typescript';

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}

    @Get("/get")
    findAllTasks(){
        return this.tasksService.listAllTasks();
    }

    @Get(":id")
    findTaskById(@Param("id") id: string){
        return this.tasksService.getTaskById(id);
    }
}
