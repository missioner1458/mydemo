import { DatePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  send(_event: MouseEvent) {
    this.dataList.push({ value: this.textInput2, checked: false });
    this.textInput2 = '';
    console.log(`event:`, _event);
  }

  ngOnInit(): void {


    console.log(`ngOnInit  : {} : {}`, Date.now());
    console.log(`datepipe 2 : ${this.datePipe.transform(Date.now(), 'yyyy-MM-dd')}`);
    this.dataList = [];

    this.httpClient.get("http://localhost:3000/posts")
      .subscribe(d => { this.dataList = d });

  }
  constructor(private datePipe: DatePipe,
    private todoserveice: TodoService,
    private httpClient: HttpClient
  ) {
    // private todoserveice =  XXXX new TodoService();

    // console.log(`constructor  : {} : {}`, Date.now());
    // //2019-07-22
    // console.log(`datepipe: ${datePipe.transform(Date.now(), 'yyyy-MM-dd')}`);
  }
  ngOnDestroy(): void {
    // console.log(`ngOnDestroy  : {} : {}`, Date.now());
  }
  ngDoCheck(): void {
    // console.log(`ngDoCheck  : {} : {}`, Date.now());
  }
  ngAfterContentInit(): void {
    // console.log(`ngAfterContentInit  : {} : {}`, Date.now());
  }
  ngAfterContentChecked(): void {
    // console.log(`ngAfterContentChecked  : {} : {}`, Date.now());
  }
  ngAfterViewInit(): void {
    // console.log(`ngAfterViewInit  : {} : {}`, Date.now());
  }
  ngAfterViewChecked(): void {
    // console.log(`ngAfterViewChecked  : {} : {}`, Date.now());
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(`ngOnChanges : {} : {}`, Date.now(), changes);
  }


  testValue: any = 'test value';
  testNgClass = ['red', 'i-input'];
  nowDate: any = new Date();
  message: any = 'Hello, world!';
  canClick: any = true;
  textInput2: any;
  dataList: any;

}
