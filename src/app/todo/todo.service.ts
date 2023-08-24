import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: Todo | undefined;
  constructor() { }
}
