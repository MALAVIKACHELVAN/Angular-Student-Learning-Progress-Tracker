import { Routes } from '@angular/router';
import { CourseList } from './components/course-list/course-list';
import { AddCourse } from './components/add-course/add-course';
import { EditCourse } from './components/edit-course/edit-course';

export const routes: Routes = [
    {path:'',redirectTo:'/courses',pathMatch:'full'},
    {path:'courses',component:CourseList},
    {path:'add-course',component:AddCourse},
    {path:'edit-course/:id',component:EditCourse}
];
