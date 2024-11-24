import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { SmpDashboardComponent } from './pages/dashboard/smp-dashboard/smp-dashboard/smp-dashboard.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'smp-dashboard',
    loadChildren: () =>
      import('./pages/dashboard/smp-dashboard/smp-dashboard.module').then(
        (m) => m.SmpDashboardModule
      ),
  },
  {
    path: 'admin-dashboard',
    loadChildren: () =>
      import('./pages/dashboard/admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
