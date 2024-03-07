import { Component, OnInit } from '@angular/core';
import { AdminUploadService } from './admin-upload.service';

@Component({
  selector: 'app-admin-upload',
  templateUrl: './admin-upload.component.html',
  styleUrls: ['./admin-upload.component.css']
})
export class AdminUploadComponent implements OnInit {

  constructor(private adminUploadService :AdminUploadService) { }

  ngOnInit(): void {
  }

  onTableSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.adminUploadService.uploadFile(file)
        .subscribe(
          response => {
            console.log('File uploaded successfully:', response);
            // Handle the response from the backend
          },
          error => {
            console.error('Error uploading file:', error);
            // Handle the error
          }
        );
    }
  }
  onPlayersSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.adminUploadService.uploadFilePlayers(file)
        .subscribe(
          response => {
            console.log('File uploaded successfully:', response);
            // Handle the response from the backend
          },
          error => {
            console.error('Error uploading file:', error);
            // Handle the error
          }
        );
    }
  }
  onContractsSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.adminUploadService.uploadFileContracts(file)
        .subscribe(
          response => {
            console.log('File uploaded successfully:', response);
            // Handle the response from the backend
          },
          error => {
            console.error('Error uploading file:', error);
            // Handle the error
          }
        );
    }
  }
  onFixturesSelected(event:any){
    const file: File = event.target.files[0];

    if (file) {
      this.adminUploadService.uploadFileFixtures(file)
        .subscribe(
          response => {
            console.log('File uploaded successfully:', response);
            // Handle the response from the backend
          },
          error => {
            console.error('Error uploading file:', error);
            // Handle the error
          }
        );
    }
  }
}
