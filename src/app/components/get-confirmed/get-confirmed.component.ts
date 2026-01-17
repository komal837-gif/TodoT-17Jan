import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirmed',
  templateUrl: './get-confirmed.component.html',
  styleUrls: ['./get-confirmed.component.scss']
})
export class GetConfirmedComponent implements OnInit {

  constructor(private _matDialogRef:MatDialogRef<GetConfirmedComponent>) { }

  ngOnInit(): void {
  }

  onclose(flag:boolean){
    this._matDialogRef.close(flag)
  }

}
