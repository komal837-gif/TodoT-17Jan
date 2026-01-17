import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
editTodoObj!:Itodo;
 todoArr:Array<Itodo> = [
  {
    todoItem:"js",
    todoId:"101"
  },
  {
    todoItem:"Ts",
    todoId:"102"
  },
  {
    todoItem:"Css",
    todoId:"103"
  }
 ]


  constructor(private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onTodoAdd(todo:Itodo){
    this.todoArr.unshift(todo)
    this._snackBar.open(`The todoItem with id ${todo.todoId} is added successfully!!!`,'close',{
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:3000
    })
  }

  onTodoRemove(id:string){
    let getIndex = this.todoArr.findIndex(t=>t.todoId === id)
    this.todoArr.splice(getIndex,1)
    this._snackBar.open(`The todoItem with id ${id} is removed successfully!!!`,'close',{
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:3000
    })
    
  }

getEditTodo(todo:Itodo){
 this.editTodoObj = todo;
}

onTodoUpdate(todo:Itodo){
  let getIndex=this.todoArr.findIndex(t=>t.todoId === todo.todoId)
  this.todoArr[getIndex] = todo
  this._snackBar.open(`The todoItem with id ${todo.todoId} is updated successfully!!!`,'close',{
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:3000
    })
}

trackById(index:number,todo:Itodo){
 return todo.todoId;
}

}
