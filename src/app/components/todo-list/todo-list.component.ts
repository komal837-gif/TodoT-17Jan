import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Itodo } from 'src/app/models/todo';
import { GetConfirmedComponent } from '../get-confirmed/get-confirmed.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Input() todoObj!:Itodo;
@Output() emitRemoveId:EventEmitter<string> = new EventEmitter<string>()
@Output() emitEditTodo:EventEmitter<Itodo> = new EventEmitter<Itodo>()


  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  onRemove(todo:Itodo){
    let matConfig = new MatDialogConfig()
    matConfig.width = '500px'
    matConfig.disableClose=true;
    matConfig.data=`The todo Item with id ${todo.todoId} is removed successfully!!`
    let matDialogRef = this.matDialog.open(GetConfirmedComponent,matConfig)
    matDialogRef.afterClosed()
      .subscribe(flag=>{
        if(flag){
          this.emitRemoveId.emit(todo.todoId)
        }
      })

  }

  onEdit(todo:Itodo){
    this.emitEditTodo.emit(todo)
  }

}
