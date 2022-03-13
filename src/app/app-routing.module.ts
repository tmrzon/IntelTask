import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllApisComponent } from './COMPONENTS/all-apis/all-apis.component';
import { SortApisComponent } from './COMPONENTS/sort-apis/sort-apis.component';


const routes: Routes = [
  { path: '', component: AllApisComponent },
  { path: ':sortBy', component: AllApisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
