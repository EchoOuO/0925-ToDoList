import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from '../../../../type';
import { CardComponent } from './card/card.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { FormsModule } from '@angular/forms';

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

  ngOnInit(): void {
    this.filteredTasks = this.tasks;
  }

  onFilterChange(event: any) {
    if (event.target.value === 'All') {
      this.isFiltered = false;
      this.filteredTasks = this.tasks;
      this.filterType = ['Done', 'Pending'];
    } else {
      this.isFiltered = true;
      this.filterType = [event.target.value];
      this.filteredTasks = this.tasks.filter((task) => {
        return task.status === event.target.value;
      });
    }
  }
}
