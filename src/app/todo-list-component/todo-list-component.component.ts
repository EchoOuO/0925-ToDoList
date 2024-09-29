import { Component, OnInit } from '@angular/core';
import { TasksCardsComponent } from './tasks-cards/tasks-cards.component';
import { Tasks } from '../../../type';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-todo-list-component',
  standalone: true,
  imports: [TasksCardsComponent, FormsModule, HttpClientModule],
  templateUrl: './todo-list-component.component.html',
  styleUrl: './todo-list-component.component.scss',
})
export class TodoListComponentComponent {
  constructor(private http: HttpClient) {}

  public tasks: Tasks[] = [];

  ngOnInit() {
    // For local file (assets/data/tasks.json)
    // this.http.get<any>('assets/data/tasks.json').subscribe((data) => {
    //   if (!data) {
    //     return;
    //   }
    //   this.tasks = data.tasks;
    // });

    // For sesstionStorage
    const tempData = sessionStorage.getItem('tasks');
    if (!tempData) {
      return;
    }
    this.tasks = JSON.parse(tempData);
  }
}
