// edit-course.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/course-service';

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-course.html',
  styleUrls: ['./edit-course.css'],
})
export class EditCourse implements OnInit {
  course: Course | null = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCourse(id);
  }

  loadCourse(id: number): void {
    this.courseService.getCourseById(id).subscribe({
      next: (data) => {
        this.course = data;
        this.loading = false;
        console.log("Loading successful",this.course.title);
      },
      error: (err) => {
        console.error('Error fetching course:', err);
        this.loading = false;
      },
    });
  }

  updateCourse(form: NgForm): void {
    if (this.course) {
      this.courseService.updateCourse(Number(this.course.id), this.course).subscribe({
        next: () => {
          alert('Course updated successfully!');
          this.router.navigate(['/courses']);
        },
        error: (err) => {
          console.error('Error updating course:', err);
        },
      });
    }
  }
}