import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmpDashboardComponent } from './smp-dashboard/smp-dashboard.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

const routes: Routes = [{ path: '', component: SmpDashboardComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SmpDashboardModule {
  constructor() {
    console.log('smp-dashboard-module loading....'); 
  }
}
