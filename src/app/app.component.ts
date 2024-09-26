import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoListComponentComponent,
    FooterComponent,
    HeaderComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '0925-ToDoList';
}
