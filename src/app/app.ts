import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CourseList } from "./components/course-list/course-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseList,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Student_Course_Tracker');
}
