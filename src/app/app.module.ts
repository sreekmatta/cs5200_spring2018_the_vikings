import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {routing} from './app.routing';
import {MusicHubComponent} from './music-hub/music-hub.component';
import {PersonServiceClient} from './services/person.service.client';
import {ArtistServiceClient} from './services/artist.service.client';
import {CriticServiceClient} from './services/critic.service.client';
import {FormsModule} from '@angular/forms';
import {NapsterServiceClient} from './services/napster.service.client';
import {SearchResultsComponent} from './search-results/search-results.component';
import {TrackResultsListComponent} from './track-results-list/track-results-list.component';
import {CriticComponent} from './critic/critic.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TrackComponent} from './track/track.component';
import {HttpClientModule} from '@angular/common/http';
import {CreateTrackFormComponent} from './create-track-form/create-track-form.component';
import {UploadFileService} from './upload/upload-file.service';
import {DashboardRightPaneComponent} from './dashboard-right-pane/dashboard-right-pane.component';
import {TrackServiceClient} from './services/track.service.client';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    MusicHubComponent,
    SearchResultsComponent,
    TrackResultsListComponent,
    CriticComponent,
    DashboardComponent,
    TrackComponent,
    CreateTrackFormComponent,
    DashboardRightPaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ArtistServiceClient, CriticServiceClient, PersonServiceClient, NapsterServiceClient, UploadFileService, TrackServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
