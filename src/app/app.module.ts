import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routing';
import { MusicHubComponent } from './music-hub/music-hub.component';
import {PersonServiceClient} from './services/person.service.client';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    MusicHubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [PersonServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
