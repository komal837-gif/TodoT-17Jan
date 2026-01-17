import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  @Input() editTodo!:Itodo;
  isInEditMode:boolean=false; 
 @ViewChild ('todoForm') todoForm !: NgForm
 @Output() emitTodoObj:EventEmitter<Itodo> = new EventEmitter<Itodo>()
@Output() emitUpdatedObj:EventEmitter<Itodo> = new EventEmitter<Itodo>()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!!changes['editTodo']['currentValue']){
      this.isInEditMode=true;
      this.todoForm.form.patchValue(changes['editTodo'] ['currentValue'])

    }
  }

  onTodoSubmit(){
    let todoObj:Itodo={
      ...this.todoForm.value,
      todoId:Date.now.toString()
    }
    this.todoForm.reset()
    this.emitTodoObj.emit(todoObj)
  }

  onUpdateTodo(){
    if(this.todoForm.valid){
        if(this.todoForm.valid){
        let updatedObj:Itodo={
        ...this.todoForm.value,
        todoId:this.editTodo.todoId
      }
      this.isInEditMode=false;
      this.todoForm.reset()
      this.emitUpdatedObj.emit(updatedObj)

      }
    }
  }

}
