import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineAcademyComponent } from './online-academy/online-academy.component';


const routes: Routes = [
  {path: 'online-academy', component: OnlineAcademyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
