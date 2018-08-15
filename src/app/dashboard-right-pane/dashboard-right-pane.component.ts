import {Component, Input, OnInit} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-right-pane',
  templateUrl: './dashboard-right-pane.component.html',
  styleUrls: ['./dashboard-right-pane.component.css']
})
export class DashboardRightPaneComponent implements OnInit {
  @Input()
  domainObject;

  faPlusCircle = faPlusCircle;

  constructor() {
  }

  ngOnInit() {
  }

}
