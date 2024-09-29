import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Tasks } from '../../../../type';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  constructor(private http: HttpClient) {}

  @Input() tasks!: Tasks[];

  addedTask: Tasks = {
    id: '',
    title: '',
    status: '',
  };

  onSubmit(formData: NgForm) {
    const tempFormData = { id: uuidv4(), ...formData.value };
    this.tasks.push(tempFormData);
    sessionStorage.setItem('tasks', JSON.stringify(this.tasks));
    formData.reset();

    console.log('Task has been added: ', tempFormData);
  }
}
