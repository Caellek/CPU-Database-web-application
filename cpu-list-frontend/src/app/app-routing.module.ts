import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpuListComponent } from './components/cpu-list/cpu-list.component';
import { CpuDetailsComponent } from './components/cpu-details/cpu-details.component';
import { CpuEditComponent } from './components/cpu-edit/cpu-edit.component';


const routes: Routes = [
  {path: '', redirectTo: 'cpus', pathMatch: 'full'},
  {path: 'cpus', component: CpuListComponent},
  {path: 'cpus/:id', component: CpuDetailsComponent},
  {path: 'cpus/:id/edit', component: CpuEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
