import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Todo } from "./todo";
import { TodoService } from "./todo/todo.service";

@Injectable({ providedIn: 'root' })
export class TodoResolve implements Resolve<Todo>{

    constructor(private todoservice: TodoService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Todo | Observable<Todo> | Promise<Todo> {
        const todoNum = this.todoservice.todo?.number;
        const number = route.paramMap.get('number') as string;
        // this.httpclient.post.... =>data

        return { number: todoNum || 0, title: `this todo : ${number}` };
    }


}
