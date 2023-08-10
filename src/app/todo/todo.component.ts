import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  ngOnInit(): void {
    this.dataList = [];
  }
  testValue: any = 'test value';
  testNgClass = ['red', 'i-input'];
  nowDate: any = new Date();
  message: any = 'Hello, world!';
  canClick: any = true;
  textInput2: any;
  dataList: any;

}
