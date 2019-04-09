import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { JobComponent } from './components/job/job.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: JobComponent },
  { path: '', component: JobComponent },
  { path: 'detail/:id', component: JobDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
