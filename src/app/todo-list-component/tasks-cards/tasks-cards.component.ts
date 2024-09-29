import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from '../../../../type';
import { CardComponent } from './card/card.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageModalComponent } from '../../components/message-modal/message-modal.component';

@Component({
  selector: 'app-tasks-cards',
  standalone: true,
  imports: [CommonModule, CardComponent, AddTaskComponent, FormsModule],
  templateUrl: './tasks-cards.component.html',
  styleUrl: './tasks-cards.component.scss',
})
export class TasksCardsComponent {
  @Input() tasks!: Tasks[];

  filteredTasks!: Tasks[];

  isFiltered: boolean = false;
  filterType: string[] = ['Done', 'Pending'];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.filteredTasks = this.tasks;
  }

  onFilterChange(event: any) {
    if (event.target.value === 'All') {
      this.isFiltered = false;
      this.filterType = ['Done', 'Pending'];
      this.filteredTasks = this.tasks;
    } else {
      this.isFiltered = true;
      this.filterType = [event.target.value];
      this.filteredTasks = this.tasks.filter((task) => {
        return task.status === event.target.value;
      });
    }
  }

  confirmDeleteAll(): void {
    const dialogRef = this.dialog.open(MessageModalComponent, {
      data: { message: 'Are you to delete "ALL" tasks?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteAllTask();
      }
    });
  }

  deleteAllTask(): void {
    this.filteredTasks = [];
    sessionStorage.removeItem('tasks');

    console.log('All tasks have been deleted.');
  }
}
