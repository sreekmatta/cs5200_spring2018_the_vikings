import {Component, OnInit} from '@angular/core';
import {UploadFileService} from '../upload/upload-file.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Track} from '../models/Track';

@Component({
  selector: 'app-create-track-form',
  templateUrl: './create-track-form.component.html',
  styleUrls: ['./create-track-form.component.css', '../../assets/css/style.css']
})
export class CreateTrackFormComponent implements OnInit {

  track: Track;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = {percentage: 0};

  constructor(private uploadService: UploadFileService) {
  }

  ngOnInit() {
    this.track = new Track();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.track)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
      });

    this.selectedFiles = undefined;
  }
}
