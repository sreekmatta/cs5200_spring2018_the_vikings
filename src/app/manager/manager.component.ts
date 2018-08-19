import {Component, Input, OnInit} from '@angular/core';
import {CriticServiceClient} from '../services/critic.service.client';
import {forEach} from '../../../node_modules/@angular/router/src/utils/collection';
import {ArtistServiceClient} from '../services/artist.service.client';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  @Input() entity: string;
  resultSet: any;
  edit: boolean;
  newResult: any = {};

  constructor(private artistService: ArtistServiceClient,
              private criticService: CriticServiceClient) { }

  ngOnInit() {
    if (this.entity === 'critic') {
      this.loadCritics();
    } else if (this.entity === 'artist') {
      this.loadArtists();
    }
  }

  loadCritics() {
    this.criticService.findAllCritics()
      .subscribe(response => {
          this.resultSet = response;
        }
      , () => alert('Couldn\'t load critics!'));
  }

  loadArtists() {
    this.artistService.findAllArtists()
      .subscribe(response => {
          this.resultSet = response;
        }
        , () => alert('Couldn\'t load artists!'));
  }

  update(result) {
    if (this.entity === 'critic') {
      this.criticService.updateCritic(result)
        .subscribe(() => {
          this.edit = false;
        }, () =>  {
          alert('Couldn\'t edit critic!');
          this.edit = false;
        });
    } else if (this.entity === 'artist') {
      this.artistService.updateArtist(result)
        .subscribe(() => {
          this.edit = false;
        }, () =>  {
          alert('Couldn\'t edit artist!');
          this.edit = false;
        });
    }
  }

  add() {
    if (this.entity === 'critic') {
      this.criticService.createCritic(this.newResult)
        .subscribe(response => {
          this.resultSet.push(response);
        }, () =>  {
          alert('Couldn\'t create critic!');
        });
    } else if (this.entity === 'artist') {
      this.artistService.createArtist(this.newResult)
        .subscribe(response => {
          this.resultSet.push(response);
        }, () =>  {
          alert('Couldn\'t create artist!');
        });
    }
  }

  delete(id) {
    console.log(id);
    if (this.entity === 'critic') {
      this.criticService.deleteCritic(id)
        .subscribe(response => {
          if (response === 'OK') {
            let index = 0;
            let deleteIndex = -1;
            this.resultSet.forEach(function (entry) {
              if (entry.id === id) {
                deleteIndex = index;
              }
              index++;
            });
            if (deleteIndex !== -1) {
              this.resultSet.splice(deleteIndex);
            }
          }
        }, () =>  {
          alert('Couldn\'t delete critic!');
        });
    }
  }
}
