import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo/todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  constructor(private todoService: TodoService,
    private route: ActivatedRoute) { }

  viewdata: Todo | undefined;

  ngOnInit(): void {

    // this.todoService.todo = { number: 3, title: "3" };
    this.route.data.subscribe(data => {
      this.viewdata = data['todo'];
    });
  }

}
