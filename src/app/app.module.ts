import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmpDashboardComponent } from './pages/dashboard/smp-dashboard/smp-dashboard/smp-dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SmpDashboardComponent,
    AboutComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
