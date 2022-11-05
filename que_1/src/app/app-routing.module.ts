import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { DisplayDataArrComponent } from './display-data-arr/display-data-arr.component';
import { UserInputComponent } from './user-input/user-input.component';
import { DisplayArrComboComponent } from './display-arr-combo/display-arr-combo.component';

const routes: Routes = [
  { path: 'first', component: DisplayDataComponent },
  { path: 'second', component: DisplayDataArrComponent },
  { path: 'third', component: DisplayArrComboComponent },
  { path: 'forth', component: UserInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
