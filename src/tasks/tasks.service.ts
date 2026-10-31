import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

listAllTasks(){
    return [{id: 1, title:"compras"}, {id: 2, title:"trabalho"}]
}

getTaskById(id:string){

    return "deu bom id: " + id;
}

}
