import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../assets/css/style.css']
})
export class DashboardComponent implements OnInit {

  constructor(private appComp: AppComponent) {
    appComp.ngOnInit();
  }

  ngOnInit() {
  }

}
