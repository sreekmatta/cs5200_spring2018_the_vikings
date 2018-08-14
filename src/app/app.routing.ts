import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TrackComponent} from './track/track.component'

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'track/:id', component: TrackComponent},
  {path: 'search/:query', component: SearchResultsComponent},
  {path: '**', component: AppComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
