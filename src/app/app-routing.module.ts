import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
  {path:'students', component: StudentsComponent},
  {path:'teachers',component: TeachersComponent},
  {path:'books',component:BookListComponent},
  {path:'book/:id',component:BookComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
