import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../models/Person';
import {PersonServiceClient} from '../services/person.service.client';
import {Album} from '../models/Album';
import {ArtistServiceClient} from '../services/artist.service.client';
import {Artist} from '../models/Artist';
import {NapsterServiceClient} from '../services/napster.service.client';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artistId: String;
  person: Person;
  artistResult: Artist;
  imageURL: String;
  albums: Album[];
  bio: String;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private napsterService: NapsterServiceClient,
              private personService: PersonServiceClient,
              private artistService: ArtistServiceClient) {
    this.artistId = this.route.snapshot.paramMap.get('id');
    this.personService.checkSession().subscribe(
      (person: Person) => {
        this.person = person;
      }
      , error => alert('could not load user'));
    this.artistService.findArtistById(this.artistId.split('.').pop())
      .subscribe(
        (response: Artist) => {
          if (response) {
            if (response.napsterId) {
              this.fetchFromNapster('art.' + response.napsterId);
            } else {
              this.artistResult = response;
              this.imageURL = 'https://cloud.netlifyusercontent.com/assets/' +
                '344dbf88-fdf9-42bb-adb4-46f01eedd629/514dc845-04f5-4538-8a4f-869b64243265/1-2.jpg';
            }
          } else {
            this.fetchFromNapster(this.artistId);
          }
        },
        error => alert('Our Server threw an error!'));
  }

  fetchFromNapster(artistId) {
    this.napsterService.findArtistById(artistId)
      .subscribe(response => {
          this.artistResult = response['artists'][0];
          this.bio = response['artists'][0]['bios'][0]['bio'];
          console.log(response['artists'][0]);
          this.napsterService.getArtistImage(response['artists'][0]['links']['images']['href'])
            .subscribe(resp => {
                this.imageURL = resp['images'][0].url;
              },
              error => alert('Server couldn\'t find an artist image!'));
          this.napsterService.getArtistAlbums(response['artists'][0]['links']['albums']['href'])
            .subscribe(resp => {
                this.albums = resp['albums'];
                console.log(this.albums);
              },
              error => alert('Server couldn\'t find an artist albums!'));
        },
        error => alert('Napster Server threw an error!'));
  }

  ngOnInit() {
  }

  goToAlbumPage(aid){
    this.router.navigate(['album' + '/' + aid]);
  }

}
