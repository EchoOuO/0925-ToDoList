import { Component, Input } from '@angular/core';
import { Tasks } from '../../../../../type';
import { MessageModalComponent } from '../../../message-modal/message-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MessageModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(public dialog: MatDialog) {}

  @Input() tasks!: Tasks[];
  @Input() task!: Tasks;
  @Input() index!: number;

  confirmDelete(index: number): void {
    const dialogRef = this.dialog.open(MessageModalComponent, {
      data: { message: 'Are you sure to delete this task?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteTask(index);
      }
    });
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
