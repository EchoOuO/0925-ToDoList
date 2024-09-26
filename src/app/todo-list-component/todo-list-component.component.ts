import { Component } from '@angular/core';
import { TasksCardsComponent } from './tasks-cards/tasks-cards.component';
import { Tasks } from '../../../type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list-component',
  standalone: true,
  imports: [TasksCardsComponent, FormsModule],
  templateUrl: './todo-list-component.component.html',
  styleUrl: './todo-list-component.component.scss',
})
export class TodoListComponentComponent {
  public tasks: Tasks[] = [
    { id: 1, title: 'Buy groceries', status: 'Done' },
    { id: 2, title: 'Finish Angular project', status: 'Done' },
    { id: 3, title: 'Call mom', status: 'Done' },
    { id: 4, title: 'Exercise for 30 minutes', status: 'Done' },
    { id: 5, title: 'Read a book', status: 'Pending' },
  ];
}
