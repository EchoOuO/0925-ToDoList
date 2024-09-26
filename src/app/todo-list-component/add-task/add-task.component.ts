import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Tasks } from '../../../../type';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  @Input() tasks!: Tasks[];

  addedTask: Tasks = {
    id: 0,
    title: '',
    status: '',
  };

  onSubmit(formData: NgForm) {
    this.tasks.push(formData.value);
    formData.reset();
  }
}
