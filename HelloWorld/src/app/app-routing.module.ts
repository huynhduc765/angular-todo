
//import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo:'/body', pathMatch: 'full'},
  { path: 'body', component: BodyComponent},
  // { path: 'departments/:id', component: DepartmentDetailComponent},
  // { path: 'employees', component: EmployeeListComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[BodyComponent,PagenotfoundComponent]