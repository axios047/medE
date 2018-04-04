import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StartComponent } from './start/start.component';
import { PnfComponent } from './pnf/pnf.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  { path: '**', component: PnfComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StartComponent,
    PnfComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
