// edit-course.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/course-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-course.html',
  styleUrls: ['./edit-course.css'],
})
export class EditCourse implements OnInit {
  course$!:Observable<Course>;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course$=this.courseService.getCourseById(id);
    this.loading=false;
  }

  updateCourse(form:NgForm,course:Course): void {
    if (this.course$) {
      this.courseService.updateCourse(Number(course.id), course).subscribe({
        next: () => {
          alert('Course updated successfully!');
          console.log(form.value);
          this.router.navigate(['/courses']);
        },
        error: (err) => {
          console.error('Error updating course:', err);
        },
      });
    }
  }
}