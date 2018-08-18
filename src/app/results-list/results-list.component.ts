import {Component, OnInit, Input} from '@angular/core';
import {Track} from '../models/Track';
import {faPlusCircle, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {DashboardRightPaneComponent} from '../dashboard-right-pane/dashboard-right-pane.component';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  @Input()
  resultList;
  @Input()
  myLibrary;
  @Input()
  domainObject;

  faPlusCircle = faPlusCircle;
  faThumbsUp = faThumbsUp;

  constructor(private router: Router, private dashboardPane: DashboardRightPaneComponent) {
    document.addEventListener('play', function (e) {
      const audios = document.getElementsByTagName('audio');
      for (let i = 0, len = audios.length; i < len; i++) {
        if (audios[i] !== e.target) {
          audios[i].pause();
        }
      }
    }, true);
    console.log(this.resultList);

  }

  ngOnInit() {
    this.toggleCssInjector();
    console.log(this.resultList);
  }

  likeTrack(trackId) {
  }

  refreshList(htmlInsideModal) {
    htmlInsideModal.close();
    this.dashboardPane.ngOnInit();
  }

  toggleCssInjector() {
    const head = document.head;
    const link = document.createElement('link');
    link.id = 'injected';
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'assets/css/form.css';
    head.appendChild(link);
  }
}
