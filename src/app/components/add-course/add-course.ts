import { Component } from '@angular/core';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/course-service';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-add-course',
  imports: [FormsModule],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css',
})
export class AddCourse {
  constructor(private courseService:CourseService, private router:Router){

  }
  newCourse:Course={
    id:0,
    title:'',
    instructor: '',
    duration: '',
    category: '',
    price: 0,
    description: '',
    status: 'Active'
  };

  onSubmit():void{
    this.courseService.addCourse(this.newCourse).subscribe({
      next:(data)=>{
        console.log("Course Added Successfully",data);
        alert("Coursed added succesfully");
        this.router.navigate(["/courses"]);
      },
      error:(err)=>{
        console.log("Error Adding courses",err);
      }
    })
  }
}
