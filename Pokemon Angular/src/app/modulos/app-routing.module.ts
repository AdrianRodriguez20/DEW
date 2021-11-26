import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildComponent } from '../components/wild/wild.component';
import { LabComponent } from '../components/lab/lab.component';
const routes: Routes = [
  { path: '', component:  WildComponent },
  { path: 'lab', component:  LabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
