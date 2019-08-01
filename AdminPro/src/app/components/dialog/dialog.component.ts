import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  data: any;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: []
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    console.log('DATAAAAA', this.data );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
