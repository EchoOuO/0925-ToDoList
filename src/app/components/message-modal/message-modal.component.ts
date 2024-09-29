import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-message-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './message-modal.component.html',
  styleUrl: './message-modal.component.scss',
})
export class MessageModalComponent {
  constructor(
    public dialogRef: MatDialogRef<MessageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  message: string = '';

  isDelete: boolean = false;

  onYesClick() {
    this.dialogRef.close(true);
  }

  onNoClick() {
    this.dialogRef.close(false);
  }
}
