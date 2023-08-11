import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    TodoService],
  exports: [TodoComponent]
})
export class TodoModule { }
