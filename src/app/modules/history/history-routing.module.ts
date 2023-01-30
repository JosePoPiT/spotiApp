import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoyPageComponent } from './pages/histoy-page/histoy-page.component';

const routes: Routes = [
  {
    path: '',
    component: HistoyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
